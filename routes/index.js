const express = require('express');
const router = express.Router();
const User = require('../models/user.js');

/* GET userList. */
router.get('/', function (req, res, next) {

    let userData = null;

    User.find(function (err, user) {
        console.log("asd" + user.toString());
        userData = user;
        rendering();
    });

    function rendering() {
        res.render('index.html', {
            title: 'UserList',
            length: 5,
            data: userData
        });
    }
});

module.exports = router;
