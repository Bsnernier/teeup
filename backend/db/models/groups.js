"use strict";
module.exports = (sequelize, DataTypes) => {
  const Group = sequelize.define(
    "Group",
    {
      name: DataTypes.STRING,
    },
    {}
  );
  Group.associate = function (models) {
    // associations can be defined here
    Group.hasMany(models.Event, { foreignKey: "groupId" }),
      Group.hasMany(models.UserGroup, { foreignKey: "groupId" });
  };
  return Group;
};
