"use strict";
const faker = require("faker");
const bcrypt = require("bcryptjs");

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Users",
      [
        {
          email: "demo@user.io",
          username: "Demo-lition",
          hashedPassword: bcrypt.hashSync("password"),
          firstName: "Demo",
          lastName: "Lition",
          handicap: 37,
        },
        {
          email: faker.internet.email(),
          username: "FakeUser1",
          hashedPassword: bcrypt.hashSync(faker.internet.password()),
          firstName: "Fake",
          lastName: "User",
          handicap: 99,
        },
        {
          email: faker.internet.email(),
          username: "FakeUser2",
          hashedPassword: bcrypt.hashSync(faker.internet.password()),
          firstName: "Faker",
          lastName: "Userer",
          handicap: 2,
        },
        {
          email: faker.internet.email(),
          username: "Invincible",
          hashedPassword: bcrypt.hashSync(faker.internet.password()),
          firstName: "Mark",
          lastName: "Grayson",
          handicap: 18,
        },
        {
          email: faker.internet.email(),
          username: "Superman",
          hashedPassword: bcrypt.hashSync(faker.internet.password()),
          firstName: "Clark",
          lastName: "Kent",
          handicap: 0,
        },
        {
          email: faker.internet.email(),
          username: "Jujutsu",
          hashedPassword: bcrypt.hashSync(faker.internet.password()),
          firstName: "Nobara",
          lastName: "Kugisaki",
          handicap: 3,
        },
        {
          email: faker.internet.email(),
          username: "Rainbowleprechaun",
          hashedPassword: bcrypt.hashSync(faker.internet.password()),
          firstName: "Paul",
          lastName: "Joneson",
          handicap: 3,
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(
      "Users",
      {
        username: { [Op.in]: ["Demo-lition", "FakeUser1", "FakeUser2", "Invincible", "Superman", "Jujutsu", "Rainbowleprechaun"] },
      },
      {}
    );
  },
};
