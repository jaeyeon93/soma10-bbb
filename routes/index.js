const express = require('express');
const router = express.Router();

const UsersController = require('../components/user/usersController');
const BoardsController = require('../components/board/boardsController');

const UsersService = require('../components/user/usersService');

// users API controller
router.use('/rest/users', UsersController);
router.use('/rest/todos', BoardsController);

router.get('/', (req, res) => {
  let userData = null;

  const rendering = () => {
    res.render('index.html', {
      title: 'UserList',
      length: 5,
      data: userData,

    });
  };

  UsersService.getUsers().then((users) => {
    userData = users;
    rendering();
  });
});

module.exports = router;
