const User = require('../../models/user');

const getUsers = (params) => {
  // 'Object.assing - 객체를 병하는 메서드', https://pro-self-studier.tistory.com/21
  const modelParams = Object.assign({}, params);
  return User.find(modelParams);
};

module.exports = {
  getUsers: getUsers,
};
