const BoardsRepository = require('./boardsRepository');

const getUserBoardAll = (params) => {
  return BoardsRepository.getUserBoardAll(params);
};

const getUserBoard = (params) => {
  return BoardsRepository.getUserBoard(params);
}

const saveBoard = (params1, params2, params3) => {
  return BoardsRepository.saveBoard(params1, params2, params3);
}

const updateBoard = (params1, params2, params3) => {
  return BoardsRepository.updateBoard(params1, params2, params3);
}

const deleteBoard = (params) => {
  return BoardsRepository.deleteBoard(params);
}

module.exports = {
  getUserBoardAll: getUserBoardAll,
  getUserBoard: getUserBoard,
  saveBoard: saveBoard,
  updateBoard: updateBoard,
  deleteBoard: deleteBoard,
}
