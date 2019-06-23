const express = require('express');
const router = express.Router();
const Board = require('../models/board.js');

router.get('/', function (req, res) {
    //todo, list 페이지에서 'username' 받아서, hidden tag value +
    res.render('form.html', {title: 'username'});
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

router.post('/update', function (req, res) {

    const id = req.body.id;
    const title = req.body.title;
    const content = req.body.content;

    console.log(id+title);

        Board.findOne({boardId: id}, function (err, board) {
        if (err) {
            console.log(err);
        } else {
            console.log("updatedataaaaaaaa" + board.toString());  // yhpark 수정함 (todos_add -> form 연결)
            board.title = title;
            board.content = content;
            const username = board.username;
            //날짜 변경
            board.save(function(err){
                if(err) res.status(500).json({error: 'failed to update'});
                res.statusCode = 302;
                res.setHeader("Location", `http://localhost:3000/todos/${username}`);
                res.end();
            });
            // res.render('todos_list.html', {
            //     title: data.username,
            //     data: data,
            //     id: id
            // });
        }
    });



});


module.exports = router;