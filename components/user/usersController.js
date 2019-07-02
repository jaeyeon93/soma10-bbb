const express = require('express');

const UserService = require('./usersService');

const router = express.Router();

router.get('/', (req, res, next) => {
  UserService.getUsers().then((users) => {
    res.send(users);
  });
});

module.exports = router;
