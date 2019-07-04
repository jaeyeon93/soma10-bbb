const Board = require('../../models/board');

const getUserBoardAll = (username) => {
  return Board.find().where('username').equals(username);
};

const getUserBoard = (id) => {
  const boardId = {boardId: id};
  const modelParams = Object.assign({}, boardId);

  return Board.findOne(modelParams);
};

const saveBoard = (username, title, content) => {
  const board = {
    username: username,
    title: title,
    content: content,
    createDate: Date.now(),
  };
  const modelParams = Object.assign({}, board);

  return Board.create(modelParams);
};

const updateBoard = (id, title, content) => {
  return getUserBoard(id)
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
