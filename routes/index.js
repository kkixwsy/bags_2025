var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
/* Страница Birkin*/
router.get('/birkin', function(req, res, next) {
    res.render('bag', {
        title: "Биркин",
        picture: "images/birkin.jpg",
        desc: "Сумка Биркин от Hermes — символ роскоши и эксклюзивности. Она известна своим минималистичным дизайном и высокой ценой. Каждая сумка создается вручную, с использованием качественных материалов."
    });
});
/* Страница Longchamp*/
router.get('/longchamp', function(req, res, next) {
    res.render('bag', {
        title: "Лонгчемп",
        picture: "images/longchamp.jpg",
        desc: "Сумка Лонгчемп, особенно модель Le Pliage, известна своей легкостью и компактностью. Она удобна для повседневного использования и представлена в различных цветах и размерах, сохраняя стиль и функциональность."
    });
});
/* Страница Chanel*/
router.get('/chanel', function(req, res, next) {
    res.render('bag', {
        title: "Шанель",
        picture: "images/chanel.jpg",
        desc: "Сумка Шанель — это элегантность и стиль. Модели с цепочкой и классическим лого стали культовыми. Эти сумки часто ассоциируются с французским шиком и высокой модой."
    });
});

module.exports = router;
