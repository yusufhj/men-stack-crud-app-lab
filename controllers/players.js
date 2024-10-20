const Player = require('../models/player')

const home = async (req, res) => {
    res.render('index.ejs')
}

// get all players request
const indexPlayer = async (req, res) => {
    const allPlayers = await Player.find()
    res.render('players/index.ejs', { players: allPlayers })
}

// get new player page request
const newPlayer = async (req, res) => {
    res.render('players/new.ejs')
}

// post request
const createPlayer = async (req, res) => {
    const newPlayer = req.body
    if (newPlayer.isCurrentlyPlaying === 'on') {
        newPlayer.isCurrentlyPlaying = true
    } else {
        newPlayer.isCurrentlyPlaying = false
    }
    await Player.create(newPlayer)
    res.redirect('/players')
}

// get one player request by id
const showPlayer = async (req, res) => {
    res.render('players/show.ejs', { player: await Player.findById(req.params.id) })
}

// get edit page request
const editPlayer = async (req, res) => {
    res.render('players/edit.ejs', { player: await Player.findById(req.params.id) })
}

// put edits request
const updatePlayer = async (req, res) => {
    const player = req.body
    if (player.isCurrentlyPlaying === 'on') {
        player.isCurrentlyPlaying = true
    } else {
        player.isCurrentlyPlaying = false
    }
    await Player.findByIdAndUpdate(req.params.id, player, { new: true })
    res.redirect(`/players/${req.params.id}`)
}

// delete player request
const deletePlayer = async (req, res) => {
    await Player.findByIdAndDelete(req.params.id)
    res.redirect('/players')
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
