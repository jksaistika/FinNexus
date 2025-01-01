import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import React Router's useNavigate

const SignUpPage: React.FC = () => {
  const [passwordVisible, setPasswordVisible] = useState(false); // State to toggle password visibility
  const [email, setEmail] = useState(""); // Default email empty
  const [password, setPassword] = useState(""); // Default password empty
  const [confirmPassword, setConfirmPassword] = useState(""); // For confirming password
  const navigate = useNavigate(); // Initialize the navigate function

  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault(); // Prevent page reload
    // Add your sign-up logic here (e.g., API call)
    if (password === confirmPassword) {
      navigate("/home"); // Navigate to Home page upon successful signup
    } else {
      alert("Passwords do not match!");
    }
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

        {/* Right Half - SignUp Form */}
        <div style={styles.rightHalf}>
          <div style={styles.signUpForm}>
            <h2 style={styles.title}>Sign Up</h2>
            <form onSubmit={handleSignUp}>
              <div style={styles.formGroup}>
                <label style={styles.specialLabel}>Email</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)} // Update email state
                  style={styles.input}
                />
              </div>

              <div style={styles.formGroup}>
                <label style={styles.specialLabel}>Password</label>
                <div style={styles.passwordContainer}>
                  <input
                    type={passwordVisible ? "text" : "password"} // Toggle password visibility
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} // Update password state
                    style={styles.input}
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

              <div style={styles.formGroup}>
                <label style={styles.specialLabel}>Confirm Password</label>
                <div style={styles.passwordContainer}>
                  <input
                    type={passwordVisible ? "text" : "password"} // Toggle confirm password visibility
                    placeholder="Confirm your password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)} // Update confirmPassword state
                    style={styles.input}
                  />
                </div>
              </div>

              <button type="submit" style={styles.signUpBtn}>
                Sign Up
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
    backgroundColor: "#ffffff",
  },
  innerContainer: {
    width: "80%",
    maxWidth: "900px",
    height: "400px", 
    display: "flex",
    borderRadius: "10px",
    border: "4px solid black", 
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
    backgroundColor: "#333333", 
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  signUpForm: {
    width: "80%",
    maxWidth: "350px",
    padding: "2rem",
    borderRadius: "8px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
  },
  title: {
    marginBottom: "1.5rem",
    fontSize: "1.8rem",
    color: "#ffffff", 
    textAlign: "center",
  },
  formGroup: {
    marginBottom: "1.5rem",
    width: "100%",
  },
  specialLabel: {
    display: "block",
    marginBottom: "0.5rem",
    fontSize: "1.2rem", 
    fontWeight: "bold", 
    color: "#ffffff", 
    textTransform: "uppercase", 
    letterSpacing: "0.5px", 
  },
  input: {
    width: "100%",
    padding: "0.8rem",
    fontSize: "1rem",
    border: "1px solid #ccc",
    borderRadius: "4px",
    backgroundColor: "#f9f9f9",
    color: "#333333", 
  },
  passwordContainer: {
    position: "relative",
    width: "100%", 
  },
  showBtn: {
    position: "absolute",
    right: "-5px", 
    background: "none",
    border: "none",
    color: "#007bff", 
    cursor: "pointer",
    fontSize: "1rem",
    top: "50%",
    transform: "translateY(-50%)", 
  },
  signUpBtn: {
    width: "50%",
    padding: "0.88rem",
    fontSize: "1rem",
    backgroundColor: "#007bff", 
    color: "#fff",
    border: "none",
    borderRadius: "45px",
    cursor: "pointer",
  },
};

export default SignUpPage;
