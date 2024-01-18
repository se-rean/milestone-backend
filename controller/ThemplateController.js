const { ThemplateModel } = require("../init/mysql-init");
const { apiResponse } = require("../lib/ResponseController");
const logger = require("../lib/logger");
const dataToSnakeCase = require("../lib/data_to_snake_case");
const ThemplateController = {};
ThemplateController.post = async (req, res) => {
  const { user_id, themeplate, status } = req.body;
  try {
    if (!user_id || !themeplate) throw new Error("Fields Required");
    const Themplate = await ThemplateModel.create(
      {
        user_id,
        themplate: themeplate,
        status,
      },
      {
        raw: true,
      }
    );

    res.send(
      dataToSnakeCase(
        apiResponse({
          statusCode: 200,
          message: "sucessful",
          data: Themplate,
        })
      )
    );
  } catch (error) {
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

ThemplateController.get = async (req, res) => {
  try {
    const Themplate = await ThemplateModel.findAll({
      raw: true,
    });

    res.send(
      dataToSnakeCase(
        apiResponse({
          statusCode: 200,
          message: "sucessful",
          data: Themplate,
        })
      )
    );
  } catch (error) {
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

ThemplateController.delete = async (req, res) => {
  const { id } = req.query;
  try {
    const Themplate = await ThemplateModel.destroy({
      where: {
        id,
      },
    });

    res.send(
      dataToSnakeCase(
        apiResponse({
          statusCode: 200,
          message: "sucessful",
          data: Themplate,
        })
      )
    );
  } catch (error) {
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

ThemplateController.update = async (req, res) => {
  const { id } = req.query;
  const { status } = req.body;
  try {
    if (!status) throw new Error("Status Required");
    const Themplate = await ThemplateModel.update(
      { status },
      {
        where: {
          id,
        },
      }
    );

    res.send(
      dataToSnakeCase(
        apiResponse({
          statusCode: 200,
          message: "sucessful",
          data: Themplate,
        })
      )
    );
  } catch (error) {
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

module.exports = ThemplateController;
