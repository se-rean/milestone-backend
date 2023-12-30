const { apiResponse } = require("../lib/ResponseController");
const logger = require("../lib/logger");
const dataToSnakeCase = require("../lib/data_to_snake_case");
const regcodeWrapper = require("../lib/regcode-generator-wrapper");
const { CompanyModel, SitesModel, sequelize } = require("../init/mysql-init");

const CompanyController = {};

CompanyController.post = async (req, res) => {
  logger.info("Entering - create company");

  const { sites, company_name, file_upload, address } = req.body;
  const transaction = await sequelize.transaction();

  try {
    const subscriberId = regcodeWrapper();
    const company = await CompanyModel.create({
      company_id: subscriberId,
      company_name,
      address,
      file_upload,
    });

    if (sites) {
      sites.forEach((element) => {
        delete element.id;
        element.company_id = subscriberId;
      });
      await SitesModel.bulkCreate(sites, { transaction });
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

CompanyController.get = async (req, res) => {
  logger.info("Entering - create company");
  try {
    // CompanyModel.hasMany(SitesModel, { foreignKey: "company_id", as: "sites" });
    // SitesModel.belongsTo(CompanyModel, { foreignKey: "company_id" });

    const { page, page_size } = req.query;
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
          order: [["id", "DESC"]],
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

      return { ...item, sites };
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
