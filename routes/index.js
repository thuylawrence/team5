const router = require('express').Router();

router.use('/', require('./swagger'));

router.get('/', (req, res) => {
    res.send('Hello World')});

router.use('/users', require('./users'));
//router.use('/hobbies', require('./hobbies'));
//router.use('/favorites', require('./favorites'));

module.exports = router;