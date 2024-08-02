'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class QuestionDifficultyLevel extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      QuestionDifficultyLevel.hasMany(models.Question,{
        foreignKey: 'question_difficulty_level_id',
        constraints: true
      })
    }
  }
  QuestionDifficultyLevel.init({
    level_name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'QuestionDifficultyLevel',
    tableName: 'question_difficulty_levels',
    underscored: true
  });
  return QuestionDifficultyLevel;
};