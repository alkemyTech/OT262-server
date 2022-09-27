'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Organization extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Organization.init({
    name: DataTypes.STRING,
    image: DataTypes.TEXT('long'),
    phone: DataTypes.STRING,
    address: DataTypes.STRING,
    welcomeText: DataTypes.TEXT,
    facebook: DataTypes.STRING,
    linkedin: DataTypes.STRING,
    instagram: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Organization',
    timestamps: true,
    paranoid: true
  });
  return Organization;
};