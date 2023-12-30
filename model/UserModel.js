const Sequelize = require("sequelize");

class UserModel extends Sequelize.Model {
  static init(sequelize, DataTypes) {
    return super.init(
      {
        username: DataTypes.STRING(255),
        password: DataTypes.STRING(45),
        ip: DataTypes.STRING(45),
        role: DataTypes.STRING(45),
        email: DataTypes.STRING(45),
        first_name: DataTypes.STRING(45),
        last_name: DataTypes.STRING(45),
        department: DataTypes.STRING(45),
        position: DataTypes.STRING(45),
        phone_no: DataTypes.STRING(45),
        site_address: DataTypes.STRING(45),
        country: DataTypes.STRING(45),
        state: DataTypes.STRING(45),
        suburb: DataTypes.STRING(45),
        expiration_date: DataTypes.STRING(45),
        MFA: DataTypes.STRING(45),
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
