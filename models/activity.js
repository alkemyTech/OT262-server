'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Activity extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Activity.init({
    name: DataTypes.STRING,
    image: DataTypes.TEXT('long'),
    content: DataTypes.TEXT('long'),
    deletedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Activity',
    timestamps: true,
    paranoid: true
  });
  return Activity;
};