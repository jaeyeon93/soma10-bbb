//env
require('dotenv').config();

let createError = require('http-errors');
let express = require('express');
const mongoose = require('mongoose');
let path = require('path');
let cookieParser = require('cookie-parser');
let logger = require('morgan');

let app = express();
let indexRouter = require('./routes/index');
let usersRouter = require('./routes/users');
let todoRouter = require('./routes/todos');

// view engine setup, app.set은 변수명을 넣어주는것이다.
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/js', express.static(path.join(__dirname, 'node_modules', 'bootstrap', 'dist', 'js')));
app.use('/css', express.static(path.join(__dirname, 'node_modules', 'bootstrap', 'dist', 'css')));

// mongoose
mongoose.Promise = global.Promise;

// connect to mongodb server
// mongoose.connect(process.env.MONGO_URI)
//     .then(() => console.log('Successfully connected to mongodb'))
//     .catch(e => console.error(e));
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true })
  .then(() => console.log('Successfully connected to mongodb'))
  .catch(e => console.error(e));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/todos', todoRouter);
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
