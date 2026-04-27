import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    alert("Logged out");
    navigate("/login");
  };

  return (
    <nav className="flex justify-between px-10 py-4 bg-green-100 shadow">

      <h1 className="text-xl font-bold text-green-700">🌿 Ayurvedic</h1>

      <div className="space-x-5">

        <Link to="/">Home</Link>
        <Link to="/quiz">Quiz</Link>
        <Link to="/remedies">Remedies</Link>
        <Link to="/yoga">Yoga</Link>

        {/* 🔥 CONDITIONAL UI */}
        {!token ? (
          <>
            <Link className="bg-green-500 text-white px-3 py-1 rounded" to="/login">
              Login
            </Link>

            <Link className="border px-3 py-1 rounded" to="/register">
              Register
            </Link>
          </>
        ) : (
          <>
            <button
              onClick={handleLogout}
              className="bg-red-500 text-white px-3 py-1 rounded"
            >
              Logout
            </button>

            <Link to="/admin" className="border px-3 py-1 rounded">
              Admin
            </Link>
          </>
        )}

      </div>
    </nav>
  );
}

export default Navbar;