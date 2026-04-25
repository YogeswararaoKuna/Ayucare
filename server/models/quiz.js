const mongoose = require("mongoose");

const quizSchema = new mongoose.Schema({
  userId: String,
  result: String   // Vata / Pitta / Kapha
});

module.exports = mongoose.model("Quiz", quizSchema);