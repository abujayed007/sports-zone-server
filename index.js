const express = require('express')
const app = express()
const port = process.env.PORT || 5000;

const sports = require('./data/sports.json')

app.get('/sports', (req, res) =>{
    res.send(sports)
})

app.get('/', (req, res) =>{
    res.send('Node is running')
})

app.listen(port, () =>{
    console.log('running on' , port)
})