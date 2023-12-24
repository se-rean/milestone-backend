const Sequelize = require("sequelize");

class SitesModel extends Sequelize.Model {
  static init(sequelize, DataTypes) {
    return super.init(
      {
        company_id: DataTypes.STRING(255),
        contact_person: DataTypes.STRING(255),
        site_address: DataTypes.STRING(255),
        phone: DataTypes.STRING(255),
        position: DataTypes.STRING(255),
        structure: DataTypes.STRING(255),
        certification: DataTypes.STRING(255),
        goal: DataTypes.STRING(255),
      },
      {
        modelName: "SitesModel",
        tableName: "sites",
        sequelize,
        timestamps: true,
      }
    );
  }

  static assoc(models) {
    this.belongsTo(models.CompanyModel, { foreignKey: "company_id" });
  }
}

module.exports = SitesModel;
