//// User model ////

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const favSchema = new Schema({
  name: String,
  servingSize: String,
  servings: Number,
  calories: Number,
  protein: Number,
  carbs: Number,
  fat: Number,
  fiber: Number,
  sugar: Number,
})

const userSchema = new Schema({
  googleId: String,
  favorites: [favSchema],
});

const User = mongoose.model('users', userSchema);

module.exports = User;
