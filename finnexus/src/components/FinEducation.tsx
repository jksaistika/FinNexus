import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const FinEducation: React.FC = () => {
  const navigate = useNavigate();
  const [clickedLevel, setClickedLevel] = useState<number | null>(null);
  const [levelCompletion, setLevelCompletion] = useState({
    level1: false,
    level2: false,
    level3: false,
  });

  // This function should be called when a user successfully completes a level's quiz
  const handleLevelCompletion = (level: number) => {
    setLevelCompletion((prevState) => {
      switch (level) {
        case 1:
          return { ...prevState, level1: true };
        case 2:
          return { ...prevState, level2: true };
        case 3:
          return { ...prevState, level3: true };
        default:
          return prevState;
      }
    });
  };

  const handleLevelClick = (level: number) => {
    setClickedLevel(level); // Track clicked level
    if (level === 1) {
      navigate('/Level1video');  // Navigate to Level 1 Video
    } else if (level === 2) {
      navigate('/Level2video');  // Navigate to Level 2 Video
    } else if (level === 3) {
      navigate('/Level3video');  // Navigate to Level 3 Video
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100vh', // Full screen height
        fontFamily: 'Arial, sans-serif',
      }}
    >
      {/* Central Content Area */}
      <div
        style={{
          flex: 1, // Take up remaining space
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center', // Center vertically
          alignItems: 'center', // Center horizontally
          backgroundColor: 'white',
          padding: '20px', // Padding for spacing around the content
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
            marginTop: '30px',  // Bring the heading down
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
            border: '4px solid black',
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
                maxWidth: '500px',  // Increased max width
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
                color: 'black',
                marginBottom: '20px', // Space between the quote and the levels
              }}
            >
              <h2><b>"Empower Learn Achieve!"</b></h2>
            </div>

            {/* Levels List */}
            <ul style={{ listStyleType: 'none', padding: 0 }}>
              <li
                onClick={() => handleLevelClick(1)}
                style={{
                  margin: '10px 0',
                  padding: '10px',
                  border: `2px solid ${levelCompletion.level1 ? 'green' : 'black'}`, // Green border if level completed
                  borderRadius: '8px',
                  backgroundColor: clickedLevel === 1 ? '#d3d3d3' : '#f5f5f5',
                  width: '150px',
                  cursor: clickedLevel !== 1 ? 'pointer' : 'not-allowed',
                  opacity: clickedLevel !== null && clickedLevel !== 1 ? 0.5 : 1,
                  color: 'black', // Text color set to black
                }}
              >
                Basic
              </li>
              <li
                onClick={() => handleLevelClick(2)}
                style={{
                  margin: '10px 0',
                  padding: '10px',
                  border: `2px solid ${levelCompletion.level2 ? 'green' : 'black'}`, // Green border if level completed
                  borderRadius: '8px',
                  backgroundColor: clickedLevel === 2 ? '#d3d3d3' : '#f5f5f5',
                  width: '150px',
                  cursor: clickedLevel !== 2 ? 'pointer' : 'not-allowed',
                  opacity: clickedLevel !== null && clickedLevel !== 2 ? 0.5 : 1,
                  color: 'black', // Text color set to black
                }}
              >
                Medium
              </li>
              <li
                onClick={() => handleLevelClick(3)}
                style={{
                  margin: '10px 0',
                  padding: '10px',
                  border: `2px solid ${levelCompletion.level3 ? 'green' : 'black'}`, // Green border if level completed
                  borderRadius: '8px',
                  backgroundColor: clickedLevel === 3 ? '#d3d3d3' : '#f5f5f5',
                  width: '150px',
                  cursor: clickedLevel !== 3 ? 'pointer' : 'not-allowed',
                  opacity: clickedLevel !== null && clickedLevel !== 3 ? 0.5 : 1,
                  color: 'black', // Text color set to black
                }}
              >
                Advanced
              </li>
            </ul>
          </div>
        </div>

        {/* Back Button */}
        <button
          onClick={() => navigate('/HomePage')}  // Navigate back to HomePage
          style={{
            marginTop: '20px',
            padding: '10px 20px',
            fontSize: '16px',
            backgroundColor: '#007BFF',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          Back to Home
        </button>
      </div>

      {/* Full-width Footer */}
    </div>
  );
};

export default FinEducation;
