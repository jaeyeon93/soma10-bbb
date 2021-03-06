const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  id: String,
  password: String,
  username: String,
});

/**
 * Methods
 * @type {Model}
 */
UserSchema.method({});

const User = mongoose.model('User', UserSchema);

module.exports = User;
