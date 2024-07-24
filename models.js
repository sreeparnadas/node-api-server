const {sequelize} = require('./db-config')
const {DataTypes} = require('sequelize')

const QuestionType = sequelize.define('question_type', {
    type_name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            max: 100
        }
    },
    short_form: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
            max: 10
        }
    }
})

sequelize.sync({alter:true})

module.exports = QuestionType