const mongoose = require("mongoose");

const SellerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});

const Seller = mongoose.model("Seller", SellerSchema);

module.exports = { Seller };
