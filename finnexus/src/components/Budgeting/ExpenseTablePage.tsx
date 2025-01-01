import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const ExpenseTable: React.FC = () => {
  const [expenses, setExpenses] = useState<any[]>([]);
  const location = useLocation();
  const navigate = useNavigate();

  // Retrieve expenses from navigation state or localStorage
  useEffect(() => {
    const storedExpenses = location.state?.expenses || JSON.parse(localStorage.getItem('expenses') || '[]');
    setExpenses(storedExpenses);
  }, [location.state]);

  // Calculate total expenses
  const totalExpenses = expenses.reduce((total, expense) => total + expense.amount, 0);

  return (
    <div style={{ backgroundColor: 'white', color: 'black', padding: '20px', borderRadius: '8px', width: '80%', margin: 'auto', textAlign: 'center', marginTop: '50px' }}>
      <h1>Expense Table</h1>

      <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px', border: '2px solid black' }}>
        <thead>
          <tr>
            <th style={{ padding: '10px', borderBottom: '1px solid black' }}>Date</th>
            <th style={{ padding: '10px', borderBottom: '1px solid black' }}>Amount</th>
            <th style={{ padding: '10px', borderBottom: '1px solid black' }}>Reason</th>
            <th style={{ padding: '10px', borderBottom: '1px solid black' }}>Description</th>
            <th style={{ padding: '10px', borderBottom: '1px solid black' }}>Action</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense, index) => (
            <tr key={index}>
              <td style={{ padding: '10px', borderBottom: '1px solid black' }}>{expense.date}</td>
              <td style={{ padding: '10px', borderBottom: '1px solid black' }}>{expense.amount}</td>
              <td style={{ padding: '10px', borderBottom: '1px solid black' }}>{expense.reason}</td>
              <td style={{ padding: '10px', borderBottom: '1px solid black' }}>{expense.description}</td>
              <td style={{ padding: '10px', borderBottom: '1px solid black' }}>
                <button style={{ backgroundColor: 'black', color: 'white', padding: '5px 10px', border: 'none', borderRadius: '4px' }}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Display the total expenses */}
      <div style={{ marginTop: '20px', fontSize: '18px', fontWeight: 'bold' }}>
        Total Expenses: ₹{totalExpenses.toFixed(2)}
      </div>

      {/* Back button */}
      <div style={{ marginTop: '20px' }}>
        <button
          onClick={() => navigate('/track-expenses')}
          style={{
            backgroundColor: '#2196F3',
            color: 'white',
            padding: '10px 20px',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          Back to Track Expenses
        </button>
      </div>
    </div>
  );
};

export default ExpenseTable;
