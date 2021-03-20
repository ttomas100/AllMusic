const express = require ('express')
const playerController = require("./player.controller")
const trackRouter = express.Router()


trackRouter.post('/',(req, res)=>{
    playerController.createPlayer(req.body)
    .then(track =>{

        res.status(201).send('ok')
    })
    .catch(err => {
        console.log("no done!", err)
        res.status(500).send("there is an error to create the file")
    })
})


trackRouter.get('/:userId', (req, res) => {
    return playerController.getByUser(req.params.userId)
    .then(track => {
      res.json(track)
    })
})

trackRouter.delete('/:id', async (req, res) =>{
    const trackId = req.params.id

    try{
        const trackDelete = await playerController.playerGetById(trackId)

        if (trackDelete){
    
            const deleteTrack = await playerController.deleteTrack(trackId)
           
            res.status(200).json(deleteTrack)
        }
        else {
            res.status(500).send('no object')
        }
    }
    catch (err) {
        res.status(500).send('system error' + err)
    }

})

module.exports = trackRouter