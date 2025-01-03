import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
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
      {/* Company Logo */}
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img
          src="/logo.jpg" // Replace with your logo file path or URL
          alt="Finnexus Logo"
          style={{ height: '50px', marginRight: '15px' }}
        />
        <div style={{ fontSize: '30px', fontWeight: 'bold' }}>FINNEXUS</div>
      </div>

      {/* Navigation Links */}
      <nav style={{ display: 'flex', alignItems: 'center' }}>
        <Link to="/" style={{ color: '#fff', margin: '0 20px', fontSize: '18px', textDecoration: 'none' }}>Home</Link>
        <Link to="/about" style={{ color: '#fff', margin: '0 20px', fontSize: '18px', textDecoration: 'none' }}>About</Link>
        <Link to="/chatbot" style={{ color: '#fff', margin: '0 20px', fontSize: '18px', textDecoration: 'none' }}>Chatbot</Link>
        <Link to="/translator" style={{ color: '#fff', margin: '0 20px', fontSize: '18px', textDecoration: 'none' }}>Translator</Link>

        {/* Login and Sign Up Buttons */}
        <Link to="/login" style={{
          color: '#fff',
          margin: '0 10px',
          padding: '10px 20px',
          backgroundColor: '#28a745',
          borderRadius: '5px',
          textDecoration: 'none',
          fontSize: '16px',
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
        }}>
          Sign Up
        </Link>
      </nav>
    </header>
  );
};

export default Header;
