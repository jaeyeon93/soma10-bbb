const express = require('express');
const router = express.Router();

const Board = require('../models/board');
const BoardsService = require('../components/board/boardsService');

router.post('/save', (req, res, next) => {
  const board = new Board(req.body);

  BoardsService.saveBoard(board)
    .then((result) => {
      res.redirect(`/todos/${req.body.username}`);
      // res.send(result);
    })
    .catch(() => {
      res.status(500).send('board 저장 실패');
    });
});

router.post('/update', function(req, res) {
  const username = req.body.username;
  const title = req.body.title;
  const content = req.body.content;
  const boardId = req.body.boardId;

  BoardsService.updateBoard(title, content, boardId)
    .then(() => {
      res.redirect(`/todos/${username}`);
    })
    .catch(() => {
      res.status(500).json({error: 'failed to update'});
    });
});

module.exports = router;
