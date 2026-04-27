import { useState } from "react";

function Diet() {
  const [type, setType] = useState("");
  const [plan, setPlan] = useState([]);

  const dietPlans = {
    Vata: [
      "Warm cooked foods",
      "Rice, wheat",
      "Milk, ghee",
      "Sweet fruits (banana, mango)",
      "Avoid cold foods"
    ],
    Pitta: [
      "Cooling foods",
      "Coconut water",
      "Cucumber, leafy greens",
      "Sweet fruits",
      "Avoid spicy food"
    ],
    Kapha: [
      "Light foods",
      "Spices (ginger, pepper)",
      "Vegetables",
      "Warm water",
      "Avoid oily & heavy food"
    ]
  };

  const handleSelect = (dosha) => {
    setType(dosha);
    setPlan(dietPlans[dosha]);
  };

  return (
    <div className="p-6 max-w-4xl mx-auto text-center">

      <h1 className="text-3xl font-bold text-green-700 mb-6">
        🥗 Diet Plans
      </h1>

      {/* SELECT DOSHA */}
      <div className="mb-6">
        <button onClick={() => handleSelect("Vata")} className="btn">Vata</button>
        <button onClick={() => handleSelect("Pitta")} className="btn mx-2">Pitta</button>
        <button onClick={() => handleSelect("Kapha")} className="btn">Kapha</button>
      </div>

      {/* SHOW PLAN */}
      {type && (
        <div className="bg-green-100 p-5 rounded shadow">
          <h2 className="text-xl font-bold text-green-700 mb-3">
            {type} Diet Plan
          </h2>

          <ul className="text-left">
            {plan.map((item, i) => (
              <li key={i}>✔ {item}</li>
            ))}
          </ul>
        </div>
      )}

    </div>
  );
}

export default Diet;