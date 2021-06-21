'use strict';
module.exports = (sequelize, DataTypes) => {
  const Clubs = sequelize.define('Clubs', {
    name: DataTypes.STRING,
    address: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    zipCode: DataTypes.STRING
  }, {});
  Clubs.associate = function(models) {
    // associations can be defined here
  };
  return Clubs;
};