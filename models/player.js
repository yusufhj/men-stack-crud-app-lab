const mongoose = require('mongoose')

const playerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  rating: { type: Number, required: true },
  nationality: {type: String, required: true},
  team: { type: String, required: true},
  isCurrentlyPlaying: {type: Boolean, required: true},
  image: String,
})

const Player = mongoose.model('Player', playerSchema)
module.exports = Player

