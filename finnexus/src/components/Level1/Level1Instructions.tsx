import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Level1Instructions: React.FC = () => {
  const [isAgreed, setIsAgreed] = useState(false);

  const handleAgreeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsAgreed(event.target.checked);
  };

  return (
    <div
      style={{
        textAlign: 'center',
        padding: '20px',
        backgroundColor: '#001f3f', // Navy background
        color: '#FFD700', // Yellow text color
        height: '100vh', // Full viewport height to center the content
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      <h1>Level 1 - Instructions</h1>

      {/* Instructions Box */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          textAlign: 'left',
          marginBottom: '20px',
          padding: '10px',
          borderRadius: '8px',
          backgroundColor: '#ffffff', // White background for the instructions box
          color: '#001f3f', // Navy text color for the instructions box
          width: '60%',
          marginLeft: 'auto',
          marginRight: 'auto',
          border: '5px solid #FFD700', // Yellow border
        }}
      >
        <h3 style={{ fontSize: '20px', marginBottom: '15px' }}>Instructions:</h3>
        <ul style={{ listStyleType: 'decimal', paddingLeft: '20px' }}>
          <li>Watch the video carefully.</li>
          <li>Answer the quiz questions after the video.</li>
          <li>Follow the instructions to complete the task.</li>
          <li>Each question has only one correct answer.</li>
          <li>Click 'Next' to proceed after answering each question.</li>
        </ul>
      </div>

      {/* Agreement Checkbox */}
      <div>
        <input
          type="checkbox"
          id="agree"
          onChange={handleAgreeChange}
          checked={isAgreed}
          style={{ marginRight: '10px' }}
        />
        <label htmlFor="agree">I have read and understood the instructions.</label>
      </div>

      {/* Proceed Button */}
      <div style={{ marginTop: '20px' }}>
        <Link to="/Level1/quiz">
          <button
            onClick={(e) => {
              if (!isAgreed) {
                e.preventDefault(); // Prevent navigation if not agreed
              }
            }}
            disabled={!isAgreed}
            style={{
              padding: '8px 16px', // Small padding for a compact button
              backgroundColor: isAgreed ? '#FFD700' : '#aaa', // Grey out if disabled
              color: isAgreed ? '#001f3f' : '#666',
              border: 'none',
              borderRadius: '5px',
              fontSize: '14px', // Smaller font size
              cursor: isAgreed ? 'pointer' : 'not-allowed',
              width: 'auto', // Ensure the button is not stretched
              display: 'inline-block', // Keep the button compact
            }}
          >
            Proceed to Quiz
          </button>
        </Link>
      </div>

      {/* Best of Luck Message */}
      <div style={{ marginTop: '40px', fontSize: '20px', fontWeight: 'bold' }}>
        <p>Best of Luck! You've got this!</p>
      </div>
    </div>
  );
};

export default Level1Instructions;
