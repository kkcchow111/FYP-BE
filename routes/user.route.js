const { User } = require("../models/user.model");
const express = require("express");
const router = express.Router();

router.post("/user", async (req, res) => {
  const newUser = new User({ ...req.body });
  const insertedUser = await newUser.save();
  return res.send(insertedUser);
});

router.get("/user", async (req, res) => {
  const allUser = await User.find();
  return res.send(allUser);
});

module.exports = router;
