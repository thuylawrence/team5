const router = require('express').Router();
const users = require('./users');
const hobbies = require('./hobbies');
const favorites = require('./favorites');
const skillset = require("./skillset");
const passport = require('passport');

router.get('/login', passport.authenticate('github'), (req, res)=>{});

router.get('/logout', function(req,res,next){
    req.logout(function(err) {
        if (err) {return next(err);}
        res.redirect('/');
    });
});

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