const mongoose = require('mongoose');

const { Schema } = mongoose;
const md5 = require('md5');
const validator = require('validator');
const passport = require('passport-local-mongoose');
const mangoErrorHandler = require('mongoose-mongodb-errors');

const userSchema = Schema({
  email: {
    type: String,
    unique: true,
    lowercase: true,
    trim: true,
    validate: [validator.isEmail, 'Invalid Email Message!'],
  },
  name: {
    type: String,
    required: 'Please supply a name',
    trim: true,
  },
});

userSchema.plugin(passport, { usernameField: 'email' });
userSchema.plugin(mangoErrorHandler);

module.exports = mongoose.model('User', userSchema);
