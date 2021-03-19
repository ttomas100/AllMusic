const mongoose = require('mongoose')

const playerSchema = new mongoose.Schema(
{
    id: {
        type: String,
    },
    userId: {
        type: String,
    },
    track: {
        type: String,  
    },
    previewUrl: {
        type: String,
    },
})

module.exports = mongoose.model('player', playerSchema)