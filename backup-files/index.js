require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.port
const apiRoutes = require('./router')
const {sequelize, connectToDb} = require('./db-config')


app.use(express.json())
app.use('/api',apiRoutes)

app.get('/', (req,res) => {
    res.send('Hello World..!!')
})

app.get('/json', (req,res) => {
    res.json({
        "key": "Hey I am done :-)"
    })
})

app.listen(port, async () => {
    console.log(`app listening on port ${port}`)
    await connectToDb();
})