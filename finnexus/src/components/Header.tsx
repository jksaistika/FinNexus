import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  // Assuming the username is stored in a variable for now
  const username = "John Doe"; // You can replace this with dynamic data if the user is logged in.

  return (
    <header
      style={{
        width: '100%',
        position: 'fixed',
        top: 0,
        left: 0,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px 30px',
        backgroundColor: '#001f3f',
        color: '#fff',
        zIndex: 1000,
      } as React.CSSProperties}
    >
      {/* Left Section: Logo and Username */}
      <div style={{ display: 'flex', alignItems: 'center', marginRight: '20px' }}>
        <img
          src="/logo.jpg" // Replace with your logo file path or URL
          alt="FINNEXUS Logo"
          style={{
            height: '50px',
            width: '50px',
            borderRadius: '50%', // Make the logo circular
            marginRight: '10px', // Space between logo and "FINNEXUS"
          }}
        />
        <div style={{
          fontSize: '30px', 
          fontWeight: 'bold', 
          color: '#fff', 
          marginLeft: '10px', // Space between logo and username
        }}>
          FINNEXUS
        </div>
        <div style={{
          fontSize: '18px',
          color: '#fff',
          marginLeft: '20px', // Space between FINNEXUS and username
        }}>
      
        </div>
      </div>

      {/* Right Section: Navigation Links and Login/Signup Buttons */}
      <nav style={{ display: 'flex', alignItems: 'center' }}>
        <Link to="/" style={{ color: '#fff', margin: '0 10px', fontSize: '18px', textDecoration: 'none',marginRight:'90px', }}>Home</Link>
        <Link to="/about" style={{ color: '#fff', margin: '0 10px', fontSize: '18px', textDecoration: 'none', marginRight:'90px', }}>About</Link>
        <Link to="/chatbot" style={{ color: '#fff', margin: '0 10px', fontSize: '18px', textDecoration: 'none', marginRight:'90px', }}>Chatbot</Link>
        <Link to="/translator" style={{ color: '#fff', margin: '0 10px', fontSize: '18px', textDecoration: 'none',marginRight:'90px', }}>Translator</Link>

        {/* Login and Sign Up Buttons */}
        <Link to="/login" style={{
          color: '#fff',
          margin: '0 10px',
          padding: '10px 20px',
          backgroundColor: '#28a745',
          borderRadius: '5px',
          textDecoration: 'none',
          fontSize: '16px',
          marginRight:'0px',
        }}>
          Login
        </Link>
        <Link to="/signup" style={{
          color: '#fff',
          margin: '0 10px',
          padding: '10px 20px',
          backgroundColor: '#28a745',
          borderRadius: '5px',
          textDecoration: 'none',
          fontSize: '16px',
          marginRight:'0px',
        }}>
          Sign Up
        </Link>
      </nav>
    </header>
  );
};

export default Header;
