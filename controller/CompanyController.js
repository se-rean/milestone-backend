const { apiResponse } = require("../lib/ResponseController");
const logger = require("../lib/logger");
const dataToSnakeCase = require("../lib/data_to_snake_case");
const regcodeWrapper = require("../lib/regcode-generator-wrapper");
const {
  CompanyModel,
  SitesModel,
  DivisionModel,
  sequelize,
} = require("../init/mysql-init");

const CompanyController = {};

CompanyController.post = async (req, res) => {
  logger.info("Entering - create company");
  console.log(req.body);
  const {
    siteFieldData,
    companyFieldData,
    organizationChart,
    divisionFieldData,
    company_file,
    selectedCheckboxes,
  } = req.body;
  const transaction = await sequelize.transaction();

  try {
    const subscriberId = regcodeWrapper();
    companyFieldData.company_id = subscriberId;
    companyFieldData.username = companyFieldData.contact_person_email;
    companyFieldData.password = regcodeWrapper();
    const company = await CompanyModel.create(companyFieldData, {
      transaction,
    });

    if (siteFieldData) {
      siteFieldData.forEach((element) => {
        delete element.id;
        element.company_id = subscriberId;
      });
      await SitesModel.bulkCreate(siteFieldData, { transaction });
    }

    if (divisionFieldData) {
      divisionFieldData.forEach((element) => {
        delete element.id;
        element.company_id = subscriberId;
      });
      await DivisionModel.bulkCreate(divisionFieldData, { transaction });
    }
    await company.save({ transaction });
    await transaction.commit();

    res.send(
      dataToSnakeCase(
        apiResponse({
          statusCode: 200,
          message: "sucessful",
          data: company.dataValues,
        })
      )
    );
  } catch (error) {
    await transaction.rollback();
    logger.error(`Error on - create company - ${error}`);
    res.send(
      dataToSnakeCase(
        apiResponse({
          isSuccess: false,
          statusCode: 402,
          message: error.message,
          errors: "failed",
        })
      )
    );
  }
};

CompanyController.getDivision = async (req, res) => {
  logger.info("Entering - getDivision ");
  try {
    const { company_id } = req.query;
    console.log(req.query);
    if (!company_id) throw new Error("Company Id Required");
    const users = await DivisionModel.findAll({
      where: {
        company_id: company_id,
      },
      raw: true,
      attributes: { exclude: ["password"] },
    });

    res.send(
      dataToSnakeCase(
        apiResponse({
          statusCode: 200,
          message: "sucessful",
          data: users,
        })
      )
    );
  } catch (error) {
    logger.error(`Error on - create transaction subscriber - ${error.message}`);
    res.send(
      dataToSnakeCase(
        apiResponse({
          isSuccess: false,
          statusCode: 402,
          message: error.message,
          errors: "failed",
        })
      )
    );
  }
};

CompanyController.delete = async (req, res) => {
  logger.info("Entering - delete company");

  const { company_id } = req.query;
  const transaction = await sequelize.transaction();

  try {
    const result = await CompanyModel.destroy({
      where: {
        company_id,
      },
      transaction,
    });

    await SitesModel.destroy({
      where: {
        company_id,
      },
      transaction,
    });

    await transaction.commit();

    res.send(
      dataToSnakeCase(
        apiResponse({
          statusCode: 200,
          message: "sucessful",
          data: result,
        })
      )
    );
  } catch (error) {
    await transaction.rollback();
    logger.error(`Error on - create company - ${error}`);
    res.send(
      dataToSnakeCase(
        apiResponse({
          isSuccess: false,
          statusCode: 402,
          message: error.message,
          errors: "failed",
        })
      )
    );
  }
};

CompanyController.update = async (req, res) => {
  logger.info("Entering - update company");

  const { company_id } = req.query;
  const { companyFieldData } = req.body;
  const transaction = await sequelize.transaction();

  try {
    console.log(companyFieldData);
    const result = await CompanyModel.update(companyFieldData, {
      where: {
        company_id,
      },
      transaction,
    });

    if (result == 0) throw new Error("No data updated");
    await transaction.commit();
    res.send(
      dataToSnakeCase(
        apiResponse({
          statusCode: 200,
          message: "sucessful",
          data: result,
        })
      )
    );
  } catch (error) {
    await transaction.rollback();
    logger.error(`Error on - create company - ${error}`);
    res.send(
      dataToSnakeCase(
        apiResponse({
          isSuccess: false,
          statusCode: 402,
          message: error.message,
          errors: "failed",
        })
      )
    );
  }
};

CompanyController.get = async (req, res) => {
  logger.info("Entering - create company");
  try {
    // CompanyModel.hasMany(SitesModel, { foreignKey: "company_id", as: "sites" });
    // SitesModel.belongsTo(CompanyModel, { foreignKey: "company_id" });

    const { page, page_size, companyId } = req.query;
    const paginate = (
      query,
      { page: _page = DEFAULT_PAGE, page_size: _page_size = DEFAULT_PAGE_SIZE }
    ) => {
      const page = parseInt(_page, 10);
      const page_size = parseInt(_page_size, 10);

      const offset = (page - 1) * page_size;
      const limit = page_size;

      return {
        ...query,
        offset,
        limit,
        distinct: true,
      };
    };

    const company = await CompanyModel.findAndCountAll(
      paginate(
        {
          where: { company_id: companyId },
          order: [["id", "DESC"]],
          attributes: { exclude: ["password"] },
          raw: true,
        },
        { page: page || 1, page_size: page_size || 10 }
      )
    );

    const promises = company.rows.map(async (item) => {
      const sites = await SitesModel.findAll({
        where: { company_id: item.company_id },
        raw: true,
      });

      const division = await DivisionModel.findAll({
        where: { company_id: item.company_id },
        raw: true,
      });

      return { ...item, sites, division };
    });

    company.rows = await Promise.all(promises);

    if (!company) throw new Error("company not found!");

    res.send(
      dataToSnakeCase(
        apiResponse({
          statusCode: 200,
          message: "sucessful",
          data: company,
        })
      )
    );
  } catch (error) {
    logger.error(`Error on - create company - ${error.message}`);
    res.send(
      dataToSnakeCase(
        apiResponse({
          isSuccess: false,
          statusCode: 402,
          message: error.message,
          errors: "failed",
        })
      )
    );
  }
};

module.exports = CompanyController;
