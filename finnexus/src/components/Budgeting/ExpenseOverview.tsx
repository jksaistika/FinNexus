import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom

const ExpenseOverview: React.FC = () => {
  const [dailyExpenses, setDailyExpenses] = useState<number>(0);
  const [weeklyExpenses, setWeeklyExpenses] = useState<number>(0);
  const [monthlyExpenses, setMonthlyExpenses] = useState<number>(0);
  const navigate = useNavigate(); // Initialize the navigate function

  useEffect(() => {
    const expenses = JSON.parse(localStorage.getItem('expenses') || '[]');
    const today = new Date();

    let daily = 0;
    let weekly = 0;
    let monthly = 0;

    expenses.forEach((expense: any) => {
      const expenseDate = new Date(expense.date);

      if (expenseDate.toDateString() === today.toDateString()) {
        daily += expense.amount;
      }
      if (expenseDate >= new Date(today.setDate(today.getDate() - 7))) {
        weekly += expense.amount;
      }
      if (
        expenseDate.getMonth() === today.getMonth() &&
        expenseDate.getFullYear() === today.getFullYear()
      ) {
        monthly += expense.amount;
      }
    });

    setDailyExpenses(daily);
    setWeeklyExpenses(weekly);
    setMonthlyExpenses(monthly);
  }, []);

  // Function to navigate back to TrackExpense page
  const handleBackClick = () => {
    navigate('/track-expense'); // Navigate to the TrackExpense page
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '85vh',
        marginTop: '0',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {/* Image */}
        <img
          src="/img10.jpg"
          alt="Expenses"
          style={{
            width: '500px',
            height: '550px',
            borderRadius: '15px',
            marginRight: '50px',
          }}
        />

        {/* Content */}
        <div
          style={{
            color: 'black',
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            padding: '30px',
            borderRadius: '12px',
            boxShadow: '0 8px 8px rgba(0, 0, 0, 0.1)',
            border: '2px solid black',
            width: '400px',
          }}
        >
          {/* Heading */}
          <h1
            style={{
              fontSize: '32px',
              marginBottom: '20px',
              color: 'black',
              textAlign: 'center',
            }}
          >
            Expense Overview
          </h1>

          <div
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.8)',
              padding: '15px',
              borderRadius: '8px',
              margin: '15px 0',
              border: '2px solid black',
            }}
          >
            <p>
              <strong>Daily Total:</strong> ₹{dailyExpenses.toFixed(2)}
            </p>
          </div>

          <div
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.8)',
              padding: '15px',
              borderRadius: '8px',
              margin: '15px 0',
              border: '2px solid black',
            }}
          >
            <p>
              <strong>Weekly Total:</strong> ₹{weeklyExpenses.toFixed(2)}
            </p>
          </div>

          <div
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.8)',
              padding: '15px',
              borderRadius: '8px',
              margin: '15px 0',
              border: '2px solid black',
            }}
          >
            <p>
              <strong>Monthly Total:</strong> ₹{monthlyExpenses.toFixed(2)}
            </p>
          </div>

          {/* Back Button */}
          <button
            onClick={handleBackClick}
            style={{
              backgroundColor: '#4CAF50', // Green button color
              color: 'white',
              padding: '10px 20px',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              marginTop: '20px',
              width: '100%', // Full width button
            }}
          >
            Back to Track Expense
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExpenseOverview;
