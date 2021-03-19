const express = require ('express')
const playerController = require("./player.controller")
const trackRouter = express.Router()
const track =
{
    "userId":"ttomas100@live.com",
    "track": "cachito",
    "previewUrl":"https://p.scdn.co/mp3-preview/a05a3a25fc7837fd9a86fe9af99aa7054594c55a?cid=5241c782aa824632850c999b3047a904" 
    
  }

trackRouter.route('/')
.get((req, res) => {
    res.json(track)});

trackRouter.post('/',(req, res)=>{
    playerController.createPlayer(req.body)
    .then(track =>{
        console.log('done')
        res.status(201).send('ok')
    })
    .catch(err => {
        console.log("no done!", err)
        res.status(500).send("there is an error to create the file")
    })
})

trackRouter.get('/', (req, res) => {
    return playerController.getTracks()
    .then(track => {
      res.json(track)
    })
})

trackRouter.get('/:userId', (req, res) => {
    return playerController.getByUser(userId)
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