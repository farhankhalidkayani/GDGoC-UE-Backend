const express = require("express");
const {
  addEvent,
  getEvent,
  updateEvent,
  deleteEvent,
  getAllEvents,
} = require("../Controllers/event.controller.js");
const router = express.Router();

router.get("/", getAllEvents);
router.get("/:id", getEvent);
router.post("/", addEvent);
router.put("/:id", updateEvent);
router.delete("/:id", deleteEvent);

module.exports = router;
