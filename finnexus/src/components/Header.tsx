import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        padding: '20px',
        backgroundColor: '#001f3f',
        color: '#fff',
      } as React.CSSProperties}
    >
      <div style={{ fontSize: '40px', fontWeight: 'bold' }}>FINNEXUS</div>
      <nav style={{ display: 'flex', alignItems: 'center' }}>
        <Link to="/" style={{ color: '#fff', margin: '0 20px', fontSize: '22px' }}>Home</Link>
        <Link to="/about" style={{ color: '#fff', margin: '0 20px', fontSize: '22px' }}>About</Link>
        <Link to="/chatbot" style={{ color: '#fff', margin: '0 20px', fontSize: '22px' }}>Chatbot</Link>
        <Link to="/translator" style={{ color: '#fff', margin: '0 20px', fontSize: '22px' }}>Translator</Link>

        {/* Login and Sign Up Buttons */}
        <Link to="/login" style={{
          color: '#fff', 
          margin: '0 20px', 
          padding: '10px 20px', 
          backgroundColor: '#28a745', 
          borderRadius: '5px', 
          textDecoration: 'none', 
          fontSize: '18px'
        }}>
          Login
        </Link>
        <Link to="/signup" style={{
          color: '#fff', 
          margin: '0 20px', 
          padding: '10px 20px', 
          backgroundColor: '#28a745', 
          borderRadius: '5px', 
          textDecoration: 'none', 
          fontSize: '18px'
        }}>
          Sign Up
        </Link>
      </nav>
    </header>
  );
};

export default Header;
