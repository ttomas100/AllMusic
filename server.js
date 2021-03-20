const express = require ('express')
const bodyParser = require ('body-parser')
const mongoose = require("mongoose")
const trackRouter = require('./resources/player.routes')


const app = express()
app.use(bodyParser.json())
app.use('/track', trackRouter)
const PORT = process.env.PORT || 3001;

if (process.env.NODE_ENV === "production") {
    app.use(express.static('./client/build'));
  }

mongoose.connect(process.env.MONGODB_URI|| 'mongodb://127.0.0.1:27017/musicTrack')
mongoose.connection.on('error', () =>{
    console.log('Mongo connection fail')
    process.exit(1)
})
mongoose.set("useFindAndModify", false)

app.get('/', (req, res)=> { 
    res.send('API')
})

app.listen(PORT,() =>{
    console.log('done')
})

