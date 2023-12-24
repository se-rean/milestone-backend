const { model } = require("mongoose");
const Sequelize = require("sequelize");
const SitesModel = require("./SitesModel");

class CompanyModel extends Sequelize.Model {
  static init(sequelize, DataTypes) {
    return super.init(
      {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
        },
        company_id: DataTypes.STRING(45),
        company_name: DataTypes.STRING(45),
        address: DataTypes.STRING(255),
      },
      {
        modelName: "CompanyModel",
        tableName: "comp",
        sequelize,
        timestamps: true,
      }
    );
  }

  static assoc(models) {
    this.hasMany(models.SitesModel, { foreignKey: "company_id", as: "sites" });
  }
}

module.exports = CompanyModel;
