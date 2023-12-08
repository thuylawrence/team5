const router = require('express').Router();
const skillsetController = require('../controllers/skillset');

router.get('/', skillsetController.getAll);
router.get('//:id', skillsetController.getSingle);
router.post('/', skillsetController.createSkillset);
router.put('/:id', skillsetController.updateSkillset);
router.delete('/:id', skillsetController.deleteSkillset);

module.exports = router;