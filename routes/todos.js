const express = require('express');
const router = express.Router();
const boardModel = require('../models/board');

router.get('/:username', (req, res) => {
  const username = req.params.username;

  boardModel.find().where('username').equals(username)
    .then((board) => {
      res.render('todos_list.html', {board, username});
    })
    .catch(() => res.status(500).send('boards 조회 실패'));
});

router.get('/add/:username', (req, res) => {
  const username = req.params.username;

  res.render('form.html', {username: username});
});

router.get('/update/:id', (req, res) => {
  const id = req.params.id;

  boardModel.findOne({boardId: id}, function(err, data) {
    if (err) {
      // todo, eslint-disable-next-line no-empty

    } else {
      res.render('updateform.html', {
        title: data.username,
        data: data,
        id: id,
      });
    }
  });
});

router.delete('/', (req, res) => {
  const id = req.body.id;

  boardModel.deleteOne({_id: id}, function(err) {
    if (err) return res.status(500).send('board 삭제 실패');
    res.send({result: true});
  });
});

router.put('/', (req, res) => {
  res.send({result: true});
});

module.exports = router;
