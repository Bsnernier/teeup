const router = require("express").Router();
const sessionRouter = require("./session.js");
const usersRouter = require("./users.js");
const groupsRouter = require("./groups.js");
const clubsRouter = require("./clubs.js");
const eventsRouter = require("./events.js");

router.use("/session", sessionRouter);

router.use("/users", usersRouter);

router.use("/groups", groupsRouter);

router.use("/clubs", clubsRouter);

router.use("/events", eventsRouter);

module.exports = router;
