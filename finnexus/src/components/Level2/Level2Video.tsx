import React from 'react';
import { useNavigate } from 'react-router-dom';

const Level2Video: React.FC = () => {
  const navigate = useNavigate();

  const handleProceedClick = () => {
    navigate('/Level2instructions'); // Navigate to Level 2 Instructions
  };

  return (
    <div
      style={{
        backgroundColor: 'white',  // White background
        color: 'black',            // Black text color
        minHeight: '100vh',        // Full screen height
        display: 'flex',           // Flexbox for centering
        flexDirection: 'column',   // Column layout
        justifyContent: 'center',  // Center content vertically
        alignItems: 'center',      // Center content horizontally
        fontFamily: 'Arial, sans-serif',
        padding: '20px',
      }}
    >
      <h2>Level 2 - Video</h2>
      <p>Here is the video content for Level 2.</p>

      {/* Video Section */}
      <div
        style={{
          maxWidth: '800px',       // Maximum width for video
          width: '100%',           // Full width up to maxWidth
          marginBottom: '20px',    // Space between video and button
        }}
      >
        {/* Replace with the actual video URL or embed code */}
        <video
          width="100%"
          height="auto"
          controls
        >
          <source src="your-video-url.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Proceed Button */}
      <button
        onClick={handleProceedClick}
        style={{
          padding: '10px 20px',
          backgroundColor: '#4CAF50', // Green background
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          fontSize: '16px',
          marginTop: '20px', // Space above the button
        }}
      >
        Proceed to Instructions
      </button>
    </div>
  );
};

export default Level2Video;
