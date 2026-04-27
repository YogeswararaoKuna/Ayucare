import { useState } from "react";
import axios from "axios";

function Appointment() {
  const [form, setForm] = useState({
    name: "",
    doctor: "",
    date: ""
  });

  const handleSubmit = async () => {
    await axios.post("http://localhost:5000/appointment/book", form);
    alert("Appointment Booked!");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">

      <div className="bg-white p-8 rounded-xl shadow-lg w-96">

        <h2 className="text-2xl font-bold mb-4 text-center">
          📅 Book Appointment
        </h2>

        <input
          className="w-full border p-2 mb-3 rounded"
          placeholder="Name"
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />

        <input
          className="w-full border p-2 mb-3 rounded"
          placeholder="Doctor"
          onChange={(e) => setForm({ ...form, doctor: e.target.value })}
        />

        <input
          type="date"
          className="w-full border p-2 mb-3 rounded"
          onChange={(e) => setForm({ ...form, date: e.target.value })}
        />

        <button
          onClick={handleSubmit}
          className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600"
        >
          Book Now
        </button>

      </div>
    </div>
  );
}

export default Appointment;