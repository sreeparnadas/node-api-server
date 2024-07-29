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



sequelize.sync({
    force: config.forceSync || false, // Default to false if not specified
    alter: config.alterSync || false, // Default to false if not specified
    match: new RegExp(config.syncMatchPattern || '.*') // Default to match all models if not specified
  }).then(() => {
    console.log('Yes Re-Sync Database & tables created!');
  }).catch(err => {
    console.error('error connecting: '+err); 
  });

app.listen(port, async () => {
    console.log(`app listening on port ${port}`)
})