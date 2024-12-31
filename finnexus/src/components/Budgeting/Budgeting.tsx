import { Link } from 'react-router-dom';

const BudgetingSection: React.FC = () => {
  return (
    <Link to="/Budgeting" style={{ textDecoration: 'none' }}>
      {/* Budgeting Section */}
      <section style={{ marginBottom: '50px' }}>
        <h2 style={{ color: '#001f3f', fontSize: '32px', fontWeight: 'bold' }}>Budgeting</h2>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          {/* Image on the left */}
          <div style={{ flex: '1', padding: '20px' }}>
            <img 
              src="/img6.jpg" 
              alt="Budgeting Image" 
              style={{ width: '70%', height: 'auto', borderRadius: '8px' }} 
            />
          </div>

          {/* Content on the right */}
          <div style={{ flex: '1', padding: '20px' }}>
            <p style={{ color: '#333', fontSize: '20px', lineHeight: '1.6' }}>
              The <strong>Budgeting</strong> module helps users create and manage personal budgets with ease. It provides tools to track expenses, categorize spending, and set savings goals. The module includes various budgeting strategies, such as the 50/30/20 rule, and offers visual aids like charts to help users understand their financial situation. Users can monitor their monthly and yearly spending trends and adjust their budgets accordingly. This module also includes tips for reducing unnecessary expenses and achieving financial goals through efficient budgeting.
            </p>
          </div>
        </div>

        {/* Additional Budgeting Content */}
        <div style={{ marginTop: '40px' }}>
          <h3 style={{ color: '#001f3f', fontSize: '28px', fontWeight: 'bold' }}>How to Start Budgeting?</h3>
          <p style={{ color: '#333', fontSize: '20px', lineHeight: '1.6' }}>
            Starting a budget is the first step towards achieving financial stability. Begin by tracking your income and expenses to understand where your money is going. List your essential expenses, such as rent, utilities, and groceries, and set aside funds for savings or investments. From there, categorize your discretionary spending (like entertainment or dining out) and create limits to help manage these expenses. Use budgeting tools or apps that can automatically track your spending and provide reports to visualize where improvements can be made. Start small and make adjustments as you go to ensure your budget is sustainable.
          </p>
        </div>
      </section>
    </Link>
  );
};

export default BudgetingSection;
