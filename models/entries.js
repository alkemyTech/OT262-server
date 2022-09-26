'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class entries extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  entries.init({
    name: DataTypes.STRING,
    image: DataTypes.TEXT('long'),
    content: DataTypes.TEXT('long'),
    categoryId: DataTypes.STRING,
    type: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'entries',
    timestamps: true,
    paranoid: true
  });
  return entries;
};