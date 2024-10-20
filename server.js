require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const morgan = require("morgan");
const path = require("path")


const app = express();
// const Player = require("./models/player");
const playersCtrl = require('./controllers/players')

app.use(express.urlencoded({ extended: false }));
app.use(methodOverride("_method"));
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, "public")))

mongoose.connect(process.env.MONGODB_URI);
mongoose.connection.on("connected", () => {
    console.log(`Connected to MongoDB ${mongoose.connection.name}.`);
});

app.get("/", playersCtrl.home);

app.get("/players", playersCtrl.indexPlayer);

app.get("/players/new", playersCtrl.newPlayer);

app.post("/players", playersCtrl.createPlayer);

app.get("/players/:id", playersCtrl.showPlayer);

app.get("/players/:id/edit", playersCtrl.editPlayer);

app.put("/players/:id", playersCtrl.updatePlayer);

app.delete("/players/:id", playersCtrl.deletePlayer);

app.listen(3000, () => {
    console.log("Listening on port 3000");
});