'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class userInfo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  userInfo.init({
    username: DataTypes.STRING,
    password: DataTypes.TEXT,
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
    address: DataTypes.STRING,
    userTypeId: DataTypes.INTEGER,
    status: DataTypes.INTEGER,
    createdAt: DataTypes.BIGINT,
    createdBy: DataTypes.INTEGER,
    updatedAt: DataTypes.BIGINT,
    updatedBy: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'userInfo',
  });
  return userInfo;
};