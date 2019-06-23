const mongoose = require('mongoose');
const autoIncrement = require('mongoose-auto-increment');
const Schema = mongoose.Schema;
const db = require('../db/db');

const connection = db;

autoIncrement.initialize(connection);

const userSchema = new Schema({
  id: String,
  password: String,
  username: String
});

userSchema.plugin(autoIncrement.plugin, 'user');

module.exports = mongoose.model('user', userSchema);
