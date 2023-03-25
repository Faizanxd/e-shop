const express = require("express");
const router = express.Router();
const db = require("../database/database");

router.get("/users", async (req, res) => {
  res.status(200).json({ message: "Success" });
});

module.exports = router;
