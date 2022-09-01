'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Network extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Network.init({
    facebook: DataTypes.STRING,
    linkedin: DataTypes.STRING,
    instagram: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Network',
  });
  return Network;
};