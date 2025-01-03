import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Level1Instructions: React.FC = () => {
  const navigate = useNavigate();
  const [isAgreed, setIsAgreed] = useState(false); // Track checkbox state

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsAgreed(event.target.checked); // Update the agreed state
  };

  const handleProceedClick = () => {
    if (isAgreed) {
      navigate('/Level1quiz'); // Proceed to quiz page if checkbox is checked
    } else {
      alert('You must agree to the instructions first.');
    }
  };

  return (
    <div
      style={{
        backgroundColor: 'white', // White background for the page
        color: 'black',            // Black text color
        minHeight: '100vh',        // Full screen height
        display: 'flex',           // Flexbox for centering
        flexDirection: 'column',  // Column layout
        justifyContent: 'center', // Center content vertically
        alignItems: 'center',     // Center content horizontally
        fontFamily: 'Arial, sans-serif',
        padding: '20px',
      }}
    >
      <h2>Level 1 - Instructions</h2>

      {/* Instructions Content */}
      <div
        style={{
          width: '80%',
          maxWidth: '800px',
          padding: '20px',
          border: '2px solid black',  // Dark border for container
          borderRadius: '8px',
          backgroundColor: 'black',   // Set container background to black
          color: 'white',             // Set text color inside the container to white
          boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
          marginBottom: '20px',
        }}
      >
        <ul style={{ listStyleType: 'decimal', marginBottom: '20px', paddingLeft: '20px' }}>
          <li style={{ marginBottom: '15px' }}>Understand the basic financial concepts before starting.</li>
          <li style={{ marginBottom: '15px' }}>Watch the video content carefully to get the full understanding of the topic.</li>
          <li style={{ marginBottom: '15px' }}>Take notes during the video, as it will help you with the quiz.</li>
          <li style={{ marginBottom: '15px' }}>Focus on the key points highlighted in the video.</li>
          <li style={{ marginBottom: '15px' }}>Be sure to understand each section before proceeding to the next one.</li>
          <li style={{ marginBottom: '15px' }}>If you need help, feel free to revisit the video and instructions.</li>
          <li style={{ marginBottom: '15px' }}>Once you feel confident, proceed to the quiz and test your knowledge.</li>
        </ul>
        
        {/* Checkbox to Agree */}
        <div style={{ marginTop: '20px' }}>
          <label style={{ color: 'white' }}>
            <input
              type="checkbox"
              checked={isAgreed}
              onChange={handleCheckboxChange}
              style={{
                marginRight: '10px',
                cursor: 'pointer',
              }}
            />
            I agree to the instructions above
          </label>
        </div>

        {/* Proceed Button */}
        <button
          onClick={handleProceedClick}
          style={{
            padding: '8px 15px', // Reduced padding
            backgroundColor: isAgreed ? '#007BFF' : '#cccccc', // Blue if agreed, gray if not
            color: 'white',
            border: '2px solid white', // White border
            borderRadius: '5px',
            cursor: isAgreed ? 'pointer' : 'not-allowed',
            fontSize: '14px', // Reduced font size
            marginTop: '20px',
            width: 'auto', // Adjust width to fit content
          }}
          disabled={!isAgreed} // Disable if checkbox is not checked
        >
          Proceed to Quiz
        </button>
      </div>
    </div>
  );
};

export default Level1Instructions;
