import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Footer from "../components/Footer";

function Home() {
  const navigate = useNavigate();

  const [hovered, setHovered] = useState(null);
  const [btnHover, setBtnHover] = useState(null);

  const goToStore = () => {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        window.open(
          `https://www.google.com/maps/dir/?api=1&origin=${pos.coords.latitude},${pos.coords.longitude}&destination=ayurvedic+store`,
          "_blank"
        );
      },
      () =>
        window.open(
          "https://www.google.com/maps/search/ayurvedic+store",
          "_blank"
        )
    );
  };

  const goToDoctor = () => {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        window.open(
          `https://www.google.com/maps/dir/?api=1&origin=${pos.coords.latitude},${pos.coords.longitude}&destination=ayurvedic+doctor`,
          "_blank"
        );
      },
      () =>
        window.open(
          "https://www.google.com/maps/search/ayurvedic+doctor",
          "_blank"
        )
    );
  };

  return (
    <>
      <div style={styles.hero}>
        <h2 style={styles.heading}>Our Features</h2>
        <p style={styles.sub}>
          Discover all the ways we help you live healthier
        </p>

        <div style={styles.grid}>
          {/* CARD 1 */}
          <div
            style={{
              ...styles.card,
              ...(hovered === 1 ? styles.cardHover : {}),
            }}
            onMouseEnter={() => setHovered(1)}
            onMouseLeave={() => setHovered(null)}
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/4320/4320371.png"
              alt="Dosha Quiz icon"
              style={styles.icon}
            />
            <h3>Dosha Quiz</h3>
            <p>Know your dosha type</p>

            <button
              onClick={() => navigate("/quiz")}
              onMouseEnter={() => setBtnHover(1)}
              onMouseLeave={() => setBtnHover(null)}
              style={{
                ...styles.btn,
                ...(btnHover === 1 ? styles.btnHover : {}),
              }}
            >
              Take the Quiz
            </button>
          </div>

          {/* CARD 2 */}
          <div
            style={{
              ...styles.card,
              ...(hovered === 2 ? styles.cardHover : {}),
            }}
            onMouseEnter={() => setHovered(2)}
            onMouseLeave={() => setHovered(null)}
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/2921/2921822.png"
              alt="Remedies Search icon"
              style={styles.icon}
            />
            <h3>Remedies Search</h3>
            <p>Natural remedies for health issues</p>

            <button
              onClick={() => navigate("/remedies")}
              onMouseEnter={() => setBtnHover(2)}
              onMouseLeave={() => setBtnHover(null)}
              style={{
                ...styles.btn,
                ...(btnHover === 2 ? styles.btnHover : {}),
              }}
            >
              Search Remedies
            </button>
          </div>

          {/* CARD 3 */}
          <div
            style={{
              ...styles.card,
              ...(hovered === 3 ? styles.cardHover : {}),
            }}
            onMouseEnter={() => setHovered(3)}
            onMouseLeave={() => setHovered(null)}
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/3043/3043882.png"
              alt="Yoga Poses icon"
              style={styles.icon}
            />
            <h3>Yoga Poses</h3>
            <p>Explore yoga for wellness</p>

            <button
              onClick={() => navigate("/yoga")}
              onMouseEnter={() => setBtnHover(3)}
              onMouseLeave={() => setBtnHover(null)}
              style={{
                ...styles.btn,
                ...(btnHover === 3 ? styles.btnHover : {}),
              }}
            >
              View Yoga
            </button>
          </div>

          {/* CARD 4 (FIXED) */}
          <div
            style={{
              ...styles.card,
              ...(hovered === 4 ? styles.cardHover : {}),
            }}
            onMouseEnter={() => setHovered(4)}
            onMouseLeave={() => setHovered(null)}
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/1046/1046857.png"
              alt="Diet Plans icon"
              style={styles.icon}
            />
            <h3>Diet Plans</h3>
            <p>Personalized diet suggestions</p>

            <button
              onClick={() => navigate("/diet")}
              onMouseEnter={() => setBtnHover(4)}
              onMouseLeave={() => setBtnHover(null)}
              style={{
                ...styles.btn,
                ...(btnHover === 4 ? styles.btnHover : {}),
              }}
            >
              Get Diet Plan
            </button>
          </div>

          {/* CARD 5 */}
          <div
            style={{
              ...styles.card,
              ...(hovered === 5 ? styles.cardHover : {}),
            }}
            onMouseEnter={() => setHovered(5)}
            onMouseLeave={() => setHovered(null)}
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/3774/3774299.png"
              alt="Doctor Appointment icon"
              style={styles.icon}
            />
            <h3>Doctor Appointment</h3>
            <p>Get directions to nearest Ayurvedic doctor</p>

            <button
              onClick={goToDoctor}
              onMouseEnter={() => setBtnHover(5)}
              onMouseLeave={() => setBtnHover(null)}
              style={{
                ...styles.btn,
                ...(btnHover === 5 ? styles.btnHover : {}),
              }}
            >
              Get Directions
            </button>
          </div>

          {/* CARD 6 */}
          <div
            style={{
              ...styles.card,
              ...(hovered === 6 ? styles.cardHover : {}),
            }}
            onMouseEnter={() => setHovered(6)}
            onMouseLeave={() => setHovered(null)}
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/1170/1170678.png"
              alt="Store icon"
              style={styles.icon}
            />
            <h3>Store</h3>
            <p>Get directions to nearest store</p>

            <button
              onClick={goToStore}
              onMouseEnter={() => setBtnHover(6)}
              onMouseLeave={() => setBtnHover(null)}
              style={{
                ...styles.btn,
                ...(btnHover === 6 ? styles.btnHover : {}),
              }}
            >
              Get Directions
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

/* ================= STYLES ================= */

const styles = {
  hero: {
    padding: "50px",
    textAlign: "center",
    backgroundImage:
      "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('/bg.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "100vh",
    color: "white",
  },

  heading: {
    fontSize: "30px",
    fontWeight: "bold",
  },

  sub: {
    marginBottom: "30px",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "25px",
    maxWidth: "1000px",
    margin: "30px auto",
  },

  card: {
    background: "rgba(255,255,255,0.95)",
    padding: "20px",
    borderRadius: "12px",
    color: "black",
    boxShadow: "0 6px 18px rgba(0,0,0,0.4)",
    transition: "all 0.3s ease",
  },

  cardHover: {
    transform: "translateY(-8px) scale(1.03)",
    boxShadow: "0 12px 25px rgba(0,0,0,0.6)",
  },

  icon: {
    width: "60px",
  },

  btn: {
    marginTop: "10px",
    padding: "8px 15px",
    border: "1px solid green",
    background: "white",
    color: "green",
    borderRadius: "6px",
    cursor: "pointer",
    transition: "all 0.3s",
  },

  btnHover: {
    background: "green",
    color: "white",
  },
};

export default Home;