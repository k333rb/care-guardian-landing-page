const EndUser = () => {
  const users = [
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
      title: "Families with Elderly Parents",
      description:
        "Stay connected and informed about your loved one's safety, even from afar. Get peace of mind with real-time alerts.",
    },
    {
      iconImage: "/src/assets/icons/hospital.png",
      title: "Hospitals & Clinics",
      description:
        "Reduce patient fall incidents and staff burden with automated 24/7 monitoring in wards and recovery rooms.",
    },
    {
      iconImage: "/src/assets/icons/bank.png",
      title: "LGUs & Community Health",
      description:
        "Empower local health programs with scalable monitoring solutions for senior citizens in barangay centers.",
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
      gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
      gap: "2rem",
    },
    card: {
      background: "white",
      padding: "3rem 2.5rem",
      borderRadius: "20px",
      border: "1px solid #e5e7eb",
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
      margin: "0 auto 2rem",
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
    cardTitle: {
      fontSize: "1.25rem",
      fontWeight: "700",
      color: "#000",
      marginBottom: "1rem",
      lineHeight: "1.4",
    },
    description: {
      fontSize: "0.95rem",
      color: "#4b5563",
      lineHeight: "1.7",
    },
  };

  return (
    <section id="end-user" style={styles.section}>
      <div style={styles.container}>
        <div style={styles.header}>
          <p style={styles.label}>WHO WE SERVE</p>
          <h2 style={styles.title}>Built for Those Who Care</h2>
        </div>

        <div style={styles.grid}>
          {users.map((user, index) => (
            <div key={index} style={styles.card}>
              <div style={styles.iconWrapper}>
                {user.iconImage ? (
                  <img
                    src={user.iconImage}
                    alt={user.title}
                    style={styles.iconImage}
                  />
                ) : (
                  <div style={styles.icon}>{user.icon}</div>
                )}
              </div>
              <h3 style={styles.cardTitle}>{user.title}</h3>
              <p style={styles.description}>{user.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EndUser;
