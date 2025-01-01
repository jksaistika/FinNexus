import React, { useState } from 'react';

const RegisterPlan: React.FC = () => {
  const [planName, setPlanName] = useState('');
  const [planDescription, setPlanDescription] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate registration logic
    console.log('Registered Plan:', { planName, planDescription });
    // You can integrate API calls here to save data
  };

  return (
    <div>
      <h3>Register a New Micro-Investment Plan</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="planName">Plan Name</label>
          <input
            type="text"
            id="planName"
            value={planName}
            onChange={(e) => setPlanName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="planDescription">Plan Description</label>
          <textarea
            id="planDescription"
            value={planDescription}
            onChange={(e) => setPlanDescription(e.target.value)}
            required
          />
        </div>
        <button type="submit">Register Plan</button>
      </form>
    </div>
  );
};

export default RegisterPlan;
