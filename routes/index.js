const express = require('express');
const router = express.Router();

const userController = require('../components/user/usersController');
const UserService = require('../components/user/usersService');

// users API controller
router.use('/users', userController);

router.get('/', (req, res) => {
  let userData = null;

  const rendering = () => {
    res.render('index.html', {
      title: 'UserList',
      length: 5,
      data: userData,

    });
  };

  UserService.getUsers().then((users) => {
    userData = users;
    rendering();
  });
});

module.exports = router;
