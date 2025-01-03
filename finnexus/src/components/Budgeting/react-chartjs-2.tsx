import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const SavingChart: React.FC = () => {
  const data = {
    labels: ['Savings', 'Expenses', 'Budget'],
    datasets: [
      {
        data: [3000, 2000, 5000], // Example values
        backgroundColor: ['#4caf50', '#f44336', '#2196f3'],
        hoverBackgroundColor: ['#66bb6a', '#e57373', '#64b5f6'],
      },
    ],
  };

  return (
    <div style={{ width: '50%', margin: 'auto' }}>
      <h2>Your Financial Overview</h2>
      <Pie data={data} />
    </div>
  );
};

export default SavingChart;

