const express = require('express');
const router = express.Router();
const User = require('../models/user.js');

/* GET users listing. */
router.get('/register', (req, res, next) => {
  console.log(res.body);
});

router.get('/:username', (req, res, next) => {
  const success = () => {
    res.render('user.html', {
      title: 'User',
      username: req.params.name,
    });
  };
  User.find((err, user) => {
    if (user[req.params.username[1]]['password'] === '1234') {
      success();
    } else {
      res.render('error.html', {});
    }
  });
}
);

module.exports = router;
