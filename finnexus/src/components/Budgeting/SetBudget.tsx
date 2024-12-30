import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SetBudget: React.FC = () => {
  const [dailyBudget, setDailyBudget] = useState<number | string>('');
  const [weeklyBudget, setWeeklyBudget] = useState<number | string>('');
  const [monthlyBudget, setMonthlyBudget] = useState<number | string>('');

  const navigate = useNavigate(); // Hook to navigate between routes

  // Save budget function (also stores in localStorage)
  const handleSaveBudget = () => {
    localStorage.setItem('dailyBudget', dailyBudget.toString());
    localStorage.setItem('weeklyBudget', weeklyBudget.toString());
    localStorage.setItem('monthlyBudget', monthlyBudget.toString());

    alert(`Daily: ₹${dailyBudget}, Weekly: ₹${weeklyBudget}, Monthly: ₹${monthlyBudget}`);
  };

  return (
    <div
      style={{
        padding: '20px',
        backgroundColor: '#001f3f', // Navy background
        color: '#ffffff', // White text for contrast
        display: 'flex',
        flexDirection: 'column', // Vertical layout for the whole page
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <div
        style={{
          border: '10px solid #FFD700', // Yellow border
          borderRadius: '15px', // Rounded corners
          padding: '50px',
          textAlign: 'center',
          width: '100%',
          maxWidth: '800px', // Increased max width for side-by-side buttons
          boxSizing: 'border-box',
        }}
      >
        <h1>Set Your Budget</h1>

        <div
          style={{
            display: 'flex',
            flexDirection: 'row', // Horizontal arrangement
            gap: '20px',
            marginBottom: '30px', // Space below the buttons
            justifyContent: 'center', // Center the buttons horizontally
          }}
        >
          <button
            onClick={() => setDailyBudget(prompt('Enter Daily Budget:') || '')}
            style={{
              padding: '12px 24px',
              backgroundColor: '#FFD700', // Gold background for the buttons
              color: '#001f3f', // Navy text color for buttons
              border: 'none',
              borderRadius: '5px',
              fontSize: '16px',
              cursor: 'pointer',
            }}
          >
            Set Daily Budget
          </button>

          <button
            onClick={() => setWeeklyBudget(prompt('Enter Weekly Budget:') || '')}
            style={{
              padding: '12px 24px',
              backgroundColor: '#FFD700', // Gold background for the buttons
              color: '#001f3f', // Navy text color for buttons
              border: 'none',
              borderRadius: '5px',
              fontSize: '16px',
              cursor: 'pointer',
            }}
          >
            Set Weekly Budget
          </button>

          <button
            onClick={() => setMonthlyBudget(prompt('Enter Monthly Budget:') || '')}
            style={{
              padding: '12px 24px',
              backgroundColor: '#FFD700', // Gold background for the buttons
              color: '#001f3f', // Navy text color for buttons
              border: 'none',
              borderRadius: '5px',
              fontSize: '16px',
              cursor: 'pointer',
            }}
          >
            Set Monthly Budget
          </button>
        </div>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
            marginBottom: '30px',
          }}
        >
          <input
            type="number"
            placeholder="Daily Budget"
            value={dailyBudget}
            onChange={(e) => setDailyBudget(e.target.value)}
            style={{
              padding: '10px',
              fontSize: '16px',
              borderRadius: '5px',
              border: '1px solid #FFD700',
              backgroundColor: '#003366',
              color: '#ffffff',
            }}
          />
          <input
            type="number"
            placeholder="Weekly Budget"
            value={weeklyBudget}
            onChange={(e) => setWeeklyBudget(e.target.value)}
            style={{
              padding: '10px',
              fontSize: '16px',
              borderRadius: '5px',
              border: '1px solid #FFD700',
              backgroundColor: '#003366',
              color: '#ffffff',
            }}
          />
          <input
            type="number"
            placeholder="Monthly Budget"
            value={monthlyBudget}
            onChange={(e) => setMonthlyBudget(e.target.value)}
            style={{
              padding: '10px',
              fontSize: '16px',
              borderRadius: '5px',
              border: '1px solid #FFD700',
              backgroundColor: '#003366',
              color: '#ffffff',
            }}
          />
        </div>

        <button
          onClick={handleSaveBudget}
          style={{
            marginTop: '20px',
            padding: '12px 24px',
            backgroundColor: '#FFD700',
            color: '#001f3f',
            border: 'none',
            borderRadius: '5px',
            fontSize: '16px',
            cursor: 'pointer',
          }}
        >
          Save Budget
        </button>

        {/* Space between Save Budget and Track Expenses buttons */}
        <div style={{ marginTop: '30px' }}>
          <button
            onClick={() => navigate('/track-expenses')}
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
            Go to Track Expenses
          </button>
        </div>
      </div>
    </div>
  );
};

export default SetBudget;
