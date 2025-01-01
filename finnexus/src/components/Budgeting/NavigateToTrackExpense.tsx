import React from 'react';
import { useNavigate } from 'react-router-dom';

const NavigateToTrackExpense: React.FC = () => {
  const navigate = useNavigate(); // Hook to navigate between pages

  const handleTrackExpense = () => {
    navigate('/track-expense'); // Navigate to the TrackExpenses page
  };

  return (
    <div>
      <button onClick={handleTrackExpense}>Track Expense</button>
    </div>
  );
};

export default NavigateToTrackExpense;
