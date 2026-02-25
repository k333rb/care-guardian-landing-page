const Contacts = () => {
  const styles = {
    section: {
      padding: "5rem 1rem",
      background: "linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)",
      color: "white",
    },
    container: {
      maxWidth: "1000px",
      margin: "0 auto",
      textAlign: "center",
    },
    title: {
      fontSize: "2.5rem",
      fontWeight: "700",
      marginBottom: "1.5rem",
      lineHeight: "1.3",
    },
    subtitle: {
      fontSize: "1.125rem",
      marginBottom: "3rem",
      opacity: 0.95,
    },
    buttonGroup: {
      display: "flex",
      flexWrap: "wrap",
      gap: "1rem",
      justifyContent: "center",
    },
    buttonPrimary: {
      padding: "1rem 2.5rem",
      background: "white",
      color: "#2563eb",
      border: "none",
      borderRadius: "8px",
      fontSize: "1rem",
      fontWeight: "600",
      cursor: "pointer",
      transition: "transform 0.3s, box-shadow 0.3s",
    },
    buttonSecondary: {
      padding: "1rem 2.5rem",
      background: "transparent",
      color: "white",
      border: "2px solid white",
      borderRadius: "8px",
      fontSize: "1rem",
      fontWeight: "600",
      cursor: "pointer",
      transition: "all 0.3s",
    },
  };

  return (
    <section id="cta" style={styles.section}>
      <div style={styles.container}>
        <h2 style={styles.title}>Protect Your Loved Ones Today.</h2>
        <p style={styles.subtitle}>
          Join the growing number of Filipino families choosing smarter elderly
          care.
        </p>
        <div style={styles.buttonGroup}>
          <button style={styles.buttonPrimary}>Request A Demo</button>
          <button style={styles.buttonSecondary}>Partner With Us</button>
          <button style={styles.buttonSecondary}>Contact Sales</button>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
