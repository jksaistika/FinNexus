import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column', // Make sure the content is in a column
        alignItems: 'center', // Center horizontally
        justifyContent: 'center',
        height: '100vh',
        backgroundColor: '#001f3f',
        color: '#ffffff',
        fontFamily: 'Arial, sans-serif',
        gap: '20px', // Space between buttons
        position: 'relative', // Enable positioning for the chatbot logo
        padding: '20px',
      }}
    >
      {/* Container with border */}
      <div
        style={{
          border: '10px solid #FFD700', // Increased border size
          borderRadius: '15px', // Slightly larger border radius
          padding: '50px', // Increased padding inside the container for more space
          textAlign: 'center',
          width: '100%',
          maxWidth: '600px', // Increased max width for the container
          boxSizing: 'border-box',
          position: 'relative', // Ensure chatbot is positioned within the container
          minHeight: '600px', // Increased minimum height to make the container larger
        }}
      >
        <h1>Welcome Buddy! </h1>
        <h1> Finnexus Home Page</h1>

        {/* Vertically arranged buttons */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <button
            onClick={() => navigate('/level-navigation')}
            style={{
              padding: '12px 24px',
              backgroundColor: '#FFD700',
              color: '#001f3f',
              border: 'none',
              borderRadius: '5px',
              fontSize: '16px',
              cursor: 'pointer',
            }}
          >
            FIN-EDUCATION
          </button>

          <button
            onClick={() => navigate('/budgeting')}
            style={{
              padding: '12px 24px',
              backgroundColor: '#FFD700',
              color: '#001f3f',
              border: 'none',
              borderRadius: '5px',
              fontSize: '16px',
              cursor: 'pointer',
            }}
          >
            BUDGETING
          </button>

          <button
            onClick={() => navigate('/micro-investment-plans')}
            style={{
              padding: '12px 24px',
              backgroundColor: '#FFD700',
              color: '#001f3f',
              border: 'none',
              borderRadius: '5px',
              fontSize: '16px',
              cursor: 'pointer',
            }}
          >
            MICRO-INVESTMENT PLANS
          </button>

          <button
            onClick={() => navigate('/mentorship-community')}
            style={{
              padding: '12px 24px',
              backgroundColor: '#FFD700',
              color: '#001f3f',
              border: 'none',
              borderRadius: '5px',
              fontSize: '16px',
              cursor: 'pointer',
            }}
          >
            MENTORSHIP & COMMUNITY
          </button>

          <button
            onClick={() => navigate('/schemes')}
            style={{
              padding: '12px 24px',
              backgroundColor: '#FFD700',
              color: '#001f3f',
              border: 'none',
              borderRadius: '5px',
              fontSize: '16px',
              cursor: 'pointer',
            }}
          >
            SCHEMES
          </button>
        </div>

        {/* Chatbot Icon with Text and Border */}
        <div
          style={{
            position: 'absolute',
            bottom: '30px', // Adjust distance from the bottom for more space
            right: '30px', // Adjust distance from the right for more space
            display: 'flex',
            alignItems: 'center',
            backgroundColor: '#FFD700', // Background color for chatbot
            color: '#001f3f', // Text color
            borderRadius: '50px',
            padding: '12px 18px', // Increased padding for better fit
            cursor: 'pointer',
            boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', // Optional shadow for better contrast
            border: '2px solid #001f3f', // Border for better contrast
          }}
          onClick={() => alert('Chatbot Clicked!')} // Replace this with chatbot functionality
        >
          {/* Chatbot Icon */}
          <span
            style={{
              display: 'inline-block',
              width: '24px',
              height: '24px',
              marginRight: '8px',
              backgroundImage:
                'url("https://img.icons8.com/ios-filled/50/000000/chatbot.png")', // Replace with your preferred icon URL
              backgroundSize: 'cover',
            }}
          />
          {/* Chatbot Text */}
          <span style={{ fontWeight: 'bold', fontSize: '16px' }}>Chatbot</span>
        </div>
      </div>
    </div>
  );
};

export default Home;
