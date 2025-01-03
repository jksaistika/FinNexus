import React from 'react';
import { Link } from 'react-router-dom';

const BudgetPage: React.FC = () => {
  return (
    <div>
      <h1>Budget Page</h1>
      <p>This is your Budget Page. You can set budgets here.</p>
      {/* Link to View Charts page */}
      <Link to="/view-charts">View Charts</Link>
    </div>
  );
};

export default BudgetPage;
