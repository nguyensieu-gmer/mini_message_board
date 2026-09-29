const pool = require("./pool");

async function getAllMessages() {
  const { rows } = await pool.query("SELECT * FROM usermessages;");
  return rows;
}

async function getUserDetails(user) {
  const { rows } = await pool.query(
    "SELECT * FROM usermessages WHERE username = $1",
    [user],
  );
  return rows;
}

async function addNewMessage(text, username, added) {
  await pool.query(
    "INSERT INTO usermessages(text, username, added) VALUES($1, $2, $3)",
    [text, username, added],
  );
}

module.exports = {
  getAllMessages,
  getUserDetails,
  addNewMessage,
};
