const mongoose = require('mongoose');
const autoIncrement = require('mongoose-auto-increment');
const Schema = mongoose.Schema;
const db = require('../db/db');

const connection = db;

autoIncrement.initialize(connection);

const countSchema = new Schema({
    id: Number
});

const boardSchema = new Schema({
    username: { type: String, required: true },
    title: { type: String, required: true },
    content: String,
    createDate: { type: Date, default: Date.now }
});

boardSchema.plugin(autoIncrement.plugin, { model: 'Board', field: 'boardId'});
countSchema.plugin(autoIncrement.plugin, 'Count');

let Board = mongoose.model('board', boardSchema);

Board.prototype.toString = function boardToString() {
    return 'username: ' + this.username +
        'title: ' + this.title +
        'content: ' + this.content +
        'crateDate: ' + this.createDate;
};

module.exports = mongoose.model( 'board', boardSchema);