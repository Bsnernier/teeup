"use strict";
module.exports = (sequelize, DataTypes) => {
  const Club = sequelize.define(
    "Club",
    {
      name: DataTypes.STRING,
      address: DataTypes.STRING,
      city: DataTypes.STRING,
      state: DataTypes.STRING,
      zipCode: DataTypes.STRING,
    },
    {}
  );
  Club.associate = function (models) {
    // associations can be defined here
    Club.hasMany(models.Event, { foreignKey: "clubId" });
  };
  return Club;
};
