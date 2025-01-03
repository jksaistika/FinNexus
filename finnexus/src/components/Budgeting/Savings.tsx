import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

type BudgetType = 'daily' | 'weekly' | 'monthly' | 'yearly'; // Defining the BudgetType

const Saving: React.FC = () => {
  const [budget] = useState<{ daily: number; weekly: number; monthly: number; yearly: number }>({
    daily: 1000,
    weekly: 5000,
    monthly: 20000,
    yearly: 240000, // Yearly savings budget
  });
  const [totalExpenses] = useState(7000);
  const [savings, setSavings] = useState<{ [key in BudgetType]: number }>({
    daily: 0,
    weekly: 0,
    monthly: 0,
    yearly: 0,
  });

  const navigate = useNavigate();

  useEffect(() => {
    // Calculate savings for each period
    setSavings({
      daily: budget.daily - totalExpenses,
      weekly: budget.weekly - totalExpenses,
      monthly: budget.monthly - totalExpenses,
      yearly: budget.yearly - totalExpenses,
    });
  }, [budget, totalExpenses]);

  const handleNavigateBack = () => {
    navigate('/Budgeting');
  };

  const handleViewCharts = () => {
    navigate('/charts'); // Navigate to the chart page
  };

  return (
    <div style={styles.pageContainer}>
      <div style={styles.container}>
        {/* Part 1: Image Section */}
        <div style={styles.imageContainer}>
          <img
            src="img16.jpg" // Replace with the actual path to img16
            alt="Savings"
            style={styles.image}
          />
        </div>

        {/* Part 2: Content Container */}
        <div style={styles.infoContainer}>
          <h2 style={styles.heading}>Here is your Savings!</h2>

          {/* Savings Containers */}
          <div style={styles.savingsWrapper}>
            <div style={styles.savingsItem}>
              <span style={styles.savingsLabel}>Daily Savings: </span>
              <span style={styles.savingsAmount}>₹{savings.daily}</span>
            </div>
            <div style={styles.savingsItem}>
              <span style={styles.savingsLabel}>Weekly Savings: </span>
              <span style={styles.savingsAmount}>₹{savings.weekly}</span>
            </div>
            <div style={styles.savingsItem}>
              <span style={styles.savingsLabel}>Monthly Savings: </span>
              <span style={styles.savingsAmount}>₹{savings.monthly}</span>
            </div>
            <div style={styles.savingsItem}>
              <span style={styles.savingsLabel}>Yearly Savings: </span>
              <span style={styles.savingsAmount}>₹{savings.yearly}</span>
            </div>
          </div>

          {/* Navigation and Chart buttons */}
          <div style={styles.navigationButtons}>
            <button style={styles.navButton} onClick={handleNavigateBack}>
              Back to Budgeting
            </button>
            <button style={styles.navButton} onClick={handleViewCharts}>
              View Charts
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Styles
const styles = {
  pageContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f8f9fa',
  },
  container: {
    width: '80%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px',
    backgroundColor: 'white',
    textAlign: 'center' as 'center',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
  },
  infoContainer: {
    width: '60%',
  },
  heading: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '20px',
  },
  savingsWrapper: {
    marginBottom: '20px',
    display: 'flex',
    flexDirection: 'column' as 'column',
    alignItems: 'center',
  },
  savingsItem: {
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: '18px',
    marginBottom: '10px',
    width: '80%',
    padding: '10px',
    backgroundColor: '#e9ecef',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  },
  savingsLabel: {
    fontWeight: 'bold',
  },
  savingsAmount: {
    fontSize: '18px',
    fontWeight: 'bold',
    color: 'green',
  },
  navigationButtons: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    marginTop: '20px',
  },
  navButton: {
    padding: '10px',
    fontSize: '16px',
    cursor: 'pointer',
    backgroundColor: '#3498db',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    transition: '0.3s',
    margin: '0 10px',
  },
  imageContainer: {
    width: '30%',
    padding: '20px',
    border: '2px solid #ddd',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 'auto',
    borderRadius: '8px',
  },
};

export default Saving;
