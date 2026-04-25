const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  name: String,
  answers: [String],
  result: String,
  dietPlan: String,   // ✅ NEW
  yogaPlan: String    // ✅ NEW
});

module.exports = mongoose.model("UserResult", schema);