const {host, port} = require('./config')
const express = require('express')
const bodyParser = require('body-parser')

//setup

const app = express();
app.use(bodyParser.json())

//app.use(express.static('public'))


//publish HTML5 app
app.get('/', (req, res) => {
    res.send("Hi")
})

app.get('/about', (req, res) => {
    res.send('This is an express application')
})

//server startup
app.listen(port, () => {
    console.log(`Server started at ${host}: ${port}`)
})



