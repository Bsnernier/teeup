"use strict";
module.exports = (sequelize, DataTypes) => {
  const Event = sequelize.define(
    "Event",
    {
      hostId: DataTypes.INTEGER,
      clubId: DataTypes.INTEGER,
      groupId: DataTypes.INTEGER,
      name: DataTypes.STRING,
      date: DataTypes.DATE,
      capacity: DataTypes.INTEGER,
    },
    {}
  );
  Event.associate = function (models) {
    // associations can be defined here
    Event.belongsTo(models.User, { foreignKey: "hostId" }),
      Event.belongsTo(models.Club, { foreignKey: "clubId" }),
      Event.belongsTo(models.Group, { foreignKey: "groupId" }),
      Event.hasMany(models.Rsvp, { foreignKey: "eventId" });
  };
  return Event;
};
