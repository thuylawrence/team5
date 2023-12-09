const router = require('express').Router();
const favoritesController = require('../controllers/favorites');
const { isAuthenticated } = require("../middleware/authenticate");

router.get('/',  favoritesController.getAll);
router.get('/:id', favoritesController.getSingle);
router.post('/', isAuthenticated, favoritesController.createFavorite);
router.put('/:id', isAuthenticated, favoritesController.updateFavorite);
router.delete('/:id', isAuthenticated, favoritesController.deleteFavorite);

module.exports = router;