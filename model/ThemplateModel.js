const Sequelize = require("sequelize");

class ThemplateModel extends Sequelize.Model {
  static init(sequelize, DataTypes) {
    return super.init(
      {
        user_id: DataTypes.STRING(255),
        themplate: DataTypes.STRING(255),
        status: {
          type: DataTypes.STRING(255),
          defaultValue: "Pending",
        },
      },
      {
        modelName: "themeplateModel",
        tableName: "themeplate",
        sequelize,
        timestamps: true,
      }
    );
  }
}

module.exports = ThemplateModel;
