const Sequelize = require("sequelize");

class SitesModel extends Sequelize.Model {
  static init(sequelize, DataTypes) {
    return super.init(
      {
        site_address: DataTypes.STRING(255),
        country: DataTypes.STRING(255),
        site_state: DataTypes.STRING(255),
        site_suburb: DataTypes.STRING(255),
        site_contact_person: DataTypes.STRING(255),
        site_person_mobile: DataTypes.STRING(255),
        site_person_email: DataTypes.STRING(255),
        site_status: DataTypes.STRING(255),
        company_id: DataTypes.STRING(255),
      },
      {
        modelName: "SitesModel",
        tableName: "site_v2",
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
