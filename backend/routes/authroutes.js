const express = require("express");
const router = express.Router();
const db = require("../database/database");
const bcrypt = require("bcryptjs");

router.post("/signup", async (req, res) => {
  const userData = req.body;
  const enteredEmail = userData.email;
  const enteredPassword = userData.password;

  if (
    !enteredEmail ||
    !enteredPassword ||
    enteredPassword.trim().length < 6 ||
    !enteredEmail.includes("@")
  ) {
    req.session.inputData = {
      hasError: true,
      message: "Invalid input - please check your data.",
      email: enteredEmail,
      password: enteredPassword,
    };

    req.session.save(function () {
      res.status(401).json({ message: "Invalid input" });
    });
    return;
  }

  const existingUser = await db
    .getDb()
    .collection("users")
    .findOne({ email: enteredEmail });

  if (existingUser) {
    req.session.inputData = {
      hasError: true,
      message: "User exists already!",
      email: enteredEmail,
      password: enteredPassword,
    };
    req.session.save(() => {
      res.status(402).json({ message: "User exists already!" });
    });
    return;
  }

  const hashedPassword = await bcrypt.hash(enteredPassword, 12);

  const user = {
    email: enteredEmail,
    password: hashedPassword,
  };

  await db.getDb().collection("users").insertOne(user);
});

router.get("/signup", (req, res) => {
  if ((req.session.isAuthenticated = true)) {
    res.status(200).json({ message: "Success" });
  }
});

router.post("/login", async (req, res) => {
  const userData = req.body;
  const enteredEmail = userData.email;
  const enteredPassword = userData.password;

  const existingUser = await db
    .getDb()
    .collection("users")
    .findOne({ email: enteredEmail });

  try {
    if (!existingUser) {
      req.session.inputData = {
        hasError: true,
        message: "Could not login - please check your credientials",
        email: enteredEmail,
        password: enteredPassword,
      };

      req.session.save(() => {
        res.status(401).json({ message: "Invalid input" });
      });
      return;
    }
  } catch (err) {
    console.log(err);
  }

  const passwordsAreEqual = await bcrypt.compare(
    enteredPassword,
    existingUser.password
  );

  if (!passwordsAreEqual) {
    req.session.inputData = {
      hasError: true,
      message: "Could not login - please check your credientials",
      email: enteredEmail,

      password: enteredPassword,
    };
    req.session.save(() => {
      res.status(401).json({ message: "Invalid input" });
    });
    return;
  }

  req.session.user = {
    id: existingUser._id,
    email: existingUser.email,
  };
  req.session.isAuthenticated = true;
  req.session.save(function () {
    res.status(200).json({ message: "Success" });
  });
});

router.get("/auth", (req, res) => {
  const isAuth = req.session.isAuthenticated;
  if (isAuth === true) {
    res.status(200).json({ message: "Success", user: req.session.user });
  } else {
    res.status(401).json({ message: "Not authenticated" });
  }
});

module.exports = router;
