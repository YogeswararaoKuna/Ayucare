import { useState } from "react";

/* ================= DATA ================= */
const remediesData = {
  Headache: {
    img: "https://cdn.shopify.com/s/files/1/0602/2440/5694/files/Ginger-Tea_7e35eb08-2d4a-4aa2-8ee0-813cb870433d_480x480.jpg?v=1655306341",
    ingredients: ["Ginger", "Water", "Honey"],
    steps: [
      "Boil 1 cup of water",
      "Add grated ginger",
      "Let it boil for 5–7 minutes",
      "Strain the mixture",
      "Add honey and drink warm"
    ]
  },
  "Stomach Pain": {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTREclo4skIYYpOu-uT5zY885BYrdlHCF2NDQ&s",
    ingredients: ["Ajwain", "Warm water"],
    steps: [
      "Take 1 tsp ajwain",
      "Chew it slowly",
      "Drink warm water",
      "Relax for 10 minutes"
    ]
  },
  Cold: {
    img: "https://m.media-amazon.com/images/I/41zRY-GgBQL._AC_UF350,350_QL80_.jpg",
    ingredients: ["Tulsi leaves", "Ginger", "Water"],
    steps: [
      "Boil water",
      "Add tulsi and ginger",
      "Boil for 10 minutes",
      "Strain and drink"
    ]
  },
  Cough: {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwWimkLu8E0ctnR6GF1LnYNXAZh6FLJ6pFFQ&s",
    ingredients: ["Honey", "Black pepper"],
    steps: [
      "Take 1 tsp honey",
      "Add a pinch of pepper",
      "Mix well",
      "Consume twice daily"
    ]
  },
  Fever: {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiBnyhevLSM39z-1kP6eJqn7TeXQm4Si0-FQ&s",
    ingredients: ["Tulsi", "Clove", "Water"],
    steps: [
      "Boil tulsi leaves and cloves",
      "Simmer for 10 minutes",
      "Drink twice daily"
    ]
  },
  Acidity: {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIRlhOdmPjgI3-3kUYr6wuPEGn6dOOiGpEFg&s",
    ingredients: ["Cold milk"],
    steps: [
      "Take 1 glass cold milk",
      "Drink slowly",
      "Avoid spicy food"
    ]
  },
  Constipation: {
    img: "https://media.post.rvohealth.io/wp-content/uploads/sites/3/2023/11/lemon-water-732x549-thumbnail.jpg",
    ingredients: ["Warm water", "Lemon"],
    steps: [
      "Take warm water",
      "Add lemon juice",
      "Drink early morning"
    ]
  },
  "Joint Pain": {
    img: "https://t3.ftcdn.net/jpg/02/42/02/72/360_F_242027240_492EKBW8EHF2JG1tWITgtZ6PeQwC9Vm3.jpg",
    ingredients: ["Turmeric milk"],
    steps: [
      "Heat milk",
      "Add turmeric",
      "Drink before sleep"
    ]
  },
  Insomnia: {
    img: "https://www.allrecipes.com/thmb/AnkSsrzMLjk5vqf56ED8d-_JcA4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/158655-dreamy-nighttime-drink-ddmfs-4x3-0892-8c7a99f0c66b49948c57b8d806c31065.jpg",
    ingredients: ["Warm milk"],
    steps: [
      "Heat milk",
      "Drink before bed",
      "Relax body"
    ]
  },
  "Hair Fall": {
    img: "https://www.verywellhealth.com/thmb/YU_4tvUI3VVmGHrD2Dvp7-0zqJw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-8081649701-5b37f75946e0fb0037ce0001.jpg",
    ingredients: ["Coconut oil"],
    steps: [
      "Apply coconut oil",
      "Massage gently",
      "Leave for 1 hour",
      "Wash hair"
    ]
  },
  "Skin Issues": {
    img: "https://brownliving.in/cdn/shop/files/sustainable-pure-aloe-vera-gel-skin-hair-by-pratha-at-brownliving-523895.jpg?v=1738166750",
    ingredients: ["Aloe vera"],
    steps: [
      "Take aloe gel",
      "Apply on skin",
      "Leave for 20 minutes",
      "Wash with water"
    ]
  },
  Diabetes: {
    img: "https://femina.wwmindia.com/content/2021/sep/seeds-thumb1631688357.jpg",
    ingredients: ["Fenugreek seeds"],
    steps: [
      "Soak seeds overnight",
      "Drink water in morning",
      "Eat soaked seeds"
    ]
  }
};

function Remedies() {
  const [selected, setSelected] = useState("");

  return (
    <div
      className="min-h-screen bg-cover bg-center p-6"
      style={{
        backgroundImage:
          "url('')"
      }}
    >
      <div className="bg-white/90 backdrop-blur-md p-8 rounded-xl shadow-xl max-w-4xl mx-auto">

        <h1 className="text-3xl font-bold text-green-700 text-center mb-6">
          🌿 Ayurvedic Remedies
        </h1>

        {/* SELECT */}
        <select
          className="w-full border p-3 rounded mb-6"
          onChange={(e) => setSelected(e.target.value)}
        >
          <option value="">-- Select Health Issue --</option>
          {Object.keys(remediesData).map((ill, i) => (
            <option key={i}>{ill}</option>
          ))}
        </select>

        {/* RESULT */}
        {selected && (
          <div className="bg-green-50 p-6 rounded-lg shadow">

            {/* IMAGE */}
            <img
              src={remediesData[selected].img}
              alt=""
              className="w-full h-56 object-cover rounded mb-4"
            />

            <h2 className="text-2xl font-bold text-green-700 mb-4">
              {selected} Remedy
            </h2>

            {/* INGREDIENTS */}
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-green-600 mb-2">
                Ingredients 🧾
              </h3>
              <div className="flex flex-wrap gap-2">
                {remediesData[selected].ingredients.map((item, i) => (
                  <span
                    key={i}
                    className="bg-green-200 px-3 py-1 rounded-full"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* STEPS */}
            <div>
              <h3 className="text-xl font-semibold text-green-600 mb-3">
                Preparation Steps 🍵
              </h3>

              {remediesData[selected].steps.map((step, i) => (
                <div
                  key={i}
                  className="bg-white p-3 rounded shadow mb-2 flex gap-3"
                >
                  <span className="bg-green-500 text-white px-3 py-1 rounded-full">
                    Step {i + 1}
                  </span>
                  <p>{step}</p>
                </div>
              ))}
            </div>

          </div>
        )}
      </div>
    </div>
  );
}

export default Remedies;