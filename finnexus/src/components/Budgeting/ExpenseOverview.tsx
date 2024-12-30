import React from 'react';
import { useNavigate } from 'react-router-dom';

const Budgeting: React.FC = () => {
  const navigate = useNavigate();  // Correct usage of useNavigate()

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
        gap: '20px',
        position: 'relative',
        padding: '20px',
      }}
    >
      <div
        style={{
          border: '10px solid #FFD700',
          borderRadius: '15px',
          padding: '50px',
          textAlign: 'center',
          width: '100%',
          maxWidth: '600px',
          boxSizing: 'border-box',
          position: 'relative',
          minHeight: '600px',
        }}
      >
        <h1>Budgeting Module</h1>

        {/* Set Budget Button */}
        <div>
          <button
            onClick={() => navigate('/set-budget')}  // Navigate to Set Budget
            style={{
              padding: '12px 24px',
              backgroundColor: '#FFD700',
              color: '#001f3f',
              border: 'none',
              borderRadius: '5px',
              fontSize: '16px',
              cursor: 'pointer',
              marginBottom: '10px',
            }}
          >
            Set Budget
          </button>
        </div>

        {/* Track Expenses Button */}
        <div>
          <button
            onClick={() => navigate('/track-expenses')}  // Navigate to Track Expenses
            style={{
              padding: '12px 24px',
              backgroundColor: '#FFD700',
              color: '#001f3f',
              border: 'none',
              borderRadius: '5px',
              fontSize: '16px',
              cursor: 'pointer',
              marginBottom: '10px',
            }}
          >
            Track Expenses
          </button>
        </div>

        {/* Savings Button */}
        <div>
          <button
            onClick={() => navigate('/savings')}  // Navigate to Savings
            style={{
              padding: '12px 24px',
              backgroundColor: '#FFD700',
              color: '#001f3f',
              border: 'none',
              borderRadius: '5px',
              fontSize: '16px',
              cursor: 'pointer',
              marginBottom: '10px',
            }}
          >
            Savings
          </button>
        </div>

        {/* Go Back to HomePage Button */}
        <div>
          <button
            onClick={() => navigate('/')}  // Navigate to HomePage
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
            Go Back to HomePage
          </button>
        </div>
      </div>
    </div>
  );
};

export default Budgeting;
