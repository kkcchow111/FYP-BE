const { Seller } = require("../models/seller.model");
const express = require("express");
const router = express.Router();

router.post("/seller", async (req, res) => {
  const newSeller = new Seller({ ...req.body });
  const insertedSeller = await newSeller.save();
  res.send(insertedSeller);
});

router.get("/Seller", async (req, res) => {
  const allSeller = await Seller.find();
  res.send(allSeller);
});

module.exports = router;
