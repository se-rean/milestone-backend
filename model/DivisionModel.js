const Sequelize = require("sequelize");

class DivisionModel extends Sequelize.Model {
  static init(sequelize, DataTypes) {
    return super.init(
      {
        department_name: DataTypes.STRING(255),
        department_responsible_person: DataTypes.STRING(255),
        company_id: DataTypes.STRING(255),
        staff: DataTypes.STRING(255),
      },
      {
        modelName: "DivisionModel",
        tableName: "division",
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
