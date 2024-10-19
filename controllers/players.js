const Player = require('../models/player')

const home = async (req, res) => {
    res.render('index.ejs')
}

// get all players request
const indexPlayer = async (req, res) => {
    res.render('players/index.ejs')
}

// get new player page request
const newPlayer = async (req, res) => {
    res.render('players/new.ejs')
}

// post request
const createPlayer = async (req, res) => {
}

// get one player request by id
const showPlayer = async (req, res) => {
    res.render('players/show.ejs')
}

// get edit page request
const editPlayer = async (req, res) => {
    res.render('players/edit.ejs')
}

// put edits request
const updatePlayer = async (req, res) => {
}

// delete player request
const deletePlayer = async (req, res) => {
}

module.exports = {
    home,
    indexPlayer,
    newPlayer,
    showPlayer,
    editPlayer,
    updatePlayer,
    deletePlayer,
    createPlayer
}
