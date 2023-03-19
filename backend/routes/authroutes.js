const express = require("express");
const router = express.Router();

router.post("/signup", async (req, res) => {
  const body = req.body;
  res.json({ message: "Signup successful" });
  console.log(body);
});

module.exports = router;
