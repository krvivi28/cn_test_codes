import express from "express";
import path from "path";
const app = express();
app.set("view engine", "ejs");
app.set("views", path.resolve("views"));
app.get("/", (req, res) => {
  res.render("index");
});
app.get("/about", (req, res) => {
  res.render("about");
});

export default app;
