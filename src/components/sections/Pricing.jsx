const Pricing = () => {
  const personalPlans = [
    {
      name: "Starter",
      price: "₱499",
      period: "/month",
      features: [
        "1 Camera",
        "Fall Detection",
        "Mobile Alerts",
        "Email Support",
      ],
      highlighted: false,
    },
    {
      name: "Standard",
      price: "₱999",
      period: "/month",
      features: [
        "Up to 3 Cameras",
        "Fall + Inactivity Detection",
        "Priority Alerts",
        "Phone Support",
      ],
      highlighted: true,
    },
    {
      name: "Advanced",
      price: "₱1,499",
      period: "/month",
      features: [
        "Up to 5 Cameras",
        "All Detection Features",
        "Hospital Integration",
        "24/7 Support",
      ],
      highlighted: false,
    },
  ];

  const b2bPlans = [
    {
      name: "Small Clinic",
      price: "₱4,999",
      period: "/month",
      features: [
        "Up to 10 Cameras",
        "Dashboard Access",
        "Staff Alerts",
        "Technical Support",
      ],
    },
    {
      name: "Medium Hospital",
      price: "₱14,999",
      period: "/month",
      features: [
        "Up to 50 Cameras",
        "Advanced Analytics",
        "API Integration",
        "Dedicated Account Manager",
      ],
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "/month",
      features: [
        "Unlimited Cameras",
        "Full Customization",
        "On-site Installation",
        "SLA Guarantee",
      ],
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
      marginBottom: "3rem",
    },
    sectionTitle: {
      fontSize: "1.5rem",
      fontWeight: "700",
      color: "#000",
      textAlign: "center",
      marginBottom: "2rem",
    },
    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
      gap: "2rem",
      marginBottom: "4rem",
    },
    card: {
      background: "white",
      padding: "2.5rem 2rem",
      borderRadius: "16px",
      border: "1px solid #e5e7eb",
      transition: "transform 0.3s, box-shadow 0.3s",
      position: "relative",
    },
    cardHighlighted: {
      background: "#2563eb",
      color: "white",
      transform: "scale(1.05)",
      boxShadow: "0 20px 50px rgba(37, 99, 235, 0.3)",
    },
    planName: {
      fontSize: "1.125rem",
      fontWeight: "600",
      marginBottom: "1rem",
    },
    priceContainer: {
      marginBottom: "2rem",
    },
    price: {
      fontSize: "2.5rem",
      fontWeight: "700",
      display: "inline",
    },
    period: {
      fontSize: "1rem",
      fontWeight: "400",
      opacity: 0.8,
    },
    featuresList: {
      listStyle: "none",
      padding: 0,
      margin: "0 0 2rem 0",
    },
    feature: {
      display: "flex",
      alignItems: "center",
      gap: "0.75rem",
      marginBottom: "1rem",
      fontSize: "0.95rem",
    },
    checkIcon: {
      width: "20px",
      height: "20px",
      flexShrink: 0,
    },
    button: {
      width: "100%",
      padding: "0.875rem 2rem",
      borderRadius: "8px",
      border: "2px solid #2563eb",
      background: "transparent",
      color: "#2563eb",
      fontSize: "1rem",
      fontWeight: "600",
      cursor: "pointer",
      transition: "all 0.3s",
    },
    buttonHighlighted: {
      background: "white",
      color: "#2563eb",
      border: "2px solid white",
    },
  };

  const CheckIcon = ({ isHighlighted }) => (
    <svg
      style={styles.checkIcon}
      viewBox="0 0 24 24"
      fill="none"
      stroke={isHighlighted ? "white" : "#2563eb"}
      strokeWidth="3"
    >
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
  );

  return (
    <section id="pricing" style={styles.section}>
      <div style={styles.container}>
        <div style={styles.header}>
          <p style={styles.label}>PRICING</p>
          <h2 style={styles.title}>Plans for Every Need</h2>
        </div>

        {/* Personal Plans */}
        <h3 style={styles.sectionTitle}>Personal Plans</h3>
        <div style={styles.grid}>
          {personalPlans.map((plan, index) => (
            <div
              key={index}
              style={{
                ...styles.card,
                ...(plan.highlighted ? styles.cardHighlighted : {}),
              }}
            >
              <h4
                style={{
                  ...styles.planName,
                  color: plan.highlighted ? "white" : "#000",
                }}
              >
                {plan.name}
              </h4>
              <div style={styles.priceContainer}>
                <span style={styles.price}>{plan.price}</span>
                <span style={styles.period}>{plan.period}</span>
              </div>
              <ul style={styles.featuresList}>
                {plan.features.map((feature, idx) => (
                  <li key={idx} style={styles.feature}>
                    <CheckIcon isHighlighted={plan.highlighted} />
                    <span
                      style={{ color: plan.highlighted ? "white" : "#4b5563" }}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
              <button
                style={{
                  ...styles.button,
                  ...(plan.highlighted ? styles.buttonHighlighted : {}),
                }}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>

        {/* B2B Plans */}
        <h3 style={styles.sectionTitle}>B2B Plans</h3>
        <div style={styles.grid}>
          {b2bPlans.map((plan, index) => (
            <div key={index} style={styles.card}>
              <h4 style={styles.planName}>{plan.name}</h4>
              <div style={styles.priceContainer}>
                <span style={styles.price}>{plan.price}</span>
                {plan.price !== "Custom" && (
                  <span style={styles.period}>{plan.period}</span>
                )}
              </div>
              <ul style={styles.featuresList}>
                {plan.features.map((feature, idx) => (
                  <li key={idx} style={styles.feature}>
                    <CheckIcon isHighlighted={false} />
                    <span style={{ color: "#4b5563" }}>{feature}</span>
                  </li>
                ))}
              </ul>
              <button style={styles.button}>Get Started</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
