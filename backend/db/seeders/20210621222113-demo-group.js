"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Groups",
      [
        {
          name: "Just A Group",
        },
        {
          name: "Just B Group",
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete("Groups", {
      name: { [Op.in]: ["Just A Group", "Just B Group"] },
    });
  },
};
