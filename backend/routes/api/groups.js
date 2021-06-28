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
  "/:id",
  requireAuth,
  asyncHandler(async (req, res) => {
    const groupId = Object.keys(req.body)[0];
    const userId = Object.values(req.body)[0];
    const newUserGroup = await UserGroup.create({
      userId,
      groupId,
    });
  })
);

router.delete(
  "/:id",
  requireAuth,
  asyncHandler(async (req, res) => {
    const groupId = req.body.id;
    // const userId = Object.values(req.body)[0];
    const currentGroup = await UserGroup.findByPk(req.params.id);
    if (currentGroup.id === groupId) {
      await currentGroup.destroy();
    }
  })
);

module.exports = router;
