const questionType = require('../controllers/questionTypeController')

const router = require('express').Router();

// questionTypes
router.get('/questionTypes', questionType.getAll);
router.post('/questionTypes', questionType.create);


router.get('/questionTypes/:id', questionType.getById);
router.put('/questionTypes/:id', questionType.update);
router.delete('/questionTypes/:id', questionType.delete);

module.exports = router