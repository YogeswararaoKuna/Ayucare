import { useEffect, useState } from "react";
import axios from "axios";

function Analytics() {
  const [stats, setStats] = useState({ Vata: 0, Pitta: 0, Kapha: 0 });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await axios.get("http://localhost:5000/quiz/all");

    let count = { Vata: 0, Pitta: 0, Kapha: 0 };

    res.data.forEach((u) => {
      count[u.result]++;
    });

    setStats(count);
  };

  return (
    <div className="p-6">

      <h1 className="text-3xl font-bold mb-6">
        Analytics Dashboard
      </h1>

      <div className="grid grid-cols-3 gap-6">

        <div className="bg-green-200 p-6 rounded">
          Vata: {stats.Vata}
        </div>

        <div className="bg-red-200 p-6 rounded">
          Pitta: {stats.Pitta}
        </div>

        <div className="bg-blue-200 p-6 rounded">
          Kapha: {stats.Kapha}
        </div>

      </div>
    </div>
  );
}

export default Analytics;