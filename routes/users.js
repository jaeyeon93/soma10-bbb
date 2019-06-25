const express = require('express');
const router = express.Router();
const User = require('../models/user.js');

router.post('/login', (req, res) => {
  User.findOne({id: req.body.id}, function(err, data) {
    if (err) {
      // todo, err
    } else {
      if (data === null) {
        // todo, not data
      }
      if (data.password === req.body.password) {
        res.send({result: true});
      } else {
        res.send({result: false});
      }
    }
  });
});

router.delete('/delete', (req, res) => {
  User.deleteOne({id: req.body.id}, function(err) {
    if (err) return res.status(500).send('User 삭제 실패');
    res.send({result: true});
  });
});

router.post('/register', (req, res) => {
  User.create(
    {
      id: req.body.id,
      username: req.body.username,
      password: req.body.password,
    },
    function(err, user) {
      if (err) return res.status(500).send('User 생성 실패.');
      res.status(200).send(user);
    });
});

module.exports = router;
