import { useEffect, useState } from "react";
import axios from "axios";

function Admin() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await axios.get(
        "http://localhost:5000/admin/dashboard",
        {
          headers: {
            authorization: localStorage.getItem("token")
          }
        }
      );

      setData(res.data);

    } catch (err) {
      console.log(err);
      alert("Not authorized or error loading data");
    }
  };

  return (
    <div className="p-8">

      <h1 className="text-3xl font-bold text-green-700 mb-6">
        Admin Dashboard
      </h1>

      <div className="bg-white shadow rounded p-4">

        <table className="w-full border">

          <thead className="bg-green-500 text-white">
            <tr>
              <th className="p-2">User Email</th>
              <th className="p-2">Dosha Result</th>
            </tr>
          </thead>

          <tbody>
            {data.map((d, i) => (
              <tr key={i} className="text-center border-b">
                <td className="p-2">{d.email}</td>
                <td className="p-2 font-semibold">{d.result}</td>
              </tr>
            ))}
          </tbody>

        </table>

      </div>

    </div>
  );
}

export default Admin;