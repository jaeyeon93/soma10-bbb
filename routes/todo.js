var express = require('express');

var url = require('url');
var router = express.Router();

let todos = [{title:'default title', contents: 'default contents', date: '1993-01-01'}];
/* todo router */
router.get('/', (req, res, next) => { res.render('todo.html') });

// router.get('/list', (req, res, next) => {
//     console.log('GET /todo/list using arrow function');
//     res.render('todo_list.html', {title: req.query.title, contents: req.query.contents, date: req.query.date});
// });
router.get('/list', (req, res, next) => {
    res.render('todo_list.html', {todos : todos});
});

router.get('/add', (req, res, next) => { res.render('todo_add.html') });

router.post('/add', (req, res, next) => {
    let todo = {
        title: req.body.title,
        contents: req.body.contents,
        date: req.body.date
    };
    todos.push(todo);
    res.redirect('/todo/list');
});

// router.post('/add', (req, res, next) => {
//     res.redirect(url.format({
//         pathname: '/todo/list',
//         query: {
//             title: req.body.title,
//             contents: req.body.contents,
//             date: req.body.date
//         }
//     }));
// });

module.exports = router;