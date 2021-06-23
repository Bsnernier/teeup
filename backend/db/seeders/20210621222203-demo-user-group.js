"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "UserGroups",
      [
        {
          userId: 1,
          groupId: 1,
        },
        {
          userId: 2,
          groupId: 1,
        },
        {
          userId: 3,
          groupId: 1,
        },
        {
          userId: 4,
          groupId: 1,
        },
        {
          userId: 5,
          groupId: 2,
        },
        {
          userId: 6,
          groupId: 2,
        },
        {
          userId: 7,
          groupId: 2,
        },
        {
          userId: 1,
          groupId: 2,
        },
        {
          userId: 2,
          groupId: 3,
        },
        {
          userId: 3,
          groupId: 3,
        },
        {
          userId: 4,
          groupId: 3,
        },
        {
          userId: 5,
          groupId: 3,
        },
        {
          userId: 6,
          groupId: 4,
        },
        {
          userId: 7,
          groupId: 4,
        },
        {
          userId: 1,
          groupId: 4,
        },
        {
          userId: 2,
          groupId: 4,
        },
        {
          userId: 3,
          groupId: 5,
        },
        {
          userId: 4,
          groupId: 5,
        },
        {
          userId: 5,
          groupId: 5,
        },
        {
          userId: 6,
          groupId: 5,
        },
        {
          userId: 7,
          groupId: 6,
        },
        {
          userId: 1,
          groupId: 6,
        },
        {
          userId: 2,
          groupId: 6,
        },
        {
          userId: 3,
          groupId: 6,
        },
        {
          userId: 4,
          groupId: 7,
        },
        {
          userId: 5,
          groupId: 7,
        },
        {
          userId: 6,
          groupId: 7,
        },
        {
          userId: 7,
          groupId: 7,
        },
        {
          userId: 1,
          groupId: 8,
        },
        {
          userId: 2,
          groupId: 8,
        },
        {
          userId: 3,
          groupId: 8,
        },
        {
          userId: 4,
          groupId: 8,
        },
        {
          userId: 5,
          groupId: 9,
        },
        {
          userId: 6,
          groupId: 9,
        },
        {
          userId: 7,
          groupId: 9,
        },
        {
          userId: 1,
          groupId: 9,
        },
        {
          userId: 2,
          groupId: 10,
        },
        {
          userId: 3,
          groupId: 10,
        },
        {
          userId: 4,
          groupId: 10,
        },
        {
          userId: 5,
          groupId: 10,
        },
        {
          userId: 6,
          groupId: 11,
        },
        {
          userId: 7,
          groupId: 11,
        },
        {
          userId: 1,
          groupId: 11,
        },
        {
          userId: 2,
          groupId: 11,
        },
        {
          userId: 3,
          groupId: 12,
        },
        {
          userId: 4,
          groupId: 12,
        },
        {
          userId: 5,
          groupId: 12,
        },
        {
          userId: 6,
          groupId: 12,
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete("UserGroups", {
      userId: { [Op.in]: [1, 2, 3, 4, 5, 6, 7] },
    });
  },
};
