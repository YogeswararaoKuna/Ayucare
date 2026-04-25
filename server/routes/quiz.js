const router = require("express").Router();
const Quiz = require("../models/Quiz");

/* 👇 IMPORT MIDDLEWARE */
const auth = require("../middleware/auth");

/* SAVE QUIZ */
router.post("/", auth, async (req, res) => {
  try {
    const quiz = new Quiz({
      userId: req.user.id,
      result: req.body.result
    });

    await quiz.save();

    res.json("Quiz saved");

  } catch (err) {
    res.status(500).json(err.message);
  }
});

/* GET ALL QUIZ (ADMIN USE) */
router.get("/", async (req, res) => {
  const data = await Quiz.find();
  res.json(data);
});

module.exports = router;