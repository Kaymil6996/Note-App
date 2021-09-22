const express = require('express')
const app = express()
const config = require('./config')
const bodyParser = require('body-parser')
const cors =require('cors')


const apiRouter = require('./api');
require('./db/mongoose')

app.use(bodyParser.json())

app.use(cors());

app.use('/api', apiRouter)


app.listen(config.port, () => {
    console.log('serwer słucha....http://localhost:3002')
});