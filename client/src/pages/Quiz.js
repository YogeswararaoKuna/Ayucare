import { useState } from "react";
import axios from "axios";

/* ================= QUESTIONS ================= */
const questions = [
  { q: "Body Frame", options: [{ text: "Thin", type: "V" }, { text: "Medium", type: "P" }, { text: "Heavy", type: "K" }, { text: "Mixed", type: "V" }] },
  { q: "Skin Type", options: [{ text: "Dry", type: "V" }, { text: "Oily", type: "P" }, { text: "Smooth", type: "K" }, { text: "Normal", type: "P" }] },
  { q: "Hair", options: [{ text: "Dry", type: "V" }, { text: "Oily", type: "P" }, { text: "Thick", type: "K" }, { text: "Normal", type: "K" }] },
  { q: "Appetite", options: [{ text: "Irregular", type: "V" }, { text: "Strong", type: "P" }, { text: "Slow", type: "K" }, { text: "Normal", type: "P" }] },
  { q: "Energy", options: [{ text: "Quick bursts", type: "V" }, { text: "Intense", type: "P" }, { text: "Steady", type: "K" }, { text: "Balanced", type: "K" }] },
  { q: "Sleep", options: [{ text: "Light", type: "V" }, { text: "Moderate", type: "P" }, { text: "Deep", type: "K" }, { text: "Normal", type: "P" }] },
  { q: "Weather Preference", options: [{ text: "Cold dislike", type: "V" }, { text: "Heat dislike", type: "P" }, { text: "Warm", type: "K" }, { text: "Neutral", type: "P" }] },
  { q: "Nature", options: [{ text: "Creative", type: "V" }, { text: "Aggressive", type: "P" }, { text: "Calm", type: "K" }, { text: "Balanced", type: "K" }] },
  { q: "Memory", options: [{ text: "Quick forget", type: "V" }, { text: "Sharp", type: "P" }, { text: "Long memory", type: "K" }, { text: "Normal", type: "P" }] },
  { q: "Walking Style", options: [{ text: "Fast", type: "V" }, { text: "Moderate", type: "P" }, { text: "Slow", type: "K" }, { text: "Normal", type: "P" }] },
  { q: "Stress Reaction", options: [{ text: "Anxiety", type: "V" }, { text: "Anger", type: "P" }, { text: "Calm", type: "K" }, { text: "Balanced", type: "K" }] },
  { q: "Body Temperature", options: [{ text: "Cold", type: "V" }, { text: "Warm", type: "P" }, { text: "Cool", type: "K" }, { text: "Normal", type: "P" }] }
];

/* ================= RECOMMENDATIONS ================= */
const recommendations = {
  Vata: {
    diet: [
      "Warm cooked foods",
      "Ghee & healthy fats",
      "Rice & wheat",
      "Avoid cold/raw food"
    ],
    yoga: [
      "Child Pose (5 mins)",
      "Tree Pose (5 mins)",
      "Meditation (10 mins)",
      "Slow breathing"
    ]
  },
  Pitta: {
    diet: [
      "Cooling foods",
      "Coconut water",
      "Leafy vegetables",
      "Avoid spicy food"
    ],
    yoga: [
      "Twists",
      "Cooling pranayama",
      "Moon salutation",
      "Relaxation yoga"
    ]
  },
  Kapha: {
    diet: [
      "Light & spicy foods",
      "Ginger tea",
      "Fruits & vegetables",
      "Avoid oily foods"
    ],
    yoga: [
      "Surya Namaskar",
      "Cardio yoga",
      "Dynamic stretching",
      "Fast breathing"
    ]
  }
};

function Quiz() {
  const [answers, setAnswers] = useState(Array(questions.length).fill(null));
  const [current, setCurrent] = useState(0);
  const [result, setResult] = useState(null);
  const [chart, setChart] = useState({ V: 0, P: 0, K: 0 });

  /* SELECT ANSWER */
  const handleSelect = (type) => {
    const arr = [...answers];
    arr[current] = type;
    setAnswers(arr);
  };

  /* NAVIGATION */
  const next = () => {
    if (current < questions.length - 1) setCurrent(current + 1);
  };

  const prev = () => {
    if (current > 0) setCurrent(current - 1);
  };

  /* CALCULATE RESULT */
  const calculate = async () => {
    let count = { V: 0, P: 0, K: 0 };

    answers.forEach((a) => {
      if (a) count[a]++;
    });

    setChart(count);

    let max = Math.max(count.V, count.P, count.K);
    let res =
      max === count.V ? "Vata" :
      max === count.P ? "Pitta" :
      "Kapha";

    setResult(res);

    try {
      const token = localStorage.getItem("token");

      await axios.post(
        "http://localhost:5000/quiz",
        { result: res },
        { headers: { authorization: token } }
      );
    } catch (err) {
      console.log(err);
    }
  };

  const progress = ((current + 1) / questions.length) * 100;

  return (
    <div className="min-h-screen bg-green-50 flex justify-center items-center">

      <div className="bg-white p-6 rounded-xl shadow w-[520px]">

        <h1 className="text-xl font-bold text-green-700 mb-3">
          🌿 Dosha Quiz
        </h1>

        {/* PROGRESS BAR */}
        <div className="w-full bg-gray-200 rounded h-2 mb-4">
          <div
            className="bg-green-500 h-2 rounded transition-all duration-500"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        <p className="text-sm mb-3">
          Question {current + 1} of {questions.length}
        </p>

        {/* QUESTION */}
        <h2 className="font-semibold mb-4">
          {questions[current].q}
        </h2>

        <div className="grid grid-cols-2 gap-3">
          {questions[current].options.map((opt, i) => (
            <button
              key={i}
              onClick={() => handleSelect(opt.type)}
              className={`p-2 border rounded transition ${
                answers[current] === opt.type
                  ? "bg-green-500 text-white"
                  : "hover:bg-green-100"
              }`}
            >
              {opt.text}
            </button>
          ))}
        </div>

        {/* NAVIGATION */}
        <div className="flex justify-between mt-5">
          <button onClick={prev} className="bg-gray-300 px-3 py-1 rounded">
            Prev
          </button>

          {current === questions.length - 1 ? (
            <button
              onClick={calculate}
              className="bg-green-600 text-white px-4 py-1 rounded"
            >
              Submit
            </button>
          ) : (
            <button
              onClick={next}
              className="bg-green-600 text-white px-4 py-1 rounded"
            >
              Next
            </button>
          )}
        </div>

        {/* RESULT SECTION */}
        {result && (
          <div className="mt-6 bg-green-50 p-5 rounded-xl shadow">

            <h2 className="text-xl font-bold text-green-700">
              Your Dosha: {result}
            </h2>

            {/* DIET */}
            <h3 className="mt-3 font-semibold text-green-600">
              🍽 Diet Plan
            </h3>
            <ul className="ml-5 list-disc">
              {recommendations[result].diet.map((d, i) => (
                <li key={i}>{d}</li>
              ))}
            </ul>

            {/* YOGA */}
            <h3 className="mt-3 font-semibold text-green-600">
              🧘 Yoga Plan
            </h3>
            <ul className="ml-5 list-disc">
              {recommendations[result].yoga.map((y, i) => (
                <li key={i}>{y}</li>
              ))}
            </ul>

            {/* CHART */}
            <div className="mt-4 space-y-2">
              {["V", "P", "K"].map((key) => (
                <div key={key}>
                  <p>
                    {key === "V" ? "Vata" : key === "P" ? "Pitta" : "Kapha"}: {chart[key]}
                  </p>
                  <div className="w-full bg-gray-200 h-2 rounded">
                    <div
                      className="bg-green-500 h-2 rounded"
                      style={{ width: `${chart[key] * 10}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        )}

      </div>
    </div>
  );
}

export default Quiz;