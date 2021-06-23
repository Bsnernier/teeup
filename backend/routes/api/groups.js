const express = require("express");
const asyncHandler = require("express-async-handler");

const { setTokenCookie, requireAuth } = require("../../utils/auth");
const { check } = require("express-validator");
const { handleValidationErrors } = require("../../utils/validation");

const { User, UserGroup, Group, Event } = require("../../db/models");

const router = express.Router();

router.get(
  "/",
  requireAuth,
  asyncHandler(async (req, res) => {
    const allGroups = await UserGroup.findAll({
      include: [ User, Group, Event ],
      order: [["createdAt", "DESC"]]
    });
    return res.json(allGroups)
  })
);

module.exports = router;
