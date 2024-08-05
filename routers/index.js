const questionTypeController = require('../controllers/questionTypeController')
const questionDifficultyLevelController = require('../controllers/questionDifficultyLevelController')
const courseController = require('../controllers/courseController')
const syllabusController = require('../controllers/syllabusController')

const router = require('express').Router();

// questionTypes
router.get('/questionTypes', questionTypeController.getAll);
router.post('/questionTypes', questionTypeController.create);


router.get('/questionTypes/:id', questionTypeController.getById);
router.put('/questionTypes/:id', questionTypeController.update);
router.delete('/questionTypes/:id', questionTypeController.delete);


// questionDifficultyLevels
router.get('/questionDifficultyLevels', questionDifficultyLevelController.getAll);
router.post('/questionDifficultyLevels', questionDifficultyLevelController.create);


router.get('/questionDifficultyLevels/:id', questionDifficultyLevelController.getById);
router.put('/questionDifficultyLevels/:id', questionDifficultyLevelController.update);
router.delete('/questionDifficultyLevels/:id', questionDifficultyLevelController.delete);


// courses
router.get('/courses', courseController.getAll);
router.post('/courses', courseController.create);


router.get('/courses/:id', courseController.getById);
router.put('/courses/:id', courseController.update);
router.delete('/courses/:id', courseController.delete);


// syllabuses
router.get('/syllabuses', syllabusController.getAll);
router.post('/syllabuses', syllabusController.create);


router.get('/syllabuses/:id', syllabusController.getById);
router.put('/syllabuses/:id', syllabusController.update);
router.delete('/syllabuses/:id', syllabusController.delete);

module.exports = router