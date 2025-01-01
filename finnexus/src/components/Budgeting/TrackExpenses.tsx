import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const TrackExpenses: React.FC = () => {
  const [newExpense, setNewExpense] = useState<any>({
    amount: 0,
    reason: '',
    description: '',
    date: '', // New date field
  });

  const [expenses, setExpenses] = useState<any[]>([]); // State to store expenses
  const navigate = useNavigate();

  const handleAddExpense = () => {
    // Logic to add expense
    if (newExpense.amount && newExpense.reason && newExpense.description && newExpense.date) {
      const updatedExpenses = [...expenses, newExpense];
      setExpenses(updatedExpenses);
      setNewExpense({ amount: 0, reason: '', description: '', date: '' });

      // Store the expenses in localStorage so it can be accessed by other components
      localStorage.setItem('expenses', JSON.stringify(updatedExpenses));
    } else {
      alert('Please fill in all fields.');
    }
  };

  return (
    <div
      style={{
        backgroundColor: 'white',
        height: '75vh', // Full screen height
        width: '100%',   // Full screen width
        display: 'flex', // Flexbox for side-by-side layout
        justifyContent: 'center', // Center the content
        alignItems: 'center', // Vertically center the content
        padding: '20px',
      }}
    >
      {/* Image Section (img2) */}
      <div style={{ flex: 1, padding: '200px', maxWidth: '250px' }}>
        <img
          src="img2.jpg" // Replace with your actual image path
          alt="Expense Image"
          style={{
            width: '170%',  // Make image fill its container
            height: 'auto', // Maintain aspect ratio
            borderRadius: '8px', // Optional: rounded corners
            border: '3px solid black', // Border for image
          }}
        />
      </div>

      {/* Container Section */}
      <div
        style={{
          flex: 1,
          backgroundColor: 'transparent',
          color: '#000',
          padding: '10px', // Reduced padding to make container smaller
          borderRadius: '8px',
          width: 'auto', // Adjust width to fit content
          border: '2px solid black', // Black border for the container
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          textAlign: 'center',
          marginLeft: '20px', // Space between image and container
          maxWidth: '480px', // Set a max width to avoid the container growing too wide
        }}
      >
        <h1>Track Your Expenses</h1>

        <div>
          <input
            type="date"
            value={newExpense.date}
            onChange={(e) => setNewExpense({ ...newExpense, date: e.target.value })}
            style={{ width: '90%', padding: '8px', marginBottom: '20px' }}
          />
          <input
            type="number"
            placeholder="Enter amount"
            value={newExpense.amount || ''}
            onChange={(e) => setNewExpense({ ...newExpense, amount: +e.target.value })}
            style={{ width: '90%', padding: '8px', marginBottom: '20px' }}
          />
          <input
            type="text"
            placeholder="Enter reason"
            value={newExpense.reason}
            onChange={(e) => setNewExpense({ ...newExpense, reason: e.target.value })}
            style={{ width: '90%', padding: '8px', marginBottom: '20px' }}
          />
          <input
            type="text"
            placeholder="Enter description"
            value={newExpense.description}
            onChange={(e) => setNewExpense({ ...newExpense, description: e.target.value })}
            style={{ width: '90%', padding: '8px', marginBottom: '20px' }}
          />
          <button
            onClick={handleAddExpense}
            style={{
              backgroundColor: '#4CAF50',
              color: '#fff',
              padding: '10px 20px',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              width: '60%',
              marginBottom: '20px',
            }}
          >
            Add Expense
          </button>

          <button
            onClick={() => navigate('/expense-table', { state: { expenses } })}
            style={{
              backgroundColor: '#2196F3',
              color: '#fff',
              padding: '10px 20px',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              width: '60%',
              marginBottom: '20px',
            }}
          >
            View Expense Table
          </button>

          <button
            onClick={() => navigate('/expense-overview')}
            style={{
              backgroundColor: '#2196F3',
              color: '#fff',
              padding: '10px 20px',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              width: '60%',
            }}
          >
            View Expense Overview
          </button>

          {/* Back to Budgeting Button */}
          <button
            onClick={() => navigate('/budgeting')} // Adjust path if necessary
            style={{
              backgroundColor: '#FF9800',
              color: '#fff',
              padding: '10px 20px',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              width: '60%',
              marginTop: '20px', // Add margin for separation
            }}
          >
            Back to Budgeting
          </button>
        </div>
      </div>
    </div>
  );
};

export default TrackExpenses;
