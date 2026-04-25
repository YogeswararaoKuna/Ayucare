// models/UserResponse.js
const mongoose = require("mongoose");

const responseSchema = new mongoose.Schema({
    name: String,
    answers: [String],
    result: String
});

module.exports = mongoose.model("Response", responseSchema);