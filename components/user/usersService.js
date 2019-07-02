const UsersRepository = require('./usersRepository.js');

const getUsers = (params) => {
  return UsersRepository.getUsers(params);
}

module.exports = {
  getUsers: getUsers,
}
