// Charts.tsx
import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

// Registering the necessary chart elements
ChartJS.register(ArcElement, Tooltip, Legend);

const Charts = () => {
  const data = {
    labels: ['Food', 'Entertainment', 'Savings'],
    datasets: [
      {
        data: [300, 100, 50], // Example data; replace with dynamic values
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      },
    ],
  };

  return (
    <div>
      <h2>View Your Budgeting Progress</h2>
      <Pie data={data} />
    </div>
  );
};

export default Charts;
