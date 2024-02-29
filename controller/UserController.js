const { apiResponse } = require("../lib/ResponseController");
const logger = require("../lib/logger");
const dataToSnakeCase = require("../lib/data_to_snake_case");
const {
  UserModel,
  RoleModel,
  DivisionModel,
  sequelize,
} = require("../init/mysql-init");

const UserController = {};

UserController.get = async (req, res) => {
  logger.info("Entering - create user");
  try {
    const { company_id } = req.query;
    if (!company_id) throw new Error("Company Id Required");
    const users = await UserModel.findAll({
      where: {
        company_id: company_id,
      },
      raw: true,
      attributes: { exclude: ["password"] },
    });

    const division = await DivisionModel.findAll({
      where: {
        company_id: company_id,
      },
      raw: true,
    });

    users.forEach((item) => {
      division.forEach((div) => {
        if (div.id == item.department) {
          item.department = div.department_name;
        }
      });
    });

    console.log(users);

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

UserController.create = async (req, res) => {
  logger.info("Entering - create user");
  try {
    const {
      first_name,
      username,
      ip,
      role,
      email,
      last_name,
      department,
      position,
      phone_no,
      site_address,
      country,
      state,
      suburb,
      expiration_date,
      MFA,
      company_id,
    } = req.body;
    console.log(company_id);
    const users = await UserModel.create({
      first_name,
      username,
      ip,
      role,
      email,
      last_name,
      department,
      position,
      phone_no,
      site_address,
      country,
      state,
      suburb,
      expiration_date,
      MFA,
      company_id,
    });
    console.log(users);
    res.send(
      dataToSnakeCase(
        apiResponse({
          statusCode: 200,
          message: "sucessful",
          data: users.dataValues,
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

UserController.update = async (req, res) => {
  logger.info("Entering - create user");
  const { id } = req.query;
  try {
    const {
      first_name,
      username,
      ip,
      role,
      email,
      last_name,
      department,
      position,
      phone_no,
      site_address,
      country,
      state,
      suburb,
      expiration_date,
      MFA,
    } = req.body;

    const users = await UserModel.update(
      {
        first_name,
        username,
        ip,
        role,
        email,
        last_name,
        department,
        position,
        phone_no,
        site_address,
        country,
        state,
        suburb,
        expiration_date,
        MFA,
      },
      {
        where: {
          id: id,
        },
      }
    );

    res.send(
      dataToSnakeCase(
        apiResponse({
          statusCode: 200,
          message: "sucessful",
          data: users.dataValues,
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

UserController.delete = async (req, res) => {
  logger.info("Entering - delete company");

  const { user_id } = req.query;
  const transaction = await sequelize.transaction();

  try {
    const result = await UserModel.destroy({
      where: {
        id: user_id,
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

UserController.getRole = async (req, res) => {
  logger.info("Entering - Get user role");
  try {
    const roles = await RoleModel.findAll({
      raw: true,
    });

    res.send(
      dataToSnakeCase(
        apiResponse({
          statusCode: 200,
          message: "sucessful",
          data: roles,
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

module.exports = UserController;
