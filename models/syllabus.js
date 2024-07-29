'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Syllabus extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Syllabus.belongsTo(models.Course, {
        as: 'syllabusInCourse',
        foreignKey: 'course_id',
        constraints: true
      })
    }
  }
  Syllabus.init({
    course_id: DataTypes.INTEGER,
    title: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Syllabus',
    tableName: 'syllabuses',
    underscored: true
  });
  return Syllabus;
};