const { apiResponse } = require("../lib/ResponseController");
const logger = require("../lib/logger");
const dataToSnakeCase = require("../lib/data_to_snake_case");
const {
  CustomerModel,
  RoleModel,
  DivisionModel,
  sequelize,
  UserModel,
} = require("../init/mysql-init");
const CustomerController = {};

CustomerController.post = async (req, res) => {
  try {
    const { customer } = req.body;

    const result = await CustomerModel.create(customer);
    result.data = result.toJSON();
    console.log(result);
    res.send(
      dataToSnakeCase(
        apiResponse({
          statusCode: 200,
          message: "sucessful",
          data: result.toJSON(),
        })
      )
    );
  } catch (error) {
    res.send(
      dataToSnakeCase(
        apiResponse({
          isSuccess: false,
          statusCode: 200,
          message: error.message,
        })
      )
    );
  }
};

CustomerController.get = async (req, res) => {
  try {
    const company_id = req.params.id;

    const result = await CustomerModel.findAll({
      where: { company_id },
      raw: true,
    });
    console.log(result);
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
    res.send(
      dataToSnakeCase(
        apiResponse({
          isSuccess: false,
          statusCode: 200,
          message: error.message,
        })
      )
    );
  }
};

module.exports = CustomerController;
