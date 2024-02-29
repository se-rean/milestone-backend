const Sequelize = require("sequelize");

class DivisionModel extends Sequelize.Model {
  static init(sequelize, DataTypes) {
    return super.init(
      {
        company_id: DataTypes.STRING(255),
        customer_name: DataTypes.STRING(255),
        customer_trading_as: DataTypes.STRING(255),
        ABN_no: DataTypes.STRING(255),
        ACN_no: DataTypes.STRING(255),
        website: DataTypes.STRING(255),
        local_overseas_customer: DataTypes.STRING(255),
        customer_address: DataTypes.STRING(255),
        country: DataTypes.STRING(255),
        state: DataTypes.STRING(255),
        suburb: DataTypes.STRING(255),
        postcode: DataTypes.STRING(255),
        contact_person_name: DataTypes.STRING(255),
        email: DataTypes.STRING(255),
        customer_category: DataTypes.STRING(255),
        customer_type: DataTypes.STRING(255),
        data_shared_with_customer: DataTypes.STRING(255),
        department_managing_customer: DataTypes.STRING(255),
        customer_manager: DataTypes.STRING(255),
        contract_commencement_date: DataTypes.STRING(255),
        contract_end_date: DataTypes.STRING(255),
        sensitivity_of_data_involved: DataTypes.STRING(255),
        customer_agreement: DataTypes.STRING(255),
        customer_approval_status: DataTypes.STRING(255),
        date_entered: DataTypes.STRING(255),
      },
      {
        modelName: "customerModel",
        tableName: "customer",
        sequelize,
        timestamps: true,
      }
    );
  }

  static assoc(models) {
    this.belongsTo(models.CompanyModel, { foreignKey: "company_id" });
  }
}

module.exports = DivisionModel;
