const express = require("express");
const mongoose = require("mongoose");
const app = express();
const bodyParser = require("body-parser");
const SellerRoute = require("./routes/seller.route");
require("dotenv").config({ path: "./.env" });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", SellerRoute);

mongoose.connect(process.env.MONGODB_URI);

app.listen(process.env.PORT);
