const express = require('express');
const router = express.Router();
const User = require('../models/user.js');

router.get('/', (req, res, next) => {
  let userData = null;
  const rendering = () => {
    res.render('index.html', {
      title: 'UserList',
      length: 5,
      data: userData,

    });
  };

  User.find((err, user) => {
    console.log('asd' + user.toString());
    userData = user;
    rendering();
  });
});

module.exports = router;
