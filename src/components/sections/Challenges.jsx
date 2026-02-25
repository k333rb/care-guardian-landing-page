const Challenges = () => {
  const challenges = [
    {
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
      ),
      title: "9.2 million senior citizens in the Philippines",
    },
    {
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
          <polyline points="9 22 9 12 15 12 15 22"></polyline>
        </svg>
      ),
      title: "Many left alone at home or in hospitals",
    },
    {
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <circle cx="12" cy="12" r="10"></circle>
          <polyline points="12 6 12 12 16 14"></polyline>
        </svg>
      ),
      title: "Limited real-time monitoring available",
    },
    {
      iconImage: "/src/assets/icons/warning-2.png",
      title: "Emergency response delays",
    },
    {
      iconImage: "/src/assets/icons/Broken_heart.png",
      title: "Family anxiety and staff burden",
    },
  ];

  const styles = {
    section: {
      padding: "5rem 1rem",
      background: "#f8f9fa",
    },
    container: {
      maxWidth: "1200px",
      margin: "0 auto",
    },
    header: {
      textAlign: "center",
      marginBottom: "4rem",
    },
    label: {
      color: "#2563eb",
      fontSize: "0.875rem",
      fontWeight: "600",
      letterSpacing: "0.1em",
      textTransform: "uppercase",
      marginBottom: "1rem",
    },
    title: {
      fontSize: "2rem",
      fontWeight: "700",
      color: "#000",
      lineHeight: "1.3",
      maxWidth: "800px",
      margin: "0 auto",
    },
    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
      gap: "1.5rem",
    },
    card: {
      background: "white",
      padding: "2.5rem 2rem",
      borderRadius: "12px",
      textAlign: "center",
      transition: "transform 0.3s, box-shadow 0.3s",
    },
    iconWrapper: {
      width: "80px",
      height: "80px",
      background: "#dbeafe",
      borderRadius: "50%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      margin: "0 auto 1.5rem",
      color: "#2563eb",
    },
    icon: {
      width: "36px",
      height: "36px",
    },
    iconImage: {
      width: "36px",
      height: "36px",
      objectFit: "contain",
    },
    text: {
      fontSize: "0.95rem",
      color: "#333",
      lineHeight: "1.5",
      fontWeight: "500",
    },
  };

  return (
    <section id="challenge" style={styles.section}>
      <div style={styles.container}>
        <div style={styles.header}>
          <p style={styles.label}>THE CHALLENGE</p>
          <h2 style={styles.title}>
            The Growing Challenge of Elderly Care in the Philippines
          </h2>
        </div>

        <div style={styles.grid}>
          {challenges.map((challenge, index) => (
            <div key={index} style={styles.card}>
              <div style={styles.iconWrapper}>
                {challenge.iconImage ? (
                  <img
                    src={challenge.iconImage}
                    alt={challenge.title}
                    style={styles.iconImage}
                  />
                ) : (
                  <div style={styles.icon}>{challenge.icon}</div>
                )}
              </div>
              <p style={styles.text}>{challenge.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Challenges;
