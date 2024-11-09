const asyncHandler = require("express-async-handler");
const Event = require("../Models/events.model.js");

const addEvent = asyncHandler(async (req, res) => {
  const { title, description, image, color, mainpage_url } = req.body;
  if (!title || !description || !image || !color || !mainpage_url) {
    res.status(400);
    throw new Error("Please enter all the information");
  }
  const event = await Event.create({
    title,
    description,
    image,
    color,
    mainpage_url,
  });
  return res.status(200).json(event);
});
const getAllEvents = asyncHandler(async (req, res) => {
  const events = await Event.find({});
  if (!events) {
    return res.status(404).json({ message: "No events" });
  }
  return res.status(200).json(events);
});

const getEvent = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const event = await Event.findById(id);
  if (!event) {
    return res.status(404).json({ message: "Event not found" });
  }
  return res.status(200).json(event);
});

const updateEvent = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { title, description, image, color, mainpage_url } = req.body;
  if (!title || !description || !image || !color || !mainpage_url) {
    res.status(400);
    throw new Error("Please enter all the information");
  }
  const event = await Event.findByIdAndUpdate(
    id,
    {
      title,
      description,
      image,
      color,
      mainpage_url,
    },
    { new: true }
  );
  return res.status(200).json(event);
});

const deleteEvent = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const event = await Event.findByIdAndDelete(id);
  return res.status(200).json(event);
});

module.exports = {
  getAllEvents,
  getEvent,
  addEvent,
  updateEvent,
  deleteEvent,
};
