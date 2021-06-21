'use strict';
module.exports = (sequelize, DataTypes) => {
  const Events = sequelize.define('Events', {
    hostId: DataTypes.INTEGER,
    clubId: DataTypes.INTEGER,
    groupId: DataTypes.INTEGER,
    name: DataTypes.STRING,
    date: DataTypes.DATE,
    capacity: DataTypes.INTEGER
  }, {});
  Events.associate = function(models) {
    // associations can be defined here
  };
  return Events;
};