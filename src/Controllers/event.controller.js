const asyncHandler = require("express-async-handler");
const Event = require("../Models/event.model.js");

const addEvent = asyncHandler(async (req, res) => {
  const { title, description, image, color, mainpaage_url } = req.body;
  if (!title || !description || !image || !color || !mainpaage_url) {
    res.status(400);
    throw new Error("Please enter all the information");
  }
  const event = await Event.create({
    title,
    description,
    image,
    color,
    mainpaage_url,
  });
});
const getAllMemebers = asyncHandler(async (req, res) => {
  const teams = await Team.find({});
  if (!teams) {
    return res.status(404).json({ message: "No team members" });
  }
  return res.status(200).json(teams);
});

const getMember = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const member = await Team.findById(id);
  if (!member) {
    return res.status(404).json({ message: "Member not found" });
  }
  return res.status(200).json(member);
});

const updateMember = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { name, position, image, linkedin, github, level } = req.body;
  if (!name || !position || !image || !linkedin || !github || !level) {
    res.status(400);
    throw new Error("Please enter all the information");
  }
  const member = await Team.findByIdAndUpdate(id, {
    name,
    position,
    image,
    linkedin,
    github,
    level,
  });
});

const deleteMember = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const member = await Team.findByIdAndDelete(id);
  return res.status(200).json(member);
});

module.exports = {
  getAllMemebers,
  getMember,
  addMember,
  updateMember,
  deleteMember,
};
