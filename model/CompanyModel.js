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
        username: DataTypes.STRING(45),
        password: DataTypes.STRING(45),
        company_id: DataTypes.STRING(45),
        company_organization: DataTypes.STRING(255),
        company_type_of_business: DataTypes.STRING(255),
        company_text_file_number: DataTypes.STRING(255),
        company_acn_number: DataTypes.STRING(255),
        company_communication_address: DataTypes.STRING(255),
        company_country: DataTypes.STRING(255),
        company_state: DataTypes.STRING(255),
        company_suburb: DataTypes.STRING(255),
        contact_person_name: DataTypes.STRING(255),
        contact_person_mobile_no: DataTypes.STRING(255),
        contact_person_email: DataTypes.STRING(255),
        timezone: DataTypes.STRING(255),
        domain: DataTypes.STRING(255),
        account_creation_date: DataTypes.STRING(255),
        account_expiry_date: DataTypes.STRING(255),
        information_security_framework: DataTypes.STRING(255),
        license_allocated: DataTypes.STRING(255),
        organisation_structure: DataTypes.STRING(255),
        company_file: DataTypes.STRING(255),
      },
      {
        modelName: "CompanyModel",
        tableName: "company_v2",
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
