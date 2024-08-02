const questionTypeController = require('../controllers/questionTypeController')
const questionDifficultyLevelController = require('../controllers/questionDifficultyLevelController')

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

module.exports = router