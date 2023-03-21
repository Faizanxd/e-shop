const express = require("express");
const router = express.Router();
const dbx = require("../database/database");

router.post("/signup", async (req, res) => {
  const { email, password } = req.body;
  const db = await dbx.getDb();
  const existingUser = await db.collection("users").findOne({ email });
  if (existingUser) {
    return res.status(400).json({ message: "User already exists" });
  } else {
    const user = await db.collection("users").insertOne({ email, password });
    return res.status(200).json({ message: "User created" });
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const db = await dbx.getDb();
  const existingUser = await db.collection("users").findOne({ email });
  if (existingUser) {
    if (existingUser.password === password) {
      return res.status(200).json({ message: "User logged in" });
    } else {
      return res.status(400).json({ message: "Wrong password" });
    }
  } else {
    return res.status(400).json({ message: "User does not exist" });
  }
});

module.exports = router;
