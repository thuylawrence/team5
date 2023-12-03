const express = require('express');
const router = express.Router();
//const validate = require('../middleware/validate');
const favoritesController = require('../controllers/users');

router.get('/', favoritesController.getAll);
router.get('/:id', favoritesController.getSingle);
router.post('/', favoritesController.createFavorite);
router.put('/:id', favoritesController.updateFavorite);
router.delete('/:id', favoritesController.deleteFavorite);

module.exports = router;