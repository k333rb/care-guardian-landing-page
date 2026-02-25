const Mission = () => {
  const values = [
    {
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <circle cx="12" cy="12" r="10"></circle>
          <path d="M2 12h20"></path>
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
        </svg>
      ),
      title: "UN SDG Alignment",
      description: "Supporting Good Health & Well-Being (SDG 3).",
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
      title: "Community Healthcare",
      description: "Strengthening local health support systems.",
    },
    {
      iconImage: "/src/assets/icons/hospital.png",
      title: "Reducing Hospital Burden",
      description: "Automated monitoring frees healthcare staff.",
    },
    {
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
        </svg>
      ),
      title: "Empowering Families",
      description: "Giving Filipino families peace of mind.",
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
      maxWidth: "900px",
      margin: "0 auto",
    },
    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
      gap: "3rem",
    },
    value: {
      textAlign: "center",
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
    valueTitle: {
      fontSize: "1.125rem",
      fontWeight: "700",
      color: "#000",
      marginBottom: "0.5rem",
    },
    valueDescription: {
      fontSize: "0.95rem",
      color: "#6b7280",
      lineHeight: "1.6",
    },
  };

  return (
    <section id="mission" style={styles.section}>
      <div style={styles.container}>
        <div style={styles.header}>
          <p style={styles.label}>OUR MISSION</p>
          <h2 style={styles.title}>
            Dignity, Safety, and Independence for Every Senior.
          </h2>
        </div>

        <div style={styles.grid}>
          {values.map((value, index) => (
            <div key={index} style={styles.value}>
              <div style={styles.iconWrapper}>
                {value.iconImage ? (
                  <img
                    src={value.iconImage}
                    alt={value.title}
                    style={styles.iconImage}
                  />
                ) : (
                  <div style={styles.icon}>{value.icon}</div>
                )}
              </div>
              <h3 style={styles.valueTitle}>{value.title}</h3>
              <p style={styles.valueDescription}>{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Mission;
