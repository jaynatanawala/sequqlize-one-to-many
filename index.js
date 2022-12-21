const express = require("express");
const sequelize = require("./utils/db");
require("dotenv").config();

const tutorialRoute = require("./routes/tutorial.route");
const commentRoute = require("./routes/comment.route");

const app = express();

app.use(express.json());

app.use("/tutorial", tutorialRoute);
app.use("/comment", commentRoute);

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err.message);
  });

app.listen(8000, () => console.log("app is listening on port 8000"));
