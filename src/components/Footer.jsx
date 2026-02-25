const Footer = () => {
  const styles = {
    footer: {
      padding: "3rem 1rem",
      background: "#1f2937",
      color: "white",
    },
    container: {
      maxWidth: "1200px",
      margin: "0 auto",
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-between",
      alignItems: "center",
      gap: "2rem",
    },
    logo: {
      display: "flex",
      alignItems: "center",
      gap: "0.75rem",
    },
    logoImage: {
      height: "40px",
      width: "auto",
    },
    links: {
      display: "flex",
      gap: "2rem",
      flexWrap: "wrap",
    },
    link: {
      color: "white",
      textDecoration: "none",
      fontSize: "0.95rem",
      transition: "opacity 0.3s",
    },
    copyright: {
      fontSize: "0.875rem",
      opacity: 0.7,
    },
  };

  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <div style={styles.logo}>
          <img
            src="/src/assets/images/careguardianlogo.png"
            alt="Care Guardian Logo"
            style={styles.logoImage}
          />
        </div>

        <div style={styles.links}>
          <a href="#privacy" style={styles.link}>
            Privacy Policy
          </a>
          <a href="#terms" style={styles.link}>
            Terms of Service
          </a>
          <a href="#contact" style={styles.link}>
            Contact
          </a>
        </div>

        <div style={styles.copyright}>
          © 2026 Care Guardian. All Rights Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
