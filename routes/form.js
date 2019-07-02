const express = require('express');
const router = express.Router();

const BoardsService = require('../components/board/boardsService');

router.post('/save', function(req, res) {
  const username = req.body.username;
  const title = req.body.title;
  const content = req.body.content;

  BoardsService.saveBoard(username, title, content)
    .then(() => {
      res.redirect(`/todos/${username}`);
    })
    .catch(() => {
      res.status(500).send('board 저장 실패');
    });
});

router.post('/update', function(req, res) {
  const id = req.body.id;
  const title = req.body.title;
  const content = req.body.content;
  const username = req.body.username;

  BoardsService.updateBoard(id, title, content)
    .then(() => {
      res.redirect(`/todos/${username}`);
    })
    .catch(() => {
      res.status(500).json({error: 'failed to update'});
    });
});

module.exports = router;
