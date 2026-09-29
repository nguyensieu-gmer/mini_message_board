const express = require("express");
const DBController = require("../controllers/dbController");
const newRouter = express.Router();

newRouter.post("/", DBController.createUserText);

newRouter.get("/", (req, res) => {
  res.render("form");
});

module.exports = newRouter;
