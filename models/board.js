const mongoose = require('mongoose');
const autoIncrement = require('mongoose-auto-increment');
const Schema = mongoose.Schema;
const db = require('../db/db');

const connection = db;

autoIncrement.initialize(connection);

const boardSchema = new Schema(
    {
        username: {type: String, required: true},
        title: {type: String, required: true},
        content: String,
        createDate: {type: Date, default: Date.now}
    },
    {
        timestamp: {
            createdAt: 'created_at',
            updatedAt: 'updated_at'
        }
    }
);

boardSchema.plugin(autoIncrement.plugin, { model: 'Board', field: 'boardId'});

module.exports = mongoose.model('board', boardSchema);