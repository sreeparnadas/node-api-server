'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Course extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Course.hasMany(models.Syllabus,{
        as: 'syllabus',
        foreignKey: 'course_id',
        constraints: true,
      })
    }
  }
  Course.init({
    course_name: DataTypes.STRING,
    description: DataTypes.STRING,
    is_active: DataTypes.TINYINT
  }, {
    sequelize,
    modelName: 'Course',
    tableName: 'courses',
    underscored: true,
    timestamps: true
  });
  return Course;
};