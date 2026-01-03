var express = require('express');
var router = express.Router();
var User = require('../models/user').User;

/* GET home page */
router.get('/', function(req, res) {
  res.render('index', {
    title: 'Express',
    counter: req.session.counter
  });
});

/* GET login/registration */
router.get('/logreg', function(req, res) {
  res.render('logreg', { title: 'Вход' });
});

/* POST login/registration */
router.post('/logreg', async function(req, res) {
  const { username, password } = req.body;

  const user = await User.findOne({ username });

  // регистрация
  if (!user) {
    const newUser = new User({ username, password });
    await newUser.save();
    req.session.user_id = newUser._id;
    return res.redirect('/');
  }

  // вход
  if (user.checkPassword(password)) {
    req.session.user_id = user._id;
    return res.redirect('/');
  }

  // неправильный пароль
  res.render('logreg', { title: 'Вход' });
});

module.exports = router;
