import React from 'react';
import { Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation

ChartJS.register(ArcElement, Tooltip, Legend);

const Charts: React.FC = () => {
  // Sample chart data
  const pieChartData = {
    labels: ['Expenses', 'Savings', 'Budget'],
    datasets: [
      {
        label: 'Amount (₹)',
        data: [7000, 3000, 10000], // Example data
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      },
    ],
  };

  // Navigation using useNavigate
  const navigate = useNavigate();

  // Handle back button click
  const handleBackClick = () => {
    navigate('/savings'); // Redirect to 'Savings' page
  };

  return (
    <div style={styles.pageContainer}>
      <div style={styles.headerContainer}>
        <h3 style={styles.header}>Budget Breakdown</h3>
      </div>
      <div style={styles.chartContainer}>
        <Pie data={pieChartData} />
      </div>
      {/* Back Button to navigate to Savings */}
      <button style={styles.backButton} onClick={handleBackClick}>
        Back to Savings
      </button>
    </div>
  );
};

// Styles
const styles: { [key: string]: React.CSSProperties } = {
  pageContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: '100%',
    backgroundColor: '#f8f9fa',
    overflowY: 'auto',
  },
  headerContainer: {
    width: '100%',
    backgroundColor: '#f8f9fa',
    padding: '20px',
    textAlign: 'center',
    position: 'fixed',
    top: '0',
    left: '0',
    zIndex: 100,
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
  header: {
    fontSize: '24px',
    fontWeight: 'bold',
  },
  chartContainer: {
    width: '80%',
    maxWidth: '500px',
    marginTop: '120px',
    backgroundColor: '#ffffff',
    borderRadius: '8px',
    border: '2px solid black',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    padding: '20px',
    textAlign: 'center',
    marginBottom: '80px',
  },
  backButton: {
    padding: '10px 20px',
    backgroundColor: '#007BFF',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    fontSize: '16px',
    cursor: 'pointer',
    marginTop: '20px',
    transition: 'background-color 0.3s',
  },
};

export default Charts;
