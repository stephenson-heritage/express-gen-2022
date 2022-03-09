var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/:colour', function(req, res, next) {
    res.render('index', { title: 'Web4R', colour: req.params.colour });
});

module.exports = router;