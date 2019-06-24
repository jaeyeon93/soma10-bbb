const express = require('express');
const router = express.Router();
const Board = require('../models/board.js');

router.post('/', function (req, res) {

    const username = req.body.username;

    console.log(username);

    res.render('form.html', {username});

});

router.post('/save', function (req, res) {

    Board.create({
            username: req.body.username,
            title: req.body.title,
            content: req.body.content,
            createDate: Date.now()
        },

        function (err, board) {
            if (err) return res.status(500).send("Board 저장 실패");
            else {

                //todo, user 별로 list 페이지로 넘기기.
                res.redirect(`/todos/${req.body.username}`);

            }
        }
    );

});

router.get('/:username', function (req, res)  {

    const boardId = req.params.boardId;

    Board.find().where("boardId").equals(boardId)
        .then(
            (board) => {
                console.log(board.toString());
                res.render('form.html', {username: board.username});
            }
        )
        .catch(e => res.status(500).send('board 조회 실패'));
});

module.exports = router;