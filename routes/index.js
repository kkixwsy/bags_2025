var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
 req.session.greeting = "Hi!!!";
 res.render('index', { title: 'Express' });
});
router.get('/test-session', (req, res) => {
  req.session.greeting = 'Привет от сессии!';  // ← это заставит сохранить сессию
  req.session.views = (req.session.views || 0) + 1;

  res.send(`
    <h1>Тест сессии</h1>
    <p>Приветствие: ${req.session.greeting}</p>
    <p>Посещений этой страницы: ${req.session.views}</p>
    <p><a href="/">На главную</a></p>
  `);
});

module.exports = router;
