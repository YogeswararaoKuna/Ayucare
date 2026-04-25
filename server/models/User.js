const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: String,
  password: String,
  role: {
    type: String,
    default: "user"   // 👈 default
  }
});

module.exports = mongoose.model("User", userSchema);