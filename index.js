const dotenv = require("dotenv");
const express = require("express");
const connect = require("./src/Db/Connect.js");
const cors = require("cors");
const teamRoutes = require("./src/Routes/team.routes.js");

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
connect();

try {
  app.listen(process.env.PORT);
  console.log(`Listening at PORT ${process.env.PORT}`);
} catch (err) {
  console.log(`Couldnt Listen: ${err}`);
}

app.use("/team", teamRoutes);
