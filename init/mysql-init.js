require("dotenv").config();
const Sequelize = require("sequelize");
const logger = require("../lib/logger");
const UserModel = require("../model/UserModel");
const CompanyModel = require("../model/CompanyModel");
const SitesModel = require("../model/SitesModel");
const RoleModel = require("../model/RoleModel");

const DEFAULT_TIMEZONE = "+08:00";

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: "mysql",
    logging: (queryString) => logger.info(queryString),
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
      connectionLimit: 10,
    },
    timezone: process.env.DB_TIMEZONE || DEFAULT_TIMEZONE,
  }
);

const models = {
  UserModel: UserModel.init(sequelize, Sequelize),
  CompanyModel: CompanyModel.init(sequelize, Sequelize),
  SitesModel: SitesModel.init(sequelize, Sequelize),
  RoleModel: RoleModel.init(sequelize, Sequelize),
};

/** Create relationship in ORM */
Object.values(models)
  .filter((model) => typeof model.assoc === "function")
  .forEach((model) => model.assoc(models));

module.exports = {
  ...models,
  sequelize,
};
