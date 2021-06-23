const express = require("express");
const asyncHandler = require("express-async-handler");

const { setTokenCookie, requireAuth } = require("../../utils/auth");
const { check } = require("express-validator");
const { handleValidationErrors } = require("../../utils/validation");

const { User, UserGroup, Group, Event, Club } = require("../../db/models");

const router = express.Router();

router.get(
  "/",
  requireAuth,
  asyncHandler(async (req, res) => {
    const allClubs = await Club.findAll({
      include: [Event],
      order: [["createdAt", "DESC"]],
    });
    return res.json(allClubs);
  })
);

module.exports = router;
