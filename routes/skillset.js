const router = require('express').Router();
const skillsetController = require('../controllers/skillset');
const { isAuthenticated } = require("../middleware/authenticate");

router.get('/', skillsetController.getAll);
router.get('/:id', skillsetController.getSingle);
router.post('/', isAuthenticated, skillsetController.createSkillset);
router.put('/:id', isAuthenticated, skillsetController.updateSkillset);
router.delete('/:id', isAuthenticated, skillsetController.deleteSkillset);

module.exports = router;