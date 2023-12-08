const router = require('express').Router();
const favoritesController = require('../controllers/favorites');

router.get('/', favoritesController.getAll);
router.get('//:id', favoritesController.getSingle);
router.post('/', favoritesController.createFavorite);
router.put('/:id', favoritesController.updateFavorite);
router.delete('/:id', favoritesController.deleteFavorite);

module.exports = router;