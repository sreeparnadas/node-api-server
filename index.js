require('dotenv').config()
const express = require('express')
const { sequelize } = require('./models/index.js');
const config = require('./config/config.js');
const apiRoutes = require('./routers/index.js')
const app = express()
const port = process.env.port

app.use(express.json())
app.use('/api',apiRoutes)
app.get('/', (req,res) => {
    res.send('Hello World..!!')
})

sequelize.sync({alter:true,force: config.forceSync}).then( () => {
    console.log('Yes Re-Synced Database & tables created!');
}).catch(err => {
    console.error('error connecting: '+ err); 
});

app.listen(port, async () => {
    console.log(`app listening on port ${port}`)
})