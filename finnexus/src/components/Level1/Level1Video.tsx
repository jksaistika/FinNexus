import React from 'react';
import { useNavigate } from 'react-router-dom';

const Level1Video: React.FC = () => {
  const navigate = useNavigate();

  const handleProceedClick = () => {
    navigate('/Level1Instructions'); // Corrected path to match the route
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
      <h2>Level 1 - Video</h2>
      <p>Here is the video content for Level 1.</p>

      <div
        style={{
          maxWidth: '800px',       
          width: '100%',           
          marginBottom: '20px',    
        }}
      >
        <video width="100%" height="auto" controls>
          <source src="your-video-url.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <button
        onClick={handleProceedClick}
        style={{
          padding: '10px 20px',
          backgroundColor: '#4CAF50', 
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
