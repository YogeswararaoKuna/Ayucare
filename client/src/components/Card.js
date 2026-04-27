import { Link } from "react-router-dom";

function Card({ title, desc, img, btn, link }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-xl transition">

      <img src={img} alt="" className="w-16 mx-auto mb-4" />

      <h3 className="text-xl font-semibold text-green-700 mb-2">
        {title}
      </h3>

      <p className="text-gray-600 mb-4 text-sm">
        {desc}
      </p>

      <Link to={link}>
        <button className="border border-green-500 text-green-600 px-4 py-2 rounded-lg hover:bg-green-500 hover:text-white transition">
          {btn}
        </button>
      </Link>
    </div>
  );
}

export default Card;