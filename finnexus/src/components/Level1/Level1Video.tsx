import React from 'react';
import { useNavigate } from 'react-router-dom';

const Level1Video: React.FC = () => {
  const navigate = useNavigate();

  const handleProceedClick = () => {
    navigate('/Level1Instructions'); // Navigate to the next page when the button is clicked
  };

  return (
    <div
      style={{
        backgroundColor: 'white',
        color: 'black',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'Arial, sans-serif',
        padding: '20px',
      }}
    >
      <h2>Level 1 - Finance Video</h2>
      <p>Here is a finance education video to help you get started with managing your money.</p>

      {/* Embedding the YouTube video */}
      <div
        style={{
          maxWidth: '800px',
          width: '100%',
          marginBottom: '20px',
        }}
      >
        <iframe
          width="100%"
          height="auto"
          src="https://www.youtube.com/embed/3P2fO7ZPm6M"  // Finance-related video URL
          title="Personal Finance Tips for Beginners"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      {/* Button to proceed to instructions */}
      <button
        onClick={handleProceedClick}
        style={{
          padding: '10px 20px',
          backgroundColor: '#4CAF50', // Green button color
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          fontSize: '16px',
          marginTop: '20px',
        }}
      >
        Proceed to Instructions
      </button>
    </div>
  );
};

export default Level1Video;
