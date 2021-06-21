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
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete("Rsvps", {
      eventId: { [Op.in]: [1, 2, 3] },
    });
  },
};
