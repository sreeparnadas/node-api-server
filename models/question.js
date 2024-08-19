'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Question extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Question.belongsTo(models.QuestionType, {
        foreignKey: 'question_type_id',
        constraints: true
      }),
      Question.belongsTo(models.QuestionDifficultyLevel, {
        foreignKey: 'question_difficulty_level_id',
        constraints: true
      }),
      Question.belongsTo(models.Syllabus, {
        foreignKey: 'syllabus_id',
        constraints: true
      })
    }
  }
  Question.init({
    question_type_id: DataTypes.INTEGER,
    question_difficulty_level_id: DataTypes.INTEGER,
    syllabus_id: DataTypes.INTEGER,
    question: DataTypes.STRING,
    score: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Question',
    tableName: 'questions',
    underscored: true,
    timestamps: true
  });
  return Question;
};