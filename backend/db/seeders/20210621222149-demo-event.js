"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Events",
      [
        {
          hostId: 2,
          clubId: 1,
          groupId: 1,
          name: "Crawfish Classic",
          date: "2022-04-17 08:00:00",
          capacity: 200,
        },
        {
          hostId: 1,
          clubId: 3,
          groupId: 2,
          name: "Shrimp Classic",
          date: "2042-06-18 14:00:00",
          capacity: 15000,
        },
        {
          hostId: 3,
          clubId: 2,
          groupId: 1,
          name: "Shrimp Classic",
          date: "2021-07-01 11:00:00",
          capacity: 4,
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete("Events", {
      name: {
        [Op.in]: ["Crawfish Classic", "Shrimp Classic", "Lobster Classic"],
      },
    });
  },
};
