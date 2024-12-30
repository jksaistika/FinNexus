import React from 'react';
import { Link } from 'react-router-dom';

const Level2Video: React.FC = () => {
  return (
    <div
      style={{
        textAlign: 'center',
        padding: '20px',
        backgroundColor: '#001f3f', // Navy background
        color: '#ffffff', // White text for contrast
        height: '100vh', // Full viewport height to center the content
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center', // Center horizontally
      }}
    >
      <h1>Welcome to Level 2 Video!</h1>

      {/* Centering the video and adding border */}
      <div style={{ marginBottom: '20px', border: '5px solid #FFD700', borderRadius: '10px' }}>
        <video width="600" controls style={{ maxWidth: '100%', borderRadius: '10px' }}>
          <source src="path_to_video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Proceed Button */}
      <div style={{ marginTop: '20px' }}>
        <Link to="/Level2/instructions">
          <button
            style={{
              padding: '10px 20px',
              backgroundColor: '#FFD700', // Yellow color for the button
              color: '#001f3f', // Navy text color
              border: 'none',
              borderRadius: '5px',
              fontSize: '16px',
              cursor: 'pointer',
            }}
          >
            Proceed to Instructions
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Level2Video;
