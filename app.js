const createError = require('http-errors');
const path = require('path');
//cookie-parser: 접속한 클라이언트의 쿠키 정보에 접근하기 위한 모듈
const cookieParser = require('cookie-parser');
//morgan : 클라이언트의 HTTP 요청 정보를 로깅하기 위한 모듈
const logger = require('morgan');
//body-parser: 클라이언트의 HTTP 요청 중 POST 요청의 바디 데이터에 접근하기 위한 모듈
const bodyParser = require('body-parser');
// 미리 구현한 라우팅 모듈을 가져온다.
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const express = require('express');
const mongoose = require('mongoose');

const app = express();

// CONNECT TO MONGODB SERVER
mongoose.connect('mongodb://soma:1234@52.78.201.246:27017/todo', {useNewUrlParser: true});
const db = mongoose.connection;
db.once('open', function () {
    // CONNECTED TO MONGODB SERVER
    console.log("Connected to mongod server");
});
db.on('error', console.error);

// // [CONFIGURE APP TO USE bodyParser]
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
//이미지, CSS 파일 및 JavaScript 파일과 같은 정적 파일을 제공하려면 Express의 기본 제공 미들웨어 함수인 express.static을 사용
app.use(express.static(path.join(__dirname, 'public')));


// URL에 따라 라우팅 모듈을 설정한다.
app.use('/', indexRouter);
app.use('/user', usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error.html');
});

module.exports = app;
