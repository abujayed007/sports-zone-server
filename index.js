const express = require('express')
const app = express()
const cors = require ('cors')
const port = process.env.PORT || 5000;

app.use(cors())

const sports = require('./data/sports.json')



app.get ('/', (req, res) =>{
    res.send('Node is running')
})

app.get('/sports', (req, res) =>{
    res.send(sports)
})
app.get('/sports/:name', (req, res) =>{
    const name = req.params.name;
    const selectSports = sports.find(sport => sport.name === name)
    res.send(selectSports)
})

app.listen(port, () =>{
    console.log('running on' , port)
})