const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/testMongoose2024');


const sneaker = mongoose.model('Bags', { name: String });


const airForce = new sneaker({ name: 'birkin' });
airForce.save().then(() => console.log('Сумка успешно сохранена!)'));