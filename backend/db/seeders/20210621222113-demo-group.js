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
        {
          name: "Jujutsu Kaisen",
        },
        {
          name: "Stardust Crusaders",
        },
        {
          name: "The Office",
        },
        {
          name: "Parks and Rec",
        },
        {
          name: "Hunter2",
        },
        {
          name: "Fire Force",
        },
        {
          name: "One Piece",
        },
        {
          name: "One Punch",
        },
        {
          name: "Demon Slayer",
        },
        {
          name: "Akame ga kill",
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete("Groups", {
      name: {
        [Op.in]: ["Just A Group",
          "Just B Group",
          "Jujutsu Kaisen",
          "Stardust Crusaders",
          "The Office",
          "Parks and Rec",
          "Hunter2",
          "Fire Force",
          "One Piece",
          "One Punch",
          "Demon Slayer",
          "Akame ga kill",]
      },
    });
  },
};
