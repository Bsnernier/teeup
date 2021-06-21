'use strict';
module.exports = (sequelize, DataTypes) => {
  const Rsvps = sequelize.define('Rsvps', {
    eventId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {});
  Rsvps.associate = function(models) {
    // associations can be defined here
  };
  return Rsvps;
};