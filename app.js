const express = require("express");
const path = require("node:path");
const app = express();
const indexRouter = require("./routers/indexRouter");
const newRouter = require("./routers/newRouter");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

app.use("/", indexRouter);
app.use("/new", newRouter);

app.use((err, req, res, next) => {
  console.log("error have been catched", err);
});

const PORT = 4000;
app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
  }
  console.log("App express listening on port", PORT);
});
