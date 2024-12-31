import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import React Router's useNavigate

const LoginPage: React.FC = () => {
  const [passwordVisible, setPasswordVisible] = useState(false); // State to toggle password visibility
  const [email, setEmail] = useState("saistikajk@gmail.com"); // Default email
  const [password, setPassword] = useState("saistika"); // Default password
  const navigate = useNavigate(); // Initialize the navigate function

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault(); // Prevent page reload
    navigate("/home"); // Navigate to the Home page
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible((prev) => !prev); // Toggle the password visibility
  };

  return (
    <div style={styles.outerContainer}>
      <div style={styles.innerContainer}>
        {/* Left Half - Background Image */}
        <div
          style={{
            ...styles.leftHalf,
            backgroundImage: `url('/img1.jpeg')`,
            backgroundPosition: "center 10%", // Slightly right
          }}
        ></div>

        {/* Right Half - Login Form */}
        <div style={styles.rightHalf}>
          <div style={styles.loginForm}>
            <h2 style={styles.title}>Login</h2>
            <form onSubmit={handleLogin}>
              <div style={styles.formGroup}>
                <label style={styles.specialLabel}>Email</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email} // Use the email state for the input value
                  onChange={(e) => setEmail(e.target.value)} // Update the email state on change
                  style={styles.input}
                />
              </div>
              <div style={styles.formGroup}>
                <label style={styles.specialLabel}>Password</label>
                <div style={styles.passwordContainer}>
                  <input
                    type={passwordVisible ? "text" : "password"} // Toggle password visibility
                    placeholder="Enter your password"
                    value={password} // Use the password state for the input value
                    onChange={(e) => setPassword(e.target.value)} // Update the password state on change
                    style={styles.input} // Same style as the email input
                  />
                  <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    style={styles.showBtn}
                  >
                    {passwordVisible ? "Hide" : "Show"}
                  </button>
                </div>
              </div>
              <button type="submit" style={styles.loginBtn}>
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  outerContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#ffffff", // White background for the outer container
  },
  innerContainer: {
    width: "80%",
    maxWidth: "900px",
    height: "400px", // Adjusted height
    display: "flex",
    borderRadius: "10px",
    border: "4px solid black", // Black border for the whole container
    overflow: "hidden",
    backgroundClip: "padding-box",
  },
  leftHalf: {
    flex: 1,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  },
  rightHalf: {
    flex: 1,
    backgroundColor: "#333333", // Dark background for contrast
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  loginForm: {
    width: "80%",
    maxWidth: "350px", // Adjust the width of the form
    padding: "2rem",
    borderRadius: "8px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)", // Optional: subtle shadow for the form
  },
  title: {
    marginBottom: "1.5rem",
    fontSize: "1.8rem",
    color: "#ffffff", // White color for the title
    textAlign: "center",
  },
  formGroup: {
    marginBottom: "1.5rem",
    width: "100%",
  },
  specialLabel: {
    display: "block",
    marginBottom: "0.5rem",
    fontSize: "1.2rem", // Larger font size
    fontWeight: "bold", // Bold text
    color: "#ffffff", // White color for labels
    textTransform: "uppercase", // Make the label uppercase
    letterSpacing: "0.5px", // Add slight spacing for a polished look
  },
  input: {
    width: "100%", // Ensure both input fields have the same width
    padding: "0.8rem",
    fontSize: "1rem",
    border: "1px solid #ccc",
    borderRadius: "4px",
    backgroundColor: "#f9f9f9",
    color: "#333333", // Dark text inside input
  },
  passwordContainer: {
    position: "relative",
    width: "100%", // Ensure the container spans the full width of the input
  },
  showBtn: {
    position: "absolute",
    right: "10px", // Position the button inside the input field
    background: "none",
    border: "none",
    color: "#007bff", // Blue color for the button
    cursor: "pointer",
    fontSize: "1rem",
    top: "50%",
    transform: "translateY(-50%)", // Vertically center the button
  },
  loginBtn: {
    width: "100%",
    padding: "0.8rem",
    fontSize: "1rem",
    backgroundColor: "#007bff", // Blue button for contrast
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
};

export default LoginPage;
