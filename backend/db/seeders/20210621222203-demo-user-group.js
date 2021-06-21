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
          groupId: 2,
        },
        {
          userId: 3,
          groupId: 2,
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete("UserGroups", {
      userId: { [Op.in]: [1, 2, 3] },
    });
  },
};
