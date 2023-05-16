const express = require("express");
const path = require("path");
const server = express();
const staticPath = path.join(__dirname, "public");

const renderStatic = () => {
  server.use(express.static(staticPath));
};

server.get("/", (req, res) => {
  res.send("get method called!");
});

renderStatic();

server.listen(5000, () => {
  console.log("server is listening at 5000");
});

