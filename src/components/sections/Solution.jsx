const Solution = () => {
  const features = [
    {
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path>
          <circle cx="12" cy="13" r="4"></circle>
        </svg>
      ),
      title: "AI-Powered Detection",
      description:
        "Advanced computer vision monitors movements with precision.",
    },
    {
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
        </svg>
      ),
      title: "Real-Time Fall Detection",
      description: "Instant detection of falls and abnormal movements.",
    },
    {
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
          <circle cx="12" cy="12" r="3"></circle>
        </svg>
      ),
      title: "Inactivity Monitoring",
      description: "Alerts when unusual inactivity is detected.",
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
      title: "24/7 Monitoring",
      description: "Round-the-clock protection, day and night.",
    },
    {
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
          <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
        </svg>
      ),
      title: "Mobile App Notifications",
      description: "Instant push alerts to caregivers and family.",
    },
    {
      iconImage: "/icons/hospital.png",
      title: "Hospital Integration",
      description: "Connect with emergency contacts and hospitals.",
    },
  ];

  const styles = {
    section: {
      padding: "5rem 1rem",
      background: "#e8f0fe",
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
      fontSize: "2.5rem",
      fontWeight: "700",
      color: "#000",
      lineHeight: "1.3",
      maxWidth: "900px",
      margin: "0 auto",
    },
    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
      gap: "1.5rem",
      maxWidth: "1100px",
      margin: "0 auto",
    },
    card: {
      background: "white",
      padding: "2.5rem 2rem",
      borderRadius: "16px",
      border: "1px solid #e5e7eb",
      transition: "transform 0.3s, box-shadow 0.3s",
      textAlign: "left",
    },
    iconWrapper: {
      width: "56px",
      height: "56px",
      background: "#dbeafe",
      borderRadius: "12px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginBottom: "1.5rem",
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
    featureTitle: {
      fontSize: "1.125rem",
      fontWeight: "600",
      color: "#000",
      marginBottom: "0.75rem",
    },
    description: {
      fontSize: "0.9rem",
      color: "#6b7280",
      lineHeight: "1.6",
    },
  };

  return (
    <section id="solution" style={styles.section}>
      <div style={styles.container}>
        <div style={styles.header}>
          <p style={styles.label}>OUR SOLUTION</p>
          <h2 style={styles.title}>
            Smart Monitoring. Instant Alerts. Real Protection.
          </h2>
        </div>

        <div style={styles.grid}>
          {features.map((feature, index) => (
            <div key={index} style={styles.card}>
              <div style={styles.iconWrapper}>
                {feature.iconImage ? (
                  <img
                    src={feature.iconImage}
                    alt={feature.title}
                    style={styles.iconImage}
                  />
                ) : (
                  <div style={styles.icon}>{feature.icon}</div>
                )}
              </div>
              <h3 style={styles.featureTitle}>{feature.title}</h3>
              <p style={styles.description}>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solution;
