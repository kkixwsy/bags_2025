var Bags = require("../models/bag").Bags;

module.exports = async function (req, res, next) {
  try {
    // глобальная переменная для шаблонов
    res.locals.nav = [];

    // получаем пункты меню
    var menu = await Bags.find({}, { _id: 0, title: 1, nick: 1 });

    console.log(menu);

    if (menu.length !== 0) {
      res.locals.nav = menu;
    }

    next();
  } catch (err) {
    console.error("createMenu error:", err);
    res.locals.nav = [];
    next(); // ОБЯЗАТЕЛЬНО
  }
};
