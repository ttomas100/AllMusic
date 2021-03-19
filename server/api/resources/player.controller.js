const player = require("./player.model")

function createPlayer(track){
    return new player({
        ...track
    }).save()
}

function getTracks (){
    return player.find({})    
}

function playerGetById(id){    
    
    return player.findById(id)
}

function getByUser(userId){    
    
    return player.find({userId: userId})
}

function deleteTrack(id){
    return player.findByIdAndDelete(id)
}

module.exports = {
    createPlayer,
    getTracks,
    playerGetById,
    deleteTrack,
    getByUser
}