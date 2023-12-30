const Sequelize = require("sequelize");

class RoleModel extends Sequelize.Model {
  static init(sequelize, DataTypes) {
    return super.init(
      {
        name: DataTypes.STRING(255),
        access: DataTypes.STRING(45),
      },
      {
        modelName: "roles",
        tableName: "roles",
        sequelize,
        timestamps: true,
      }
    );
  }
}

module.exports = RoleModel;
