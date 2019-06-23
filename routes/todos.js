const express = require('express');
const router = express.Router();
const TodosModel = require('../models/Todo');
const moment = require('moment');

router.get('/:username', (req, res, next) => {

  //TODO :: 재연형님 username 으로 테이블 다르게 보여주는거 해주시면 감사하곘습니다 .
  const username = req.params.username;

  TodosModel.find({}, (err, todos) => {
    console.log(todos[15].created_at);
    console.log(todos[15].updated_at);
    if (err) return res.status(500).send('Todos 조회 실패');
    res.render('todos_list.html', {todos, moment});
  });
});

router.get('/add', (req, res, next) => {
    res.render('form.html', {title: 'username'});   // yhpark 수정함 (todos_add -> form 연결)
});

router.post('/add', (req, res, next) => {
    let todo = new TodosModel({
        title: req.body.title,
        contents: req.body.contents,
        date: req.body.date,
    });
    todo.save((err) => {
        res.redirect('/todos/');
    });
});

module.exports = router;