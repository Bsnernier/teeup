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
        {
          name: "Torrey Pines",
          address: "11480 N Torrey Pines Rd",
          city: "La Jolla",
          state: "California",
          zipCode: "92037",
        },
        {
          name: "Pebble Beach",
          address: "1700 17 Mile Dr",
          city: "Pebble Beach",
          state: "California",
          zipCode: "03581",
        },
        {
          name: "Dyersburg Municipal Golf Course",
          address: "920 Golf Course Rd",
          city: "Dyersburg",
          state: "Tennessee",
          zipCode: "38024",
        },
        {
          name: "Pinehurst No. 2",
          address: "1 Carolina Vista Dr",
          city: "Pinehurst",
          state: "North Carolina",
          zipCode: "28374",
        },
        {
          name: "Augusta National",
          address: "2604 Washington Rd",
          city: "Augusta",
          state: "Georgia",
          zipCode: "30904",
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
          "Torrey Pines",
          "Pebble Beach",
          "Dyersburg Municipal Golf Course",
          "Pinehurst No. 2",
          "Augusta National",
        ],
      },
    });
  },
};
