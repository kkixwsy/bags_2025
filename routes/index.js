var express = require('express');
var router = express.Router();



/* Страница Birkin*/
router.get('/birkin', function(req, res, next) {
    res.send("<h1>Страница сумки Биркин</h1>")
});

/* Страница Longchamp */
router.get('/Longchamp', function(req, res, next) {
    res.send("<h1>Страница сумки Лонгчемп</h1>")
});

/* Страница Chanel */
router.get('/chanel', function(req, res, next) {
    res.send("<h1>Страница сумки Шанель</h1>")
});

module.exports = router;
