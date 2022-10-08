const mongoose = require("mongoose");

const SellerSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },

  name: {
    type: String,
    required: true,
  },

  password: {
    type: String,
    required: true,
  },

  contactnumber: {
    type: String,
    required: true,
  },

  currentlocation: {
    type: String,
  },
});

const Seller = mongoose.model("Seller", SellerSchema);

module.exports = { Seller };
