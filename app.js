const express = require("express");
const mongoose = require("mongoose");
const app = express();
const bodyParser = require("body-parser");
const UserRoute = require("./routes/user.route");
require("dotenv").config({ path: "./.env" });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", UserRoute);

mongoose.connect(process.env.MONGODB_URI);

app.listen(process.env.PORT);
