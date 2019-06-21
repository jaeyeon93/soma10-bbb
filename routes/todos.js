const express = require('express');
const router = express.Router();
const TodosModel = require('../models/Todo');

router.get('/', (req, res, next) => {
  Todo.find({}, (err, todos) => {
    console.log(todos);
    if (err) return res.status(500).send('Todos 조회 실패');
    res.render('todos_list.html', {todos});
  });
});

router.get('/add', (req, res, next) => {
  res.render('todos_add.html');
});

// router.post('/add', (req, res, next) => {
//     Todo.create({
//         title: req.body.title,
//         contents: req.body.contents,
//         date: req.body.date
//     }, (err, todo) => {
//         if (err) return res.status(500).send('Todo 생성 실패');
//         res.redirect('/todos/')
//     });
// });

router.post('/add', (req, res, next) => {
  const todo = new TodosModel({
    title: req.body.title,
    contents: req.body.contents,
    date: req.body.date,
  });
  todo.save((err) => {
    res.redirect('/todos/');
  });
});

module.exports = router;

// let express = require('express');
//
// let url = require('url');
// let router = express.Router();
// let todos = [{title:'default title', contents: 'default contents', date: '1993-01-01'}];
//
// /* todo router */
// router.get('/', (req, res, next) => { res.render('todos.html') });
//
// router.get('/list', (req, res, next) => {
//     console.log('todos/list호출');
//     console.log('todos : ', todos);
//     res.render('todos_list.html', {todos});
// });
//
// router.get('/add', (req, res, next) => { res.render('todos_add.html') });
//
// router.post('/add', (req, res, next) => {
//     todos.push({title: req.body.title, contents: req.body.contents, date: req.body.date });
//     res.redirect('/todos/list');
// });
//
// module.exports = router;
