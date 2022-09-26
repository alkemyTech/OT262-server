'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Member extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Member.init({
    name: DataTypes.STRING,
    image: DataTypes.TEXT('long'),
    rol: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Member',
    timestamps: true,
    paranoid: true
  });
  return Member;
};