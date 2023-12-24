const Sequelize = require("sequelize");

class UserModel extends Sequelize.Model {
  static init(sequelize, DataTypes) {
    return super.init(
      {
        username: DataTypes.STRING(255),
        password: DataTypes.STRING(45),
        ip: DataTypes.STRING(45),
        role: DataTypes.STRING(45),
      },
      {
        modelName: "user",
        tableName: "user",
        sequelize,
        timestamps: true,
      }
    );
  }
}

module.exports = UserModel;
