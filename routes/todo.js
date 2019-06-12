var express = require('express');

var url = require('url');
var router = express.Router();

/* todo router */
router.get('/', (req, res, next) => { res.render('todo.html') });

router.get('/list', (req, res, next) => {
    console.log('GET /todo/list using arrow function');
    res.render('todo_list.html', {title: req.query.title, contents: req.query.contents, date: req.query.date});
});

router.get('/add', (req, res, next) => { res.render('todo_add.html') });

router.post('/add', (req, res, next) => {
    res.redirect(url.format({
        pathname: '/todo/list',
        query: {
            title: req.body.title,
            contents: req.body.contents,
            date: req.body.date
        }
    }));
});

module.exports = router;