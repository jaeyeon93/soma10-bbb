const express = require('express');
const router = express.Router();
const Board = require('../models/board.js');

router.get('/', function(req, res) {
  // todo, list 페이지에서 'username' 받아서, hidden tag value +
  res.render('form.html', {title: 'username'});
});

router.post('/save', function(req, res) {

  Board.create({
    username: req.body.username,
    title: req.body.title,
    content: req.body.content,
    createDate: Date.now(),
  },

  function(err, board) {

    if (err) return res.status(500).send('Board 저장 실패');
    else {
      // todo, user 별로 list 페이지로 넘기기.
      res.redirect(`/todos/${req.body.username}`);
    }
  }
  );
}
);


module.exports = router;