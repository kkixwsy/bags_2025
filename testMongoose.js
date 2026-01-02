const mongoose = require('mongoose');

(async () => {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/bags_2025');
    console.log('Подключено к bags_2025');

    var Bags = require('./models/bag.js').Bags;

    var bags = new Bags({
      title: "Биркин",
      nick: "birkin"
    });

    const saved = await bags.save();
    console.log('Сумка сохранена! ID:', saved._id);

  } catch (err) {
    console.error('Ошибка:', err.message);
  } finally {
    await mongoose.disconnect();
    console.log('Подключение закрыто. Скрипт завершён');
  }
})();