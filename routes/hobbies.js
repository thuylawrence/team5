const router = require('express').Router();
const hobbiesController = require('../controllers/hobbies');
const { isAuthenticated } = require("../middleware/authenticate");

router.get('/', hobbiesController.getAll);
router.get('/:id', hobbiesController.getSingle);
router.post('/', isAuthenticated, hobbiesController.createHobby);
router.put('/:id', isAuthenticated, hobbiesController.updateHobby);
router.delete('/:id', isAuthenticated, hobbiesController.deleteHobby);

module.exports = router;