require('dotenv').config()
const express = require('express')
const { sequelize } = require('./models/index.js');
const config = require('./config/config.js');
const app = express()
const port = process.env.port

app.use(express.json())

app.get('/', (req,res) => {
    res.send('Hello World..!!')
})


app.listen(port, async () => {
    console.log(`app listening on port ${port}`)
})