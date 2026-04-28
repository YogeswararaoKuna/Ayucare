import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await axios.post("https://healthcare-backend-8dr8.onrender.com/auth/login", {
        email,
        password
      });

      /* 🔥 STORE EVERYTHING */
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("role", res.data.role);
      localStorage.setItem("userId", res.data.userId);

      alert("Login successful");
      navigate("/");

    } catch (err) {
      console.log(err);

      if (err.response && err.response.data) {
        alert(err.response.data);
      } else {
        alert("Server not running or network error");
      }
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-green-50">

      <div className="bg-white p-6 shadow rounded w-80">

        <h2 className="text-2xl mb-4 text-green-700">Login</h2>

        <input
          className="border p-2 w-full mb-3"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          className="border p-2 w-full mb-3"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={handleLogin}
          className="bg-green-600 text-white w-full py-2 rounded"
        >
          Login
        </button>

      </div>
    </div>
  );
}

export default Login;