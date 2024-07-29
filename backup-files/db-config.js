const {Sequelize} = require('sequelize')

const sequelize = new Sequelize('education_online_db','root','sreeparnadas',
    {
        dialect: 'mysql',
        host: 'localhost',
        timezone: '+05:30'
    }
)

const connectToDb = async () => {
    try{
        await sequelize.authenticate();
        console.log("Connection has been established successfully.")
    }
    catch(error){
        console.error('Unable to connect to the database:', error);
    }
}

module.exports = {sequelize, connectToDb}