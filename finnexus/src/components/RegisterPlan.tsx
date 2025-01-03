import React, { useState } from 'react';

// Example micro-investment plans data
const microInvestmentPlans = [
  { name: 'Plan A', minBudget: 5000, returns: '5% annually' },
  { name: 'Plan B', minBudget: 10000, returns: '7% annually' },
  { name: 'Plan C', minBudget: 20000, returns: '10% annually' },
  { name: 'Plan D', minBudget: 15000, returns: '8% annually' },
];

const RegisterPlan: React.FC = () => {
  const [budget, setBudget] = useState('');
  const [years, setYears] = useState('');
  const [packageAmount, setPackageAmount] = useState('');
  const [savingsResult, setSavingsResult] = useState<string | null>(null);
  const [filteredPlans, setFilteredPlans] = useState<
    { name: string; minBudget: number; returns: string }[]
  >([]);

  const calculateSavings = () => {
    const budgetNum = parseFloat(budget);
    const yearsNum = parseInt(years, 10);
    const packageNum = parseFloat(packageAmount);

    if (isNaN(budgetNum) || isNaN(yearsNum) || isNaN(packageNum)) {
      alert('Please enter valid numeric values!');
      return;
    }

    // Calculate savings
    const savings = budgetNum * yearsNum - packageNum;
    setSavingsResult(`Your estimated savings are ₹${savings.toFixed(2)}`);

    // Filter plans based on budget
    const availablePlans = microInvestmentPlans.filter(
      (plan) => budgetNum >= plan.minBudget
    );
    setFilteredPlans(availablePlans);
  };

  return (
    <div
      style={{
        fontFamily: 'Arial, sans-serif',
        padding: '20px',
        maxWidth: '1200px',
        margin: '50px auto',
        backgroundColor: '#FFFFFF',
        display: 'flex',
        justifyContent: 'space-between', // Aligns the image and container side by side
        alignItems: 'flex-start', // Aligns the content to the top of the containers
      }}
    >
      {/* Part 1: Image Section */}
      <div
        style={{
          flex: 1,
          marginRight: '20px',
          textAlign: 'center',
        }}
      >
        <img
          src="/path/to/img19.jpg" // Replace with actual image path
          alt="Micro Investment Plan"
          style={{
            width: '90%', // Makes the image responsive
            borderRadius: '10px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          }}
        />
      </div>

      {/* Part 2: Container Section */}
      <div
        style={{
          flex: 1.5, // Makes the container take more space than the image
          border: '1px solid #000',
          borderRadius: '10px',
          padding: '20px',
          backgroundColor: '#f9f9f9',
        }}
      >
        {/* Savings Information Section */}
        <div
          style={{
            border: '1px solid #000',
            borderRadius: '10px',
            padding: '20px',
            marginBottom: '20px',
          }}
        >
          <h3 style={{ marginBottom: '10px' }}>Savings Information</h3>
          <p>Calculate your savings and explore investment plans based on your budget!</p>
        </div>

        {/* Calculate Your Savings Section */}
        <div
          style={{
            border: '1px solid #000',
            borderRadius: '10px',
            padding: '20px',
            marginBottom: '20px',
          }}
        >
          <h3 style={{ marginBottom: '10px' }}>Calculate Your Savings</h3>
          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="budget">Budget</label>
            <input
              type="number"
              id="budget"
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
              style={{
                display: 'block',
                margin: '10px auto',
                padding: '10px',
                borderRadius: '5px',
                border: '1px solid #000',
                width: '80%',
              }}
            />
          </div>
          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="years">Number of Years</label>
            <input
              type="number"
              id="years"
              value={years}
              onChange={(e) => setYears(e.target.value)}
              style={{
                display: 'block',
                margin: '10px auto',
                padding: '10px',
                borderRadius: '5px',
                border: '1px solid #000',
                width: '80%',
              }}
            />
          </div>
          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="package">Package Amount</label>
            <input
              type="number"
              id="package"
              value={packageAmount}
              onChange={(e) => setPackageAmount(e.target.value)}
              style={{
                display: 'block',
                margin: '10px auto',
                padding: '10px',
                borderRadius: '5px',
                border: '1px solid #000',
                width: '80%',
              }}
            />
          </div>
          <button
            onClick={calculateSavings}
            style={{
              padding: '10px 20px',
              borderRadius: '5px',
              border: 'none',
              backgroundColor: '#000',
              color: '#FFF',
              cursor: 'pointer',
            }}
          >
            Calculate
          </button>
        </div>

        {/* Result Section */}
        {savingsResult && (
          <div
            style={{
              border: '1px solid #000',
              borderRadius: '10px',
              padding: '20px',
              textAlign: 'center',
              marginBottom: '20px',
            }}
          >
            <h3 style={{ marginBottom: '10px' }}>Result</h3>
            <p style={{ color: '#000' }}>{savingsResult}</p>
          </div>
        )}

        {/* Display Plans Side by Side */}
        {filteredPlans.length > 0 && (
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              gap: '20px',
              marginBottom: '20px',
            }}
          >
            {filteredPlans.map((plan, index) => (
              <div
                key={index}
                style={{
                  border: '1px solid #000',
                  borderRadius: '10px',
                  padding: '20px',
                  width: '48%',
                }}
              >
                <h4>{plan.name}</h4>
                <p><strong>Minimum Budget:</strong> ₹{plan.minBudget}</p>
                <p><strong>Returns:</strong> {plan.returns}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default RegisterPlan;
