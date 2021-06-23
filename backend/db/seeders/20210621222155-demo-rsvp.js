"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Rsvps",
      [
        {
          eventId: 1,
          userId: 1,
        },
        {
          eventId: 2,
          userId: 3,
        },
        {
          eventId: 3,
          userId: 2,
        },
        {
          eventId: 4,
          userId: 4,
        },
        {
          eventId: 5,
          userId: 5,
        },
        {
          eventId: 6,
          userId: 6,
        },
        {
          eventId: 7,
          userId: 7,
        },
        {
          eventId: 8,
          userId: 1,
        },
        {
          eventId: 9,
          userId: 2,
        },
        {
          eventId: 10,
          userId: 3,
        },
        {
          eventId: 10,
          userId: 4,
        },
        {
          eventId: 9,
          userId: 5,
        },
        {
          eventId: 8,
          userId: 6,
        },
        {
          eventId: 7,
          userId: 7,
        },
        {
          eventId: 6,
          userId: 1,
        },
        {
          eventId: 5,
          userId: 2,
        },
        {
          eventId: 4,
          userId: 3,
        },
        {
          eventId: 3,
          userId: 4,
        },
        {
          eventId: 2,
          userId: 5,
        },
        {
          eventId: 1,
          userId: 6,
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete("Rsvps", {
      eventId: { [Op.in]: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] },
    });
  },
};
