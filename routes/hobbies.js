const router = require('express').Router();
const hobbiesController = require('../controllers/hobbies');

router.get('/', hobbiesController.getAll);
router.get('/:id', hobbiesController.getSingle);
router.post('/', hobbiesController.createHobby);
router.put('/:id', hobbiesController.updateHobby);
router.delete('/:id', hobbiesController.deleteHobby);

module.exports = router;