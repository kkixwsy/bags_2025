var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  req.session.counter = (req.session.counter || 0);

  res.render('index', { 
    title: 'Три сумки', 
    counter: req.session.counter 
  });
});

module.exports = router;