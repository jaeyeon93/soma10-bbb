const BoardsRepository = require('./boardsRepository');

const getUserBoardAll = (username) => {
  return BoardsRepository.getUserBoardAll(username);
};

const getUserBoard = (boardId) => {
  return BoardsRepository.getUserBoard(boardId);
}

const saveBoard = (board) => {
  return BoardsRepository.saveBoard(board);
}

const updateBoard = (title, content, boardId) => {
  return BoardsRepository.updateBoard(title, content, boardId);
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
