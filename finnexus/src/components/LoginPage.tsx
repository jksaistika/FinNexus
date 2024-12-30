import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
  const navigate = useNavigate();

  // State to store user input
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false); // State for toggling password visibility
  const [error, setError] = useState('');

  // Predefined username and password
  const predefinedUsername = 'SAISTIKA';
  const predefinedPassword = '#SAISTIKA';

  const handleLogin = () => {
    // Check if username and password match
    if (username === predefinedUsername && password === predefinedPassword) {
      setError(''); // Clear error
      navigate('/home'); // Navigate to home page
    } else {
      setError('Invalid username or password'); // Show error message
    }
  };

  // Define the input style object with no border
  const inputStyle = {
    marginBottom: '20px',
    padding: '10px',
    fontSize: '16px',
    border: 'none', // Remove the border completely
    width: '100%',
    maxWidth: '300px',
    boxSizing: 'border-box' as const,
    backgroundColor: '#ffffff',
    color: '#001f3f',
    position: 'relative' as const,
  };

  // Define the container style object with no border and positioned at the top-right corner, with glowing border
  const containerStyle = {
    width: '100%',
    maxWidth: '400px',
    padding: '30px',
    border: 'none',
    borderRadius: '15px', // Optional: round the corners
    backgroundColor: '#001f3f',
    textAlign: 'center' as const,
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center' as const, // Center align username and password
    position: 'absolute' as const, // Set absolute position
    top: '20px', // Adjust the top margin (distance from top)
    right: '20px', // Adjust the right margin (distance from the right)
    boxShadow: '0 0 15px 5px rgba(173, 216, 230, 0.8)', // Glowing light blue border effect
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        background: `url('fin_image1.png') no-repeat center center/cover`, // Ensure this is correct
        fontFamily: 'Arial, sans-serif',
        position: 'relative',
      }}
    >
      {/* Optional overlay to improve text visibility */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent overlay for visibility
          zIndex: -1,
        }}
      ></div>

      <div style={containerStyle}>
        <h1 style={{ color: '#FFD700', marginBottom: '20px' }}>FINNEXUS</h1>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={inputStyle} // Applying the inputStyle here
        />
        <div
          style={{
            position: 'relative',
            marginBottom: '20px',
            width: '100%',
            maxWidth: '300px',
          }}
        >
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{
              ...inputStyle,
              paddingRight: '60px', // Add padding for the button inside
            }}
          />
          <button
            onClick={() => setShowPassword(!showPassword)}
            style={{
              position: 'absolute',
              right: '10px',
              top: '50%',
              transform: 'translateY(-50%)', // Vertically center the button
              background: 'none',
              border: 'none',
              color: '#FFD700',
              cursor: 'pointer',
              fontSize: '14px',
              fontWeight: 'bold',
            }}
          >
            {showPassword ? 'Hide' : 'Show'}
          </button>
        </div>
        {error && (
          <div
            style={{
              color: 'red',
              marginBottom: '20px',
            }}
          >
            {error}
          </div>
        )}
        <button
          onClick={handleLogin}
          style={{
            padding: '10px 20px',
            backgroundColor: '#FFD700',
            color: '#001f3f',
            border: 'none',
            borderRadius: '5px',
            fontSize: '16px',
            cursor: 'pointer',
          }}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
