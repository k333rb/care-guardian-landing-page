const Edge = () => {
  const advantages = [
    {
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
          <circle cx="12" cy="10" r="3"></circle>
        </svg>
      ),
      title: "Localized for the Philippines",
    },
    {
      iconImage: "/icons/watch.png",
      title: "Wearable-Free Monitoring",
    },
    {
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect>
          <rect x="9" y="9" width="6" height="6"></rect>
          <line x1="9" y1="1" x2="9" y2="4"></line>
          <line x1="15" y1="1" x2="15" y2="4"></line>
          <line x1="9" y1="20" x2="9" y2="23"></line>
          <line x1="15" y1="20" x2="15" y2="23"></line>
          <line x1="20" y1="9" x2="23" y2="9"></line>
          <line x1="20" y1="14" x2="23" y2="14"></line>
          <line x1="1" y1="9" x2="4" y2="9"></line>
          <line x1="1" y1="14" x2="4" y2="14"></line>
        </svg>
      ),
      title: "AI-Powered Detection",
    },
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
      title: "Community-Based Alert Integration",
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
          <path d="M12 6v6l4 2"></path>
        </svg>
      ),
      title: "Affordable Subscription Model",
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
      title: "Designed for Hospitals & Homes",
    },
  ];

  const styles = {
    section: {
      padding: "5rem 1rem",
      background: "white",
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
      marginBottom: "0.5rem",
    },
    title: {
      fontSize: "2.5rem",
      fontWeight: "700",
      color: "#000",
      lineHeight: "1.3",
    },
    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
      gap: "1.5rem",
    },
    card: {
      background: "#f8f9fa",
      padding: "1.75rem 2rem",
      borderRadius: "16px",
      border: "1px solid #e5e7eb",
      display: "flex",
      alignItems: "center",
      gap: "1.25rem",
      transition: "transform 0.3s, box-shadow 0.3s",
    },
    iconWrapper: {
      width: "56px",
      height: "56px",
      background: "#dbeafe",
      borderRadius: "12px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0,
      color: "#2563eb",
    },
    icon: {
      width: "28px",
      height: "28px",
    },
    iconImage: {
      width: "28px",
      height: "28px",
      objectFit: "contain",
    },
    cardTitle: {
      fontSize: "1rem",
      fontWeight: "600",
      color: "#000",
      lineHeight: "1.4",
    },
  };

  return (
    <section id="edge" style={styles.section}>
      <div style={styles.container}>
        <div style={styles.header}>
          <p style={styles.label}>OUR EDGE</p>
          <h2 style={styles.title}>Why Care Guardian?</h2>
        </div>

        <div style={styles.grid}>
          {advantages.map((advantage, index) => (
            <div key={index} style={styles.card}>
              <div style={styles.iconWrapper}>
                {advantage.iconImage ? (
                  <img
                    src={advantage.iconImage}
                    alt={advantage.title}
                    style={styles.iconImage}
                  />
                ) : (
                  <div style={styles.icon}>{advantage.icon}</div>
                )}
              </div>
              <h3 style={styles.cardTitle}>{advantage.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Edge;
