const express = require("express");
const indexRouter = express.Router();
const newRouter = require("./newRouter");

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

newRouter.post("/", (req, res) => {
  if (req.body) {
    messages.push({
      text: req.body.messageText,
      user: req.body.authorName,
      added: new Date(),
    });
    console.log("add messages successfully");
    res.redirect("/");
  }
});

indexRouter.get("/", (req, res) => {
  res.render("index", { title: "Mini Messageboard", messages: messages });
});

indexRouter.get("/details/:user", (req, res) => {
  const curUser = messages.find((message) => message.user === req.params.user);
  res.render("detail", { curUser });
});

module.exports = indexRouter;
