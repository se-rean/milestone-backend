const { apiResponse } = require("../lib/ResponseController");
const logger = require("../lib/logger");
const dataToSnakeCase = require("../lib/data_to_snake_case");
const AuthController = {};
const { UserModel, LogModel } = require("../init/mysql-init");
const jwt = require("jsonwebtoken");

const generateAccessToken = (user) => {
  return jwt.sign({ user }, process.env.ACCESS_SECRET, {
    expiresIn: "7d",
  });
};

const generateRefreshToken = (user) => {
  return jwt.sign({ user }, process.env.REFRESH_SECRET, {
    expiresIn: "7d",
  });
};

AuthController.login = async (req, res) => {
  const { username, password, ip } = req.body;

  try {
    const user = await UserModel.findOne({
      where: {
        username,
        password,
      },
      attributes: { exclude: ["password"] },
    });

    if (!user) {
      logger.info(`Login failed for username: ${username}`);
      throw new Error("Invalid credentials");
    }

    const accessToken = generateAccessToken(user);
    const refreshToken = generateRefreshToken(user);

    const token = { accessToken, refreshToken, expiresIn: "15m" }; // Add expiresIn property

    logger.info(`User ${username} logged in successfully`);
    LogModel.create({
      ip: ip,
      user_id: user.dataValues.id,
      device: "WEb",
      action: "Login",
      type: "Login",
      description: "successfully logged in",
    });
    res.send(
      dataToSnakeCase(
        apiResponse({
          statusCode: 200,
          message: "successful",
          data: { ...user.dataValues, ...token },
        })
      )
    );
  } catch (error) {
    logger.error(`Error during login: ${error}`);
    console.error(error);
    res.send(
      dataToSnakeCase(
        apiResponse({
          statusCode: 200,
          message: error.message,
          isSuccess: false,
          errors: error,
        })
      )
    );
  }
};

module.exports = AuthController;
