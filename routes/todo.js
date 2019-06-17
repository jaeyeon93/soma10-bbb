let express = require('express');

let url = require('url');
let router = express.Router();

let todos = [{title:'default title', contents: 'default contents', date: '1993-01-01'}];

/* todo router */
router.get('/', (req, res, next) => { res.render('todo.html') });

router.get('/list', (req, res, next) => {
    res.render('todo_list.html', {todos});
});

router.get('/add', (req, res, next) => { res.render('todo_add.html') });

router.post('/add', (req, res, next) => {
    todos.push({title: req.body.title, contents: req.body.contents, date: req.body.date });
    res.redirect('/todo/list');
});

module.exports = router;