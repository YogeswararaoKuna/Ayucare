// server/routes/appointment.js
const express = require("express");
const router = express.Router();
const Appointment = require("../models/Appointment");

router.post("/book", async (req, res) => {
  const data = new Appointment(req.body);
  await data.save();
  res.json({ message: "Appointment booked" });
});

router.get("/all", async (req, res) => {
  const data = await Appointment.find();
  res.json(data);
});

module.exports = router;