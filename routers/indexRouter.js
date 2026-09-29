const express = require("express");
const indexRouter = express.Router();
const newRouter = require("./newRouter");
const DBController = require("../controllers/dbController");

indexRouter.get("/", DBController.getAllMessages);

indexRouter.get("/details/:user", DBController.getUserDetails);

module.exports = indexRouter;
