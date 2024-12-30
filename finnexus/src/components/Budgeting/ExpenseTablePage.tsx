import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

interface Expense {
  date: string;
  amount: number;
  category: string;
  description: string;
}

// Utility function to group expenses by date and calculate daily totals
const groupExpensesByDate = (expenses: Expense[]) => {
  const grouped: { [date: string]: { total: number; items: Expense[] } } = {};

  expenses.forEach((expense) => {
    if (!grouped[expense.date]) {
      grouped[expense.date] = { total: 0, items: [] };
    }
    grouped[expense.date].total += expense.amount;
    grouped[expense.date].items.push(expense);
  });

  return grouped;
};

const ExpenseTablePage: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate(); // Initialize navigate
  const initialExpenses = (location.state?.expenses as Expense[]) || []; // Retrieve expenses from state
  const [expenses, setExpenses] = useState<Expense[]>(initialExpenses);

  // Group expenses by date
  const groupedExpenses = groupExpensesByDate(expenses);

  // Delete expense
  const handleDelete = (date: string, index: number) => {
    setExpenses((prevExpenses) =>
      prevExpenses.filter((expense, i) => !(expense.date === date && i === index))
    );
  };

  // Handle Go Back
  const handleGoBack = () => {
    navigate('/track-expenses'); // Adjust this path as per your routing
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: '#001f3f',
        color: '#ffffff',
        fontFamily: 'Arial, sans-serif',
        padding: '20px',
        minHeight: '100vh',
      }}
    >
      <h1 style={{ color: '#FFD700' }}>Expense Table</h1>

      <table
        style={{
          width: '80%',
          borderCollapse: 'collapse',
          border: '1px solid #FFD700',
          marginTop: '20px',
        }}
      >
        <thead>
          <tr>
            <th style={{ border: '1px solid #FFD700', padding: '8px' }}>Date</th>
            <th style={{ border: '1px solid #FFD700', padding: '8px' }}>Amount</th>
            <th style={{ border: '1px solid #FFD700', padding: '8px' }}>Category</th>
            <th style={{ border: '1px solid #FFD700', padding: '8px' }}>Description</th>
            <th style={{ border: '1px solid #FFD700', padding: '8px' }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(groupedExpenses).length > 0 ? (
            Object.entries(groupedExpenses).map(([date, { total, items }]) => (
              <React.Fragment key={date}>
                {/* Display the daily total */}
                <tr>
                  <td
                    colSpan={5}
                    style={{
                      backgroundColor: '#FFD700',
                      color: '#001f3f',
                      fontWeight: 'bold',
                      textAlign: 'center',
                      padding: '8px',
                    }}
                  >
                    Total Expenses for {date}: ₹{total.toFixed(2)}
                  </td>
                </tr>

                {/* Display individual expenses for the day */}
                {items.map((expense, index) => (
                  <tr key={index}>
                    <td style={{ border: '1px solid #FFD700', padding: '8px' }}>{expense.date}</td>
                    <td style={{ border: '1px solid #FFD700', padding: '8px' }}>₹{expense.amount}</td>
                    <td style={{ border: '1px solid #FFD700', padding: '8px' }}>{expense.category}</td>
                    <td style={{ border: '1px solid #FFD700', padding: '8px' }}>{expense.description}</td>
                    <td style={{ border: '1px solid #FFD700', padding: '8px', textAlign: 'center' }}>
                      <button
                        onClick={() => handleDelete(date, index)}
                        style={{
                          backgroundColor: '#FF4136',
                          color: '#ffffff',
                          border: 'none',
                          padding: '6px 12px',
                          cursor: 'pointer',
                          borderRadius: '4px',
                        }}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </React.Fragment>
            ))
          ) : (
            <tr>
              <td colSpan={5} style={{ textAlign: 'center', padding: '8px' }}>
                No expenses added yet.
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Go Back Button at the bottom */}
      <div style={{ marginTop: '30px' }}>
        <button
          onClick={handleGoBack}
          style={{
            backgroundColor: '#007BFF',
            color: '#ffffff',
            border: 'none',
            padding: '10px 20px',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default ExpenseTablePage;
