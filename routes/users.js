var express = require('express');
var router = express.Router();
const User = require('../models/user.js');

/* GET users listing. */
router.post('/login', function (req, res, next) {

    User.findOne({id: req.body.id}, function (err, data) {
        if (err) {
            //err
        } else {
            if (data === null) {
                //not data
            }
            if (data.password === req.body.password) {
                // console.log("log password success");
                res.send({result: true});
            } else {
                // console.log("log password faild");
                res.send({result: false});
            }
        }
    });

});

router.post('/delete', function (req, res, next) {
    console.log(req.body.id);
    User.remove({id:req.body.id}, function (err, user) {
        if (err) return res.status(500).send("User 삭제 실패");
        res.send({result: true});
    });
});

router.post('/register', function (req, res, next) {
    console.log(req.body.id);
    console.log(req.body.password);
    console.log(req.body.username);

    User.create({
            id: req.body.id,
            username: req.body.username,
            password: req.body.password
        },
        function (err, user) {
            if (err) return res.status(500).send("User 생성 실패.");
            res.status(200).send(user);
        });
});

router.get('/:username', function (req, res, next) {

    User.find(function (err, user) {
        if (true) {
            success();
        } else {
            res.render('error.html', {});
        }
    });

    function success() {
        res.render('user.html', {
            title: 'User',
            username: req.params.username
        });
    }

});

module.exports = router;
