import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer style={{
      backgroundColor: '#001f3f',
      color: '#fff',
      textAlign: 'center',
      padding: '10px 20px', // Reduced padding to decrease height
      marginTop: '10px',
      fontSize: '14px', // Reduced font size for the footer text
    }}>
      <p style={{ marginBottom: '5px', fontSize: '14px' }}> {/* Reduced font size */}
        © 2025 Finnexus. All Rights Reserved.
      </p>
      <div>
        <a href="/privacy-policy" style={{ color: '#fff', textDecoration: 'none', margin: '0 10px', fontSize: '14px' }}> {/* Reduced font size and margin */}
          Privacy Policy
        </a>
        <a href="/terms-of-service" style={{ color: '#fff', textDecoration: 'none', margin: '0 10px', fontSize: '14px' }}> {/* Reduced font size and margin */}
          Terms of Service
        </a>
        <a href="/contact" style={{ color: '#fff', textDecoration: 'none', margin: '0 10px', fontSize: '14px' }}> {/* Reduced font size and margin */}
          Contact Us
        </a>
      </div>
    </footer>
  );
};

export default Footer;
