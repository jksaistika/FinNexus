import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Correct way

type BudgetType = 'daily' | 'weekly' | 'monthly';

const Saving: React.FC = () => {
  const [budget, setBudget] = useState<{ daily: number; weekly: number; monthly: number }>({
    daily: 0,
    weekly: 0,
    monthly: 0,
  });
  const [totalExpenses, setTotalExpenses] = useState(0);
  const [savings, setSavings] = useState(0);
  const [activeBudget, setActiveBudget] = useState<BudgetType>('daily');

  const navigate = useNavigate(); // Use useNavigate for navigation in React Router v6

  useEffect(() => {
    const storedBudgets = ['daily', 'weekly', 'monthly'].reduce((acc, period) => {
      const value = localStorage.getItem(`${period}Budget`);
      if (value) acc[period as BudgetType] = parseFloat(value);
      return acc;
    }, {} as { daily: number; weekly: number; monthly: number });

    const expenses = localStorage.getItem('expenses');
    const total = expenses
      ? JSON.parse(expenses).reduce((acc: number, { amount }: any) => acc + parseFloat(amount), 0)
      : 0;

    setBudget(storedBudgets);
    setTotalExpenses(total);
  }, []);

  useEffect(() => {
    setSavings(Object.values(budget).reduce((acc, val) => acc + val, 0) - totalExpenses);
  }, [budget, totalExpenses]);

  const handleBudgetChange = (period: BudgetType) => {
    setActiveBudget(period);
  };

  const handleNavigateBack = () => {
    navigate('/budgeting'); // Navigate back to Budgeting page
  };

  const handleNavigateNext = () => {
    // Add navigation logic here if needed
  };

  return (
    <div style={styles.container}>
      {/* Image Section on the left side */}
      <div style={styles.imageContainer}>
        <img src="img16.jpg" alt="Savings" style={styles.image} />
      </div>

      {/* Content Section on the right side */}
      <div style={styles.infoContainer}>
        <h2 style={styles.heading}>Here is your Saving!</h2>

        {/* Displaying daily, weekly, and monthly savings in rectangles vertically */}
        <div style={styles.savingsContainer}>
          {['daily', 'weekly', 'monthly'].map((period) => (
            <div key={period} style={styles.savingsRectangle}>
              <h3 style={styles.savingsText}>₹{budget[period as BudgetType] - totalExpenses}</h3> {/* Show remaining after expenses */}
            </div>
          ))}
        </div>

        {/* Display daily, weekly, monthly labels outside the savings container */}
        <div style={styles.periodContainer}>
          {['daily', 'weekly', 'monthly'].map((period) => (
            <button
              key={period}
              style={styles.periodButton}
              onClick={() => handleBudgetChange(period as BudgetType)} // Correct type assertion here
            >
              {period.charAt(0).toUpperCase() + period.slice(1)}
            </button>
          ))}
        </div>

        {/* Total Expenses */}
        <h2 style={styles.totalExpenses}>Total Expenses: ₹{totalExpenses}</h2>

        {/* Message based on Savings */}
        <p style={{ color: savings < 0 ? 'red' : 'green' }}>
          {savings < 0 ? 'You have overspent your budget!' : 'You are within your budget!'}
        </p>

        {/* Navigation buttons */}
        <div style={styles.navigationButtons}>
          <button style={styles.navButton} onClick={handleNavigateBack}>Back to Budgeting</button>
          <button style={styles.navButton} onClick={handleNavigateNext}>Next</button>
        </div>
      </div>
    </div>
  );
};

// Styles
const styles = {
  container: {
    display: 'flex',
    justifyContent: 'space-between', // Align content and image side by side
    alignItems: 'center', // Vertically align the content in the middle
    margin: '20px',
    width: '90%', // Take full width of the parent container
    height: 'auto',
  },
  imageContainer: {
    width: '45%', // Image container takes 45% width
    maxWidth: '150px',
  },
  image: {
    width: '400%',
    height: 'auto',
    objectFit: 'cover' as 'cover', // Correctly typing objectFit
    borderRadius: '8px',
  },
  infoContainer: {
    width: '45%', // Content container takes 45% width
    display: 'flex',
    flexDirection: 'column' as 'column', // Correctly typing flexDirection here too
    alignItems: 'center', // Center all content inside this container
    justifyContent: 'center',
    padding: '20px',
    backgroundColor: 'white',
    color: 'black',
    textAlign: 'center' as 'center', // Correcting textAlign type to 'center'
    border: '4px solid black',
    borderRadius: '8px',
    height: 'auto',
  },
  heading: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '20px',
  },
  savingsContainer: {
    display: 'flex',
    flexDirection: 'column' as 'column', // Correctly typing flexDirection here too
    justifyContent: 'center',
    alignItems: 'center', // Center rectangles horizontally
    gap: '15px',
    marginBottom: '30px',
  },
  savingsRectangle: {
    width: '100px',
    height: '50px',
    backgroundColor: 'transparent', // Transparent background
    display: 'flex',
    flexDirection: 'column' as 'column', // Correctly typing flexDirection here too
    justifyContent: 'center',
    alignItems: 'center',
    color: 'black', // Text color
    borderRadius: '8px',
    border: '2px solid black', // Optional: add border to define the rectangle
  },
  savingsText: {
    fontSize: '16px',
    fontWeight: 'bold',
  },
  periodContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: '20px',
  },
  periodButton: {
    padding: '10px',
    fontSize: '14px',
    cursor: 'pointer',
    backgroundColor: 'lightgray',
    border: 'none',
    borderRadius: '8px',
    transition: '0.3s',
  },
  totalExpenses: {
    fontSize: '20px',
    marginBottom: '15px',
  },
  navigationButtons: {
    display: 'flex',
    justifyContent: 'space-between',
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
  },
};

export default Saving;
