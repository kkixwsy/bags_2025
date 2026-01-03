var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
var session = require("express-session");
var MongoStore = require('connect-mongo').default;

mongoose.connect('mongodb://localhost/bags_2025');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var bagsRouter = require('./routes/bags');

var app = express();

// view engine
app.engine('ejs', require('ejs-locals'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// sessions
app.use(session({
  secret: "ThreeBags",
  cookie: { maxAge: 60 * 1000 },
  rolling: true,               // ⭐ ВОТ ОНО
  resave: false,
  saveUninitialized: false,
  store: MongoStore.create({
    mongoUrl: 'mongodb://localhost/bags_2025'
  })
}));

// counter
app.use(function(req, res, next){
  req.session.counter = req.session.counter + 1 || 1;
  next();
});

// middlewares
app.use(require("./middlewares/createMenu.js"));
app.use(require("./middlewares/createUser.js"));

// routes
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/bags', bagsRouter);

// errors
app.use(function(req, res, next) {
  next(createError(404));
});

app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.render('error', { title: 'Three Bags' });
});

module.exports = app;
