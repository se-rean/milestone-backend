const Sequelize = require("sequelize");

class LogModel extends Sequelize.Model {
  static init(sequelize, DataTypes) {
    return super.init(
      {
        ip: DataTypes.STRING(255),
        user_id: DataTypes.STRING(45),
        device: DataTypes.STRING(45),
        action: DataTypes.STRING(45),
        type: DataTypes.STRING(45),
        description: DataTypes.STRING(45),
      },
      {
        modelName: "log_trail",
        tableName: "log_trail",
        sequelize,
        timestamps: true,
      }
    );
  }
}

module.exports = LogModel;
