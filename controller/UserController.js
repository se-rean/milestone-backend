const { apiResponse } = require("../lib/ResponseController");
const logger = require("../lib/logger");
const dataToSnakeCase = require("../lib/data_to_snake_case");
// const {
//   SubscriberModel,
//   TransactionModel,
//   sequelize,
// } = require('../../init/mysql-init')

const UserController = {};

UserController.get = async (req, res) => {
  logger.info("Entering - create user");
  try {
    res.send(
      dataToSnakeCase(
        apiResponse({
          statusCode: 200,
          message: "sucessful",
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