const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();   // ✅ FIRST CREATE APP

app.use(cors());
app.use(express.json());

/* 🔥 ROUTES (AFTER app is created) */
app.use("/auth", require("./routes/auth"));
app.use("/quiz", require("./routes/quiz"));
app.use("/admin", require("./routes/admin"));

/* 🔗 DATABASE */
mongoose.connect(
  "mongodb+srv://yogi:yogi123@cluster0.kcotg0e.mongodb.net/healthcare?retryWrites=true&w=majority"
)
.then(() => console.log("MongoDB Atlas Connected"))
.catch(err => console.log("DB ERROR:", err));

/* 🚀 SERVER */
app.listen(5000, () => console.log("Server running on port 5000"));