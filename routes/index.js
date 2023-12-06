const router = require('express').Router();
const users = require('./users');
const hobbies = require('./hobbies');
const favorites = require('./favorites');


router.use('/users', users);
router.use('/hobbies', hobbies);
router.use('/favorites', favorites);

module.exports = router;