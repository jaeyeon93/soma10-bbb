const mongoose = require('mongoose');
const autoIncrement = require('mongoose-auto-increment');
const db = require('../db/db');

const BoardSchema = new mongoose.Schema(
  {
    username: {type: String, required: true},
    title: {type: String, required: true},
    content: String,
    createDate: {type: Date, default: Date.now},
    modified: {type: Date, default: Date.now},
  },
);

const connection = db;

autoIncrement.initialize(connection);
BoardSchema.plugin(autoIncrement.plugin, {model: 'Board', field: 'boardId'});

const Board = mongoose.model('board', BoardSchema);

module.exports = Board;
