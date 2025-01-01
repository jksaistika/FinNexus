import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SetBudget: React.FC = () => {
  const [dailyBudget, setDailyBudget] = useState<number | string>('');
  const [weeklyBudget, setWeeklyBudget] = useState<number | string>('');
  const [monthlyBudget, setMonthlyBudget] = useState<number | string>('');

  const navigate = useNavigate();

  // Save budget function (also stores in localStorage)
  const handleSaveBudget = () => {
    localStorage.setItem('dailyBudget', dailyBudget.toString());
    localStorage.setItem('weeklyBudget', weeklyBudget.toString());
    localStorage.setItem('monthlyBudget', monthlyBudget.toString());

    alert(`Daily: ₹${dailyBudget}, Weekly: ₹${weeklyBudget}, Monthly: ₹${monthlyBudget}`);
  };

  // Reset budget function (also clears from localStorage)
  const handleResetBudget = () => {
    setDailyBudget('');
    setWeeklyBudget('');
    setMonthlyBudget('');

    localStorage.removeItem('dailyBudget');
    localStorage.removeItem('weeklyBudget');
    localStorage.removeItem('monthlyBudget');

    alert('Budgets have been reset.');
  };

  return (
    <div
      style={{
        padding: '20px',
        backgroundColor: '#FFFFFF', // White background
        color: '#000000', // Black text
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '80vh',
        flexDirection: 'column', // Align content vertically
      }}
    >
      {/* Heading Outside the Container */}
      <h1
        style={{
          marginBottom: '20px',
          fontSize: '32px',
          fontWeight: 'bold',
          textAlign: 'center',
        }}
      >
        <b>Set Your Budget !</b>
      </h1>

      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          maxWidth: '1200px',
          width: '100%',
          gap: '40px',
        }}
      >
        {/* Left: Image */}
        <div
          style={{
            flex: 1,
            maxWidth: '50%',
          }}
        >
          <h2>
            "<b>Budgeting</b> has only one rule -"
          </h2>
          <h2>Do not go over budget!</h2>

          <img
            src="/img3.jpg"
            alt="Budgeting Image"
            style={{
              width: '100%',
              maxHeight: '500px',
              objectFit: 'cover',
              borderRadius: '10px',
            }}
          />
        </div>

        {/* Right: Budget Form */}
        <div
          style={{
            flex: 1,
            maxWidth: '50%',
            border: '2px solid #000000',
            borderRadius: '10px',
            padding: '30px',
            textAlign: 'center',
          }}
        >
          {/* Budget Input Fields (Centering this container) */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '20px',
              marginBottom: '30px',
              alignItems: 'center', // Centering the input fields
            }}
          >
            {/* Daily Budget */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <label htmlFor="dailyBudget" style={{ fontSize: '16px' }}>
                <b>Set Daily Budget:</b>
              </label>
              <input
                type="number"
                id="dailyBudget"
                value={dailyBudget}
                onChange={(e) => setDailyBudget(e.target.value)}
                placeholder="Enter Daily Budget"
                style={{
                  padding: '10px',
                  fontSize: '16px',
                  borderRadius: '5px',
                  border: '2px solid #000000',
                  backgroundColor: '#FFFFFF',
                  color: '#000000',
                  width: '200px', // Adjust width for better alignment
                }}
              />
            </div>

            {/* Weekly Budget */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <label htmlFor="weeklyBudget" style={{ fontSize: '16px' }}>
                <b>Set Weekly Budget:</b>
              </label>
              <input
                type="number"
                id="weeklyBudget"
                value={weeklyBudget}
                onChange={(e) => setWeeklyBudget(e.target.value)}
                placeholder="Enter Weekly Budget"
                style={{
                  padding: '10px',
                  fontSize: '16px',
                  borderRadius: '5px',
                  border: '2px solid #000000',
                  backgroundColor: '#FFFFFF',
                  color: '#000000',
                  width: '200px', // Adjust width for better alignment
                }}
              />
            </div>

            {/* Monthly Budget */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <label htmlFor="monthlyBudget" style={{ fontSize: '16px' }}>
                <b>Set Monthly Budget:</b>
              </label>
              <input
                type="number"
                id="monthlyBudget"
                value={monthlyBudget}
                onChange={(e) => setMonthlyBudget(e.target.value)}
                placeholder="Enter Monthly Budget"
                style={{
                  padding: '10px',
                  fontSize: '16px',
                  borderRadius: '5px',
                  border: '2px solid #000000',
                  backgroundColor: '#FFFFFF',
                  color: '#000000',
                  width: '200px', // Adjust width for better alignment
                }}
              />
            </div>
          </div>

          {/* Buttons: Save, Reset, Track Expenses (Shorten Button Width) */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '20px',
              marginTop: '20px',
              alignItems: 'center', // Center the buttons
            }}
          >
           <button
  onClick={handleSaveBudget}
  style={{
    padding: '12px 24px',
    backgroundColor: 'green',
    color: '#FFFFFF',
    border: '2px solid #000000',
    borderRadius: '5px',
    fontSize: '16px',
    cursor: 'pointer',
  }}
>
  Save Budget
</button>

<button
  onClick={handleResetBudget}
  style={{
    padding: '12px 24px',
    backgroundColor: 'green',
    color: '#FFFFFF',
    border: '2px solid #000000',
    borderRadius: '5px',
    fontSize: '16px',
    cursor: 'pointer',
  }}
>
  Reset Budgets
</button>

<button
  onClick={() => navigate('/track-expenses')}
  style={{
    padding: '12px 24px',
    backgroundColor: 'green',  // Green background color
    color: '#FFFFFF',          // White text color
    border: '2px solid green', // Green border
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

      {/* Quote Below the Container */}
      <div
        style={{
          textAlign: 'center',
          marginTop: '20px',
          fontSize: '18px',
          fontStyle: 'italic',
          color: '#000000',
        }}
      >
      </div>
    </div>
  );
};

export default SetBudget;
