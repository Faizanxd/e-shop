const express = require("express");
const app = express();
const db = require("./database/database");

app.use(express.urlencoded({ extended: false }));

app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

db.connectToDatabase().then(function () {
  app.listen(5173);
});
