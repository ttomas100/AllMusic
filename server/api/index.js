const express = require ('express')
const bodyParser = require ('body-parser')
const mongoose = require("mongoose")
const trackRouter = require('./resources/player.routes')

const app = express()
app.use(bodyParser.json())
app.use('/track', trackRouter)

mongoose.connect('mongodb://127.0.0.1:27017/musicTrack')
mongoose.connection.on('error', () =>{
    console.log('Mongo connection fail')
    process.exit(1)
})
mongoose.set("useFindAndModify", false)

app.get('/', (req, res)=> { 
    res.send('API')
})

app.listen(3001,() =>{
    console.log('done')
})

