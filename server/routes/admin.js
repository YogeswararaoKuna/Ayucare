const router = require("express").Router();
const Quiz = require("../models/Quiz");
const User = require("../models/User");

const auth = require("../middleware/auth");
const admin = require("../middleware/admin");

/* GET USERS + QUIZ RESULTS */
router.get("/dashboard", auth, admin, async (req, res) => {
  try {
    const quizzes = await Quiz.find();

    const result = await Promise.all(
      quizzes.map(async (q) => {
        const user = await User.findById(q.userId);

        return {
          email: user?.email || "Unknown",
          result: q.result
        };
      })
    );

    res.json(result);

  } catch (err) {
    res.status(500).json(err.message);
  }
});

module.exports = router;