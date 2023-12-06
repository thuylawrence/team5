const router = require('express').Router();
const users = require('./users');
const hobbies = require('./hobbies');
const favorites = require('./favorites');
const skillset = require("./skillset")

router.use(
    // #swagger.tags = ['Users']
    '/users',
    users
);
router.use(
    // #swagger.tags = ['Hobbies']
    '/hobbies',
    hobbies
);
router.use(
    // #swagger.tags = ['Favorites']
    '/favorites',
    favorites
);
router.use(
    // #swagger.tags = ['Skills']
    '/skillset',
    skillset
)

module.exports = router;