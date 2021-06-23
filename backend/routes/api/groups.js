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
    const allGroups = await UserGroup.findAll({
      include: [User, Group],
      order: [["createdAt", "DESC"]],
    });
    const groups = res.json(allGroups);
    return { groups };
  })
);

router.post(
  "/",
  requireAuth,
  asyncHandler(async (req, res) => {
    // const updatedUserGroups = await UserGroup.create();
  })
);

module.exports = router;
