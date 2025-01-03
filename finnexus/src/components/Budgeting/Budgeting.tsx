import React from 'react';
import { useNavigate } from 'react-router-dom';

// Button Styles
const buttonStyles = {
  padding: '12px 24px',
  borderRadius: '5px',
  fontSize: '16px',
  cursor: 'pointer',
  width: '100%', // Full width for buttons
  border: '2px solid black', // Black border
  color: '#ffffff', // White text color
  backgroundColor: 'black', // Black-filled background for buttons
};

const Budgeting: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        minHeight: '100vh',
        backgroundColor: 'white',
        padding: '20px',
        gap: '20px', // Reduced gap between the image and the container
      }}
    >
      {/* Image Section (45% Width) */}
      <div
        style={{
          flex: '0 0 45%', // Takes up 45% of the container width
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <img
          src="/img15.jpg"
          alt="Budgeting"
          style={{
            width: '90%', // 90% of its container's width
            height: 'auto',
            borderRadius: '8px',
            marginLeft:'100px',
          }}
        />
      </div>

      {/* Content Section (Smaller Size) */}
      <div
        style={{
          flex: '0 0 35%', // Reduced to 35% of the container width
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'white',
          color: '#001f3f',
          fontFamily: 'Arial, sans-serif',
          padding: '20px', // Reduced padding
          borderRadius: '15px',
          border: '4px solid black',
          marginRight:'140px',
        }}
      >
        <h1 style={{ fontSize: '24px', marginBottom: '15px' }}>Budgeting Module</h1>
        <p style={{ fontSize: '16px', fontStyle: 'italic', marginBottom: '20px' }}>
          Manage your finances effectively with easy-to-use budgeting tools.
        </p>

        <button
          onClick={() => navigate('/SetBudget')}
          style={{
            ...buttonStyles,
            marginBottom: '15px',
          }}
        >
          Set Budget
        </button>

        <button
          onClick={() => navigate('/TrackExpenses')}
          style={{
            ...buttonStyles,
            marginBottom: '15px',
          }}
        >
          Track Expenses
        </button>

        <button
          onClick={() => navigate('/Savings')}
          style={{
            ...buttonStyles,
            marginBottom: '15px',
          }}
        >
          Saving
        </button>

        <div>
          <button
            onClick={() => navigate('/home')}
            style={{
              ...buttonStyles,
              backgroundColor: 'green', // Green background for the "Go Back to HomePage" button
            }}
          >
            Go Back to HomePage
          </button>
        </div>
      </div>
    </div>
  );
};

export default Budgeting;
