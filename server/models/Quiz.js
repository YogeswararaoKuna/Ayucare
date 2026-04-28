const mongoose = require("mongoose");

const quizSchema = new mongoose.Schema({
  name: String,
  answers: Array,
  result: String
});

module.exports = mongoose.model("Quiz", quizSchema);
