const express = require('express');
const router = express.Router();

const BoardsService = require('../components/board/boardsService');

router.get('/:username', (req, res) => {
  const username = req.params.username;

  BoardsService.getUserBoardAll(username)
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

  BoardsService.getUserBoard(id)
    .then((data) => {
      res.render('updateform.html', {
        title: data.username,
        data: data,
        id: id,
      });
    })
    .catch((err) => {
      res.send(err);
    });
});

router.delete('/', (req, res) => {
  const id = req.body.id;

  BoardsService.deleteBoard(id)
    .then(() => {
      res.send({result: true});
    })
    .catch(() => {
      res.status(500).send('board 삭제 실패');
    });
});

router.put('/', (req, res) => {
  res.send({result: true});
});

module.exports = router;
