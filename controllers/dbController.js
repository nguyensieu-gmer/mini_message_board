const db = require("../db/queries");

async function getAllMessages(req, res) {
  const messages = await db.getAllMessages();
  res.render("index", { title: "Mini Messageboard", messages: messages });
}

async function getUserDetails(req, res) {
  const [curUser] = await db.getUserDetails(req.params.user);
  res.render("detail", { curUser });
}

async function createUserText(req, res) {
  if (req.body) {
    const date = new Date().toISOString().split("T")[0];
    await db.addNewMessage(req.body.messageText, req.body.authorName, date);
    console.log("Add messages successful!");
    res.redirect("/");
  }
}

module.exports = {
  getAllMessages,
  getUserDetails,
  createUserText,
};
