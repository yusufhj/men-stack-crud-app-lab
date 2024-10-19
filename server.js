require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const morgan = require("morgan");
const path = require("path")


const app = express();
const Plant = require("./models/plant");
const plantsCtrl = require('./controllers/plants')

app.use(express.urlencoded({ extended: false }));
app.use(methodOverride("_method"));
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, "public")))

mongoose.connect(process.env.MONGODB_URI);
mongoose.connection.on("connected", () => {
    console.log(`Connected to MongoDB ${mongoose.connection.name}.`);
});

app.get("/", (req, res) => {
    res.send("Hello, plants!");
});

app.listen(3000, () => {
    console.log("Listening on port 3000");
});