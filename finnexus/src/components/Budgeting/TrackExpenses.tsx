import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Expense type definition
interface Expense {
  date: string;
  amount: number;
  category: string;
  description: string;
}

const TrackExpenses: React.FC = () => {
  const [expenses, setExpenses] = useState<Expense[]>([]); // State to store expenses
  const [newExpense, setNewExpense] = useState<Expense>({
    date: '',
    amount: 0,
    category: '',
    description: '',
  });

  const navigate = useNavigate(); // For navigation to next page

  // Function to add an expense
  const handleAddExpense = () => {
    if (newExpense.amount && newExpense.category && newExpense.description) {
      const updatedExpenses = [
        ...expenses,
        {
          date: newExpense.date || new Date().toLocaleDateString(),
          amount: newExpense.amount,
          category: newExpense.category,
          description: newExpense.description,
        },
      ];

      setExpenses(updatedExpenses); // Update state with new expense
      setNewExpense({ date: '', amount: 0, category: '', description: '' }); // Reset the form
    } else {
      alert('Please fill in all fields.');
    }
  };

  // Navigate to the ExpenseTablePage with expenses as state
  const handleViewTable = () => {
    navigate('/expense-table', { state: { expenses } });
  };

  // Navigate to the ExpenseOverviewPage with expenses as state
  const handleViewOverview = () => {
    navigate('/expense-overview', { state: { expenses } });
  };

  // Navigate back to Budgeting page
  const handleGoBack = () => {
    navigate('/budgeting'); // Adjust this path to match your Budgeting route
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#001f3f',
        color: '#ffffff',
        fontFamily: 'Arial, sans-serif',
        padding: '20px',
        minHeight: '100vh',
      }}
    >
      <h1 style={{ color: '#FFD700' }}>Track Your Expenses</h1>

      {/* Expense Entry Form */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
          padding: '20px',
          backgroundColor: '#001f3f',
          border: '1px solid #FFD700',
          borderRadius: '8px',
          width: '100%',
          maxWidth: '600px',
        }}
      >
        <input
          type="number"
          placeholder="Enter amount"
          value={newExpense.amount || ''}
          onChange={(e) =>
            setNewExpense({ ...newExpense, amount: Number(e.target.value) })
          }
          style={{
            padding: '10px',
            fontSize: '16px',
            borderRadius: '5px',
            border: '1px solid #FFD700',
            backgroundColor: '#001f3f',
            color: '#ffffff',
          }}
        />
        <input
          type="text"
          placeholder="Enter category"
          value={newExpense.category}
          onChange={(e) =>
            setNewExpense({ ...newExpense, category: e.target.value })
          }
          style={{
            padding: '10px',
            fontSize: '16px',
            borderRadius: '5px',
            border: '1px solid #FFD700',
            backgroundColor: '#001f3f',
            color: '#ffffff',
          }}
        />
        <input
          type="text"
          placeholder="Enter description"
          value={newExpense.description}
          onChange={(e) =>
            setNewExpense({ ...newExpense, description: e.target.value })
          }
          style={{
            padding: '10px',
            fontSize: '16px',
            borderRadius: '5px',
            border: '1px solid #FFD700',
            backgroundColor: '#001f3f',
            color: '#ffffff',
          }}
        />
        <button
          onClick={handleAddExpense}
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
          Add Expense
        </button>
      </div>

      {/* Buttons for View Table and Expense Overview */}
      <div style={{ marginTop: '30px', display: 'flex', gap: '15px' }}>
        <button
          onClick={handleViewTable}
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
          View Table
        </button>
        <button
          onClick={handleViewOverview}
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
          Expense Overview
        </button>
      </div>

      {/* Go Back Button to Budgeting */}
      <div style={{ marginTop: '30px' }}>
        <button
          onClick={handleGoBack}
          style={{
            padding: '12px 24px',
            backgroundColor: '#007BFF',
            color: '#ffffff',
            border: 'none',
            borderRadius: '5px',
            fontSize: '16px',
            cursor: 'pointer',
          }}
        >
          Go Back to Budgeting
        </button>
      </div>
    </div>
  );
};

export default TrackExpenses;
