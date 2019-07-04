const Board = require('../../models/board');

const getUserBoardAll = (username) => {
  return Board.find().where('username').equals(username);
};

const getUserBoard = (id) => {
  const boardId = {boardId: id};
  const modelParams = Object.assign({}, boardId);

  return Board.findOne(modelParams);
};

const saveBoard = (post) => {
  const createDate = {createDate: Date.now()};
  const modelParams = Object.assign(post, createDate);

  return Board.create(modelParams);
};

const updateBoard = (title, content, boardId) => {
  return getUserBoard(boardId)
    .then((board) => {
      board.title = title;
      board.content = content;

      board.save();
    })
    .catch((e) => console.log(e));
};

const deleteBoard = (params) => {
  const id = {_id: params};
  const modelParams = Object.assign({}, id);

  return Board.deleteOne(modelParams);
};

module.exports = {
  getUserBoardAll: getUserBoardAll,
  getUserBoard: getUserBoard,
  saveBoard: saveBoard,
  updateBoard: updateBoard,
  deleteBoard: deleteBoard,
};
