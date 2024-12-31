import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const FinEducation: React.FC = () => {
  const navigate = useNavigate();
  const [clickedLevel, setClickedLevel] = useState<number | null>(null);

  const handleLevelClick = (level: number) => {
    setClickedLevel(level); // Track clicked level
    if (level === 1) {
      navigate('/Level1/video');  // Navigate to Level 1 Video
    } else if (level === 2) {
      navigate('/Level2/video');  // Navigate to Level 2 Video
    } else if (level === 3) {
      navigate('/Level3/video');  // Navigate to Level 3 Video
    }
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
      {/* Financial Education Title */}
      <div
        style={{
          fontWeight: 'bold',
          fontSize: '28px',
          color: 'black',
          textTransform: 'uppercase',
          marginBottom: '20px', // Space between title and container
        }}
      >
        Financial Education
      </div>

      {/* Outer Container */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          border: '2px solid black',
          borderRadius: '10px',
          padding: '30px',
          maxWidth: '800px',
          width: '100%',
          backgroundColor: 'white',
          boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
        }}
      >
        {/* Image Section */}
        <div style={{ flex: 1, textAlign: 'center', marginRight: '20px' }}>
          <img
            src="levels_img.jpg"
            alt="Levels"
            style={{
              width: '100%',
              maxWidth: '300px',
              borderRadius: '8px',
              border: '1px solid #ddd',
              boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
            }}
          />
        </div>

        {/* Levels Section */}
        <div
          style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
          }}
        >
          {/* Motivational Quote */}
          <div
            style={{
              fontSize: '18px',
              fontWeight: 'bold',
              color: '#555',
              marginBottom: '20px', // Space between the quote and the levels
            }}
          >
            <b>"Empower Learn Achieve!"</b>
          </div>

          {/* Levels List */}
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            <li
              onClick={() => handleLevelClick(1)}
              style={{
                margin: '10px 0',
                padding: '10px',
                border: '1px solid black',
                borderRadius: '8px',
                backgroundColor: clickedLevel === 1 ? '#d3d3d3' : '#f5f5f5',
                width: '150px',
                cursor: clickedLevel !== 1 ? 'pointer' : 'not-allowed',
                opacity: clickedLevel !== null && clickedLevel !== 1 ? 0.5 : 1,
              }}
            >
              Level 1
            </li>
            <li
              onClick={() => handleLevelClick(2)}
              style={{
                margin: '10px 0',
                padding: '10px',
                border: '1px solid black',
                borderRadius: '8px',
                backgroundColor: clickedLevel === 2 ? '#d3d3d3' : '#f5f5f5',
                width: '150px',
                cursor: clickedLevel !== 2 ? 'pointer' : 'not-allowed',
                opacity: clickedLevel !== null && clickedLevel !== 2 ? 0.5 : 1,
              }}
            >
              Level 2
            </li>
            <li
              onClick={() => handleLevelClick(3)}
              style={{
                margin: '10px 0',
                padding: '10px',
                border: '1px solid black',
                borderRadius: '8px',
                backgroundColor: clickedLevel === 3 ? '#d3d3d3' : '#f5f5f5',
                width: '150px',
                cursor: clickedLevel !== 3 ? 'pointer' : 'not-allowed',
                opacity: clickedLevel !== null && clickedLevel !== 3 ? 0.5 : 1,
              }}
            >
              Level 3
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FinEducation;
