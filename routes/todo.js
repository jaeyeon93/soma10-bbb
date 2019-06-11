var express = require('express');
var router = express.Router();

/* todo router */
router.get('/', function (req, res, next) {
    res.render('todo.html', {title : 'todo'});
});

router.get('/list', function (req, res, next) {
    res.render('todo_list.html', {title: 'todo list'});
});

router.get('/add', function (req, res, next) {
    res.render('todo_add.html');
});

router.post('/add', function (req, res, next) {
    console.log("requ body : ", req.body);
    let title = req.body.title;
    let contents = req.body.contents;
    let date = req.body.date;
    res.render('todo_list.html', {title: title, contents:contents, date:date});
});

module.exports = router;