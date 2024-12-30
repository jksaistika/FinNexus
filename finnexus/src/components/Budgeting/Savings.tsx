import React, { useState, useEffect } from 'react';

const Savings: React.FC = () => {
  const [dailyBudget, setDailyBudget] = useState<number>(0);
  const [weeklyBudget, setWeeklyBudget] = useState<number>(0);
  const [monthlyBudget, setMonthlyBudget] = useState<number>(0);

  const [expenses, setExpenses] = useState({
    daily: 0,
    weekly: 0,
    monthly: 0,
  });

  // Fetch budgets from localStorage on component mount
  useEffect(() => {
    const storedDailyBudget = localStorage.getItem('dailyBudget');
    const storedWeeklyBudget = localStorage.getItem('weeklyBudget');
    const storedMonthlyBudget = localStorage.getItem('monthlyBudget');

    if (storedDailyBudget) setDailyBudget(Number(storedDailyBudget));
    if (storedWeeklyBudget) setWeeklyBudget(Number(storedWeeklyBudget));
    if (storedMonthlyBudget) setMonthlyBudget(Number(storedMonthlyBudget));
  }, []);

  // Example function to handle adding expenses
  const handleAddExpense = (category: string, amount: number) => {
    setExpenses((prevState) => ({
      ...prevState,
      [category]: prevState[category] + amount,
    }));
  };

  // Calculate remaining savings (budget - expenses)
  const dailySavings = dailyBudget - expenses.daily;
  const weeklySavings = weeklyBudget - expenses.weekly;
  const monthlySavings = monthlyBudget - expenses.monthly;

  return (
    <div
      style={{
        padding: '20px',
        backgroundColor: '#001f3f',
        color: '#ffffff',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <div
        style={{
          border: '10px solid #FFD700',
          borderRadius: '15px',
          padding: '50px',
          textAlign: 'center',
          width: '100%',
          maxWidth: '800px',
          boxSizing: 'border-box',
        }}
      >
        <h1>Remaining Savings</h1>
        <div>
          <p>Daily Savings: ₹{dailySavings}</p>
          <p>Weekly Savings: ₹{weeklySavings}</p>
          <p>Monthly Savings: ₹{monthlySavings}</p>
        </div>

        {/* Buttons to add expenses */}
        <button
          onClick={() => handleAddExpense('daily', 50)}
          style={{
            padding: '12px 24px',
            backgroundColor: '#FFD700',
            color: '#001f3f',
            border: 'none',
            borderRadius: '5px',
            fontSize: '16px',
            cursor: 'pointer',
            marginTop: '20px',
          }}
        >
          Add ₹50 to Daily Expense
        </button>
        <button
          onClick={() => handleAddExpense('weekly', 200)}
          style={{
            padding: '12px 24px',
            backgroundColor: '#FFD700',
            color: '#001f3f',
            border: 'none',
            borderRadius: '5px',
            fontSize: '16px',
            cursor: 'pointer',
            marginTop: '10px',
          }}
        >
          Add ₹200 to Weekly Expense
        </button>
        <button
          onClick={() => handleAddExpense('monthly', 500)}
          style={{
            padding: '12px 24px',
            backgroundColor: '#FFD700',
            color: '#001f3f',
            border: 'none',
            borderRadius: '5px',
            fontSize: '16px',
            cursor: 'pointer',
            marginTop: '10px',
          }}
        >
          Add ₹500 to Monthly Expense
        </button>
      </div>
    </div>
  );
};

export default Savings;
