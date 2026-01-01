const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/testMongoose2024');

const handbagSchema = new mongoose.Schema({ 
  name: String 
});

handbagSchema.methods.show = function () {
  console.log(`${this.name} — в магазине прямо сейчас!`);
};

const handbag = mongoose.model('Bags', handbagSchema);

const birkin = new handbag({ name: 'Биркин' });

birkin.save().then(() => {
  console.log('Сумка успешно сохранена!');
  birkin.show();  // ← вот здесь сработает наш метод
});