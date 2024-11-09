const express = require("express");
const {
  addMember,
  getMember,
  updateMember,
  deleteMember,
  getAllMemebers,
} = require("../Controllers/team.controller.js");
const router = express.Router();

router.get("/", getAllMemebers);
router.get("/:id", getMember);
router.post("/", addMember);
router.put("/:id", updateMember);
router.delete("/:id", deleteMember);

module.exports = router;
