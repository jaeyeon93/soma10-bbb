const express = require('express');
const router = express.Router();

const BoardsService = require('./boardsService');

/**
 * @api {get} /rest/todos/all Get All Board
 */
router.get('/all/:username', (req, res, next) => {
  const username = req.params.username;

  BoardsService.getUserBoardAll(username)
    .then((boards) => {
      res.send(boards);
    })
    .catch((e) => {
      res.send(e);
    });
});

/**
 * @api {get} /rest/todos/one Get All Board
 */
router.get('/one/:id', (req, res, next) => {
  const id = req.params.id;

  BoardsService.getUserBoard(id)
    .then((board) => {
      res.send(board);
    })
    .catch((e) => {
      res.send(e);
    });
});

// todo, delete

// todo, update
router.put('/update', (req, res, next) => {
  const title = req.params.title;
  const content = req.params.content;
  const boardId = req.params.boardId;

  BoardsService.updateBoard(title, content, boardId)
    .then((result) => {
      res.send(result);
    })
    .catch((e) => {
      res.send(e);
    });
})

// todo, save

module.exports = router;
