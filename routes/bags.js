var express = require('express');
var router = express.Router();
var Bags = require('../models/bag').Bags;

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Новый маршрутизатор, для маршрутов, начинающихся с bags');
});

/* Страница котов */
router.get("/:nick", async function(req, res, next) {
   var bags = await Bags.find({nick: req.params.nick});
   console.log(bags)
   if(!bags.length) return next(new Error("Нет такого котенка в мультфильме Три кота"))
       var bag = bags[0];
       res.render('bag', {
           title: bag.title,
           picture: bag.avatar,
           desc: bag.desc
       })
});


module.exports = router;
