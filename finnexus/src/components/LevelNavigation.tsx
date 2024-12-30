import React from 'react';
import { Link } from 'react-router-dom';

const LevelNavigation: React.FC = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        backgroundColor: '#001f3f',
        color: '#ffffff',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      <div
        style={{
          border: '10px solid #FFD700', // Adding a border
          borderRadius: '15px', // Rounded corners
          padding: '40px', // Space inside the border
          textAlign: 'center',
          width: '100%',
          maxWidth: '600px', // Limit the width of the container
          boxSizing: 'border-box',
        }}
      >
        <h1>LEARN AND GROW...</h1>
        <h2>"FIN_WITH_FUN"</h2>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column', // Ensures buttons are vertically aligned
            gap: '15px', // Adds space between the buttons
          }}
        >
          {/* Level 1 */}
          <Link to="/Level1/video">
            <button
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
              Start Level 1
            </button>
          </Link>

          {/* Level 2 */}
          <Link to="/Level2/video">
            <button
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
              Start Level 2
            </button>
          </Link>

          {/* Level 3 */}
          <Link to="/Level3/video">
            <button
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
              Start Level 3
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LevelNavigation;
