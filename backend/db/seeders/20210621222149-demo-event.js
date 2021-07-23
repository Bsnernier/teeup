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
          groupId: 4,
          name: "Lobster Classic",
          date: "2021-07-01 11:00:00",
          capacity: 4,
        },
        {
          hostId: 3,
          clubId: 4,
          groupId: 6,
          name: "App Academy Open",
          date: "2021-02-08 10:00:00",
          capacity: 100,
        },
        {
          hostId: 2,
          clubId: 5,
          groupId: 8,
          name: "Crab Classic",
          date: "2023-06-15 03:00:00",
          capacity: 200,
        },
        {
          hostId: 1,
          clubId: 6,
          groupId: 9,
          name: "Clam Classic",
          date: "2021-06-28 14:00:00",
          capacity: 15000,
        },
        {
          hostId: 3,
          clubId: 7,
          groupId: 11,
          name: "Oyster Open",
          date: "2021-07-05 11:00:00",
          capacity: 4,
        },
        {
          hostId: 2,
          clubId: 8,
          groupId: 1,
          name: "Mussel Match",
          date: "2021-07-26 08:00:00",
          capacity: 200,
        },
        {
          hostId: 1,
          clubId: 2,
          groupId: 2,
          name: "Snail Showdown",
          date: "2021-08-01 14:00:00",
          capacity: 15000,
        },
        {
          hostId: 3,
          clubId: 1,
          groupId: 1,
          name: "Barnacle Battle",
          date: "2021-07-23 11:00:00",
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
        [Op.in]: [
          "Crawfish Classic",
          "Shrimp Classic",
          "Lobster Classic",
          "App Academy Open",
          "Crab Classic",
          "Clam Classic",
          "Oyster Open",
          "Mussel Match",
          "Snail Showdown",
          "Barnacle Battle",
        ],
      },
    });
  },
};
