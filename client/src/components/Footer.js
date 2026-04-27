function Footer() {
  return (
    <footer style={styles.footer}>

      <div style={styles.container}>

        {/* BRAND */}
        <div style={styles.section}>
          <h2 style={styles.logo}>🌿 Ayurvedic Wellness</h2>
          <p style={styles.text}>
            Experience natural healing with personalized dosha insights,
            yoga guidance, and Ayurvedic remedies.
          </p>
        </div>

        {/* LINKS */}
        <div style={styles.section}>
          <h3>Quick Links</h3>
          <ul style={styles.list}>
            <li>Home</li>
            <li>Quiz</li>
            <li>Remedies</li>
            <li>Yoga</li>
          </ul>
        </div>

        {/* CONTACT */}
        <div style={styles.section}>
          <h3>Contact</h3>
          <p>👤 Yogi Kuna</p>
          <p>📞 8639272326</p>
          <p>📧 yraokuna@gmail.com</p>

          {/* SOCIAL ICONS */}
          <div style={styles.icons}>
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-linkedin"></i></a>
          </div>
        </div>

      </div>

      {/* BOTTOM */}
      <div style={styles.bottom}>
        © 2026 Ayurvedic Wellness • Built with ❤️
      </div>

    </footer>
  );
}

/* ================= STYLES ================= */

const styles = {
  footer: {
    marginTop: "60px",
    padding: "40px 20px",
    color: "white",

    /* GLASS EFFECT */
    background: "rgba(27, 94, 32, 0.85)",
    backdropFilter: "blur(10px)",

    borderTop: "1px solid rgba(255,255,255,0.2)"
  },

  container: {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    maxWidth: "1100px",
    margin: "auto",
    gap: "20px"
  },

  section: {
    flex: "1",
    minWidth: "250px"
  },

  logo: {
    marginBottom: "10px"
  },

  text: {
    opacity: 0.9,
    lineHeight: "1.6"
  },

  list: {
    listStyle: "none",
    padding: 0,
    lineHeight: "2",
    cursor: "pointer"
  },

  icons: {
    marginTop: "10px",
    display: "flex",
    gap: "15px",
    fontSize: "20px"
  },

  bottom: {
    textAlign: "center",
    marginTop: "20px",
    paddingTop: "10px",
    borderTop: "1px solid rgba(255,255,255,0.2)",
    fontSize: "14px",
    opacity: 0.8
  }
};

export default Footer;