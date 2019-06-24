const express = require('express');
const router = express.Router();
const TodosModel = require('../models/Todo');
const boardModel = require('../models/board');
// const moment = require('moment');

router.get('/:username', (req, res) => {
    // TODO :: 재연형님 username 으로 테이블 다르게 보여주는거 해주시면 감사하곘습니다 .
    const username = req.params.username;

    // console.log(username);


    boardModel.find().where('username').equals(username)
        .then((board) => {
            res.render('todos_list.html', {board, username});
        })
        .catch(() => res.status(500).send('boards 조회 실패'));
});

router.get('/add/:username', (req, res) => {
    const username = req.params.username;

    res.render('form.html', {title: username});
});

router.get('/update/:id', (req, res) => {
    const id = req.params.id;

    boardModel.findOne({boardId: id}, function (err, data) {
        // eslint-disable-next-line no-empty
        if (err) {

        } else {
            res.render('updateform.html', {
                title: data.username,
                data: data,
                id: id,
            });
        }
    });
});

router.post('/add', (req, res) => {
    const todo = new TodosModel({
        title: req.body.title,
        contents: req.body.contents,
        date: req.body.date,
    });
    todo.save(() => {
        res.redirect('/todos/');
    });
});


router.delete('/', (req, res) => {
    const id = req.body.id;

    boardModel.deleteOne({_id: id}, function (err) {
        if (err) return res.status(500).send('board 삭제 실패');
        res.send({result: true});
    });
});

router.put('/', (req, res) => {
    res.send({result: true});
});


module.exports = router;
