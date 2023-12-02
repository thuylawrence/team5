const router = require('express').Router();

router.get('/api-docs', require('./swagger'));

module.exports = router