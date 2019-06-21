const mongoose = require('mongoose');
const autoIncrement = require('mongoose-auto-increment');
const Schema = mongoose.Schema;
const User = require('user.js');

const connection = mongoose.createConnection("mongodb://soma:1234@52.78.201.246:27017/todo");

autoIncrement.initialize(connection);

const countSchema = new Schema({
    id: Number
});

const boardSchema = new Schema({
    username: { type: Schema.Types.ObjectId, ref: 'User' },
    title: { type: String, required: true },
    content: String,
    createDate: { type: Date, default: Date.now }
});

boardSchema.plugin(autoIncrement.plugin, { model: 'Board', field: 'boardId'});
countSchema.plugin(autoIncrement.plugin, 'Count');

var Form = mongoose.model('formInfo', formInfoSchema);

module.exports = mongoose.model( 'formInfo', formInfoSchema);