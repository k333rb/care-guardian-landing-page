const Setup = () => {
  const steps = [
    {
      number: "01",
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
      title: "Install Camera & Hub",
      description: "Set up the Care Guardian camera in minutes.",
    },
    {
      number: "02",
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
      title: "AI Monitors 24/7",
      description: "Our AI continuously tracks movements and patterns.",
    },
    {
      number: "03",
      iconImage: "/icons/warning-2-white.png",
      title: "Detects Falls",
      description: "Instantly recognizes falls or unusual activity.",
    },
    {
      number: "04",
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
      title: "Sends Instant Alerts",
      description: "Caregivers receive real-time mobile notifications.",
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
    iconCircle: {
      width: "80px",
      height: "80px",
      background: "#2563eb",
      borderRadius: "50%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "white",
      flexShrink: 0,
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
    stepNumber: {
      fontSize: "0.875rem",
      color: "#2563eb",
      fontWeight: "600",
      marginBottom: "0.5rem",
    },
    stepTitle: {
      fontSize: "1.25rem",
      fontWeight: "700",
      color: "#000",
      marginBottom: "0.5rem",
    },
    stepDescription: {
      fontSize: "0.95rem",
      color: "#6b7280",
      lineHeight: "1.5",
    },
    connector: {
      width: "60px",
      height: "2px",
      background: "#e5e7eb",
      flexShrink: 0,
    },
  };

  return (
    <section id="how-it-works" style={styles.section}>
      <div style={styles.container}>
        <div style={styles.header}>
          <p style={styles.label}>SIMPLE SETUP</p>
          <h2 style={styles.title}>How It Works</h2>
        </div>

        {/* Mobile/Tablet: Vertical layout */}
        <div style={{ display: "block" }} className="mobile-steps">
          {steps.map((step, index) => (
            <div
              key={index}
              style={{ textAlign: "center", marginBottom: "3rem" }}
            >
              <div style={styles.iconCircle}>
                {step.iconImage ? (
                  <img
                    src={step.iconImage}
                    alt={step.title}
                    style={styles.iconImage}
                  />
                ) : (
                  <div style={styles.icon}>{step.icon}</div>
                )}
              </div>
              <div style={{ marginTop: "1.5rem" }}>
                <p style={styles.stepNumber}>{step.number}</p>
                <h3 style={styles.stepTitle}>{step.title}</h3>
                <p style={styles.stepDescription}>{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop: Horizontal layout with connectors */}
        <div style={{ display: "none" }} className="desktop-steps">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "0",
            }}
          >
            {steps.map((step, index) => (
              <div
                key={index}
                style={{ display: "flex", alignItems: "center" }}
              >
                <div style={{ textAlign: "center", width: "200px" }}>
                  <div style={{ ...styles.iconCircle, margin: "0 auto" }}>
                    {step.iconImage ? (
                      <img
                        src={step.iconImage}
                        alt={step.title}
                        style={styles.iconImage}
                      />
                    ) : (
                      <div style={styles.icon}>{step.icon}</div>
                    )}
                  </div>
                  <div style={{ marginTop: "1.5rem" }}>
                    <p style={styles.stepNumber}>{step.number}</p>
                    <h3 style={{ ...styles.stepTitle, fontSize: "1.125rem" }}>
                      {step.title}
                    </h3>
                    <p
                      style={{
                        ...styles.stepDescription,
                        fontSize: "0.875rem",
                      }}
                    >
                      {step.description}
                    </p>
                  </div>
                </div>
                {index < steps.length - 1 && (
                  <div style={styles.connector}></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .mobile-steps {
            display: none !important;
          }
          .desktop-steps {
            display: block !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Setup;
