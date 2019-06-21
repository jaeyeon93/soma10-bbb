// use env variable
require('dotenv').config();
const createError = require('http-errors');
const path = require('path');
// cookie-parser: 접속한 클라이언트의 쿠키 정보에 접근하기 위한 모듈
const cookieParser = require('cookie-parser');
// morgan : 클라이언트의 HTTP 요청 정보를 로깅하기 위한 모듈
const logger = require('morgan');
// 미리 구현한 라우팅 모듈을 가져온다.
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const todoRouter = require('./routes/todos');
const express = require('express');
const mongoose = require('mongoose');

const app = express();

// CONNECT TO MONGODB SERVER
const MONGO_URI = `${process.env.DB_SCHEMA}${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_URL}`;
mongoose.connect(MONGO_URI, {useNewUrlParser: true});
const db = mongoose.connection;
db.once('open', () => {
  // CONNECTED TO MONGODB SERVER
  console.log('Connected to mongod server');
});
db.on('error', console.error);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
/*
 이미지, CSS 파일 및 JavaScript 파일과 같은 정적 파일을 제공하려면,
  Express의 기본 제공 미들웨어 함수인 express.static을 사용
  */
app.use(express.static(path.join(__dirname, 'public')));


// URL에 따라 라우팅 모듈을 설정한다.
app.use('/', indexRouter);
app.use('/user', usersRouter);
app.use('/todos', todoRouter);

// catch 404 and forward to error handler
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
  res.render('error.html');
});

module.exports = app;
