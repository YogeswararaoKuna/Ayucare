const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

/* ================= REGISTER ================= */
router.post("/register", async (req, res) => {
  try {
    const { email, password } = req.body;

    const existing = await User.findOne({ email });
    if (existing) return res.status(400).json("User already exists");

    const hashed = await bcrypt.hash(password, 10);

    const user = new User({
      email,
      password: hashed,
      role: "user"   // default role
    });

    await user.save();

    res.json("Registered successfully");

  } catch (err) {
    res.status(500).json("Server error");
  }
});


/* ================= LOGIN ================= */
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) return res.status(400).json("User not found");

    const valid = await bcrypt.compare(password, user.password);

    if (!valid) return res.status(400).json("Invalid password");

    /* 🔥 JWT HERE (INSIDE FUNCTION) */
    const token = jwt.sign(
      { id: user._id, role: user.role },
      "secretkey"
    );

    res.json({
      token,
      role: user.role,
      userId: user._id
    });

  } catch (err) {
    res.status(500).json("Server error");
  }
});

module.exports = router;