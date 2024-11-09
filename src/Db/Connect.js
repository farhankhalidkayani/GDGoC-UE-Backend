const mongoose = require("mongoose");
const asyncHandler = require("express-async-handler");
const connect = asyncHandler(async () => {
  await mongoose.connect(`${process.env.MONGODB_URI}`);
  console.log("DB Connected Successfully");
});

module.exports = connect;
