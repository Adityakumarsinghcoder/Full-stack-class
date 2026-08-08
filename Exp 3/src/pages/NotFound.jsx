import React from "react";
import { useNavigate } from "react-router";

function NotFound() {
  const navigate = useNavigate();

  const styles = {
    page: {
      minHeight: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: "linear-gradient(135deg, #eef2ff, #f8fafc, #ede9fe)",
      fontFamily: "Arial, sans-serif",
      textAlign: "center",
      padding: "20px",
    },

    container: {
      backgroundColor: "#ffffff",
      padding: "50px 40px",
      borderRadius: "20px",
      boxShadow: "0 15px 40px rgba(0, 0, 0, 0.12)",
      maxWidth: "500px",
      width: "100%",
    },

    errorCode: {
      fontSize: "100px",
      fontWeight: "bold",
      color: "#4f46e5",
      margin: "0",
      lineHeight: "1",
    },

    title: {
      fontSize: "30px",
      color: "#1e293b",
      marginTop: "20px",
      marginBottom: "10px",
    },

    message: {
      fontSize: "16px",
      color: "#64748b",
      lineHeight: "1.6",
      marginBottom: "30px",
    },

    button: {
      backgroundColor: "#4f46e5",
      color: "#ffffff",
      border: "none",
      padding: "13px 25px",
      fontSize: "16px",
      fontWeight: "600",
      borderRadius: "8px",
      cursor: "pointer",
    },

    icon: {
      fontSize: "55px",
      marginBottom: "15px",
    },
  };

  const goHome = () => {
    navigate("/");
  };

  return (
    <div style={styles.page}>
      <div style={styles.container}>

        <div style={styles.icon}>🔍</div>

        <h1 style={styles.errorCode}>404</h1>

        <h2 style={styles.title}>Page Not Found</h2>

        <p style={styles.message}>
          Sorry, the page you are looking for does not exist
          or may have been moved.
        </p>

        <button
          style={styles.button}
          onClick={goHome}
        >
          Go Back Home
        </button>

      </div>
    </div>
  );
}

export default NotFound;