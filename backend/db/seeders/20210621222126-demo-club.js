"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Clubs",
      [
        {
          name: "The Farms",
          address: "2100 Club House Dr",
          city: "Dyersburg",
          state: "Tennessee",
          zipCode: "38024",
        },
        {
          name: "Androscoggin Valley Country Club",
          address: "2 Main St",
          city: "Gorham",
          state: "New Hampshire",
          zipCode: "03581",
        },
        {
          name: "Twelve Stones Golf Club",
          address: "1201 W 12 Stones Crossing",
          city: "Goodlettsville",
          state: "Tennessee",
          zipCode: "37072",
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete("Clubs", {
      name: {
        [Op.in]: [
          "The Farms",
          "Androscoggin Valley Country Club",
          "Twelve Stones Golf Club",
        ],
      },
    });
  },
};
