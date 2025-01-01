import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './ViewPlans.css'; // Importing the CSS file for styling

const ViewPlans: React.FC = () => {
  const [plans, setPlans] = useState<any[]>([]);

  useEffect(() => {
    // Fetching plans data (mock data for now)
    const fetchedPlans = [
      { 
        id: 1, 
        name: 'Plan 1', 
        description: 'A high-return investment plan with moderate risk. Ideal for investors looking for long-term growth.',
        benefits: ['High return rates', 'Moderate risk profile', 'Long-term growth potential'],
        eligibility: 'Anyone above 18 years with a valid bank account.',
        investmentAmount: 50000, // In rupees
        duration: 'Duration: 5 years',
      },
      { 
        id: 2, 
        name: 'Plan 2', 
        description: 'A balanced plan with a mix of equity and fixed-income assets. Suitable for investors looking for steady returns.',
        benefits: ['Balanced risk profile', 'Steady returns', 'Flexible withdrawal options'],
        eligibility: 'Anyone above 21 years with a stable income.',
        investmentAmount: 100000, // In rupees
        duration: 'Duration: 3 years',
      },
      { 
        id: 3, 
        name: 'Plan 3', 
        description: 'A short-term investment plan offering moderate returns with low risk.',
        benefits: ['Low risk', 'Moderate returns', 'Short-term duration'],
        eligibility: 'Anyone above 18 years.',
        investmentAmount: 20000, // In rupees
        duration: 'Duration: 1 year',
      },
      { 
        id: 4, 
        name: 'Plan 4', 
        description: 'An equity-based investment plan for aggressive investors seeking high returns.',
        benefits: ['High risk', 'Potential for high returns', 'Equity-based investment'],
        eligibility: 'Individuals with a high-risk tolerance.',
        investmentAmount: 200000, // In rupees
        duration: 'Duration: 5 years',
      },
      { 
        id: 5, 
        name: 'Plan 5', 
        description: 'A fixed-income investment plan for conservative investors seeking stability.',
        benefits: ['Low risk', 'Stable returns', 'Predictable income'],
        eligibility: 'Anyone looking for stable returns.',
        investmentAmount: 100000, // In rupees
        duration: 'Duration: 3 years',
      },
      { 
        id: 6, 
        name: 'Plan 6', 
        description: 'A flexible, medium-term investment plan with a balanced mix of assets.',
        benefits: ['Medium risk', 'Balanced portfolio', 'Flexible investment amounts'],
        eligibility: 'Anyone above 21 years.',
        investmentAmount: 30000, // In rupees
        duration: 'Duration: 2 years',
      },
      { 
        id: 7, 
        name: 'Plan 7', 
        description: 'A retirement-focused investment plan aimed at securing your future.',
        benefits: ['Long-term growth', 'Tax benefits', 'Retirement savings'],
        eligibility: 'Individuals looking to save for retirement.',
        investmentAmount: 100000, // In rupees
        duration: 'Duration: 10 years',
      },
      { 
        id: 8, 
        name: 'Plan 8', 
        description: 'A short-term investment plan with guaranteed returns over 6 months.',
        benefits: ['Guaranteed returns', 'Low risk', 'Short-term duration'],
        eligibility: 'Anyone above 18 years.',
        investmentAmount: 15000, // In rupees
        duration: 'Duration: 6 months',
      },
      { 
        id: 9, 
        name: 'Plan 9', 
        description: 'A global investment plan with high returns from international markets.',
        benefits: ['High returns', 'Diversified portfolio', 'Global exposure'],
        eligibility: 'Anyone above 25 years with a high-risk tolerance.',
        investmentAmount: 250000, // In rupees
        duration: 'Duration: 7 years',
      },
      { 
        id: 10, 
        name: 'Plan 10', 
        description: 'A green investment plan focused on eco-friendly projects.',
        benefits: ['Sustainable investments', 'Eco-friendly projects', 'Potential tax benefits'],
        eligibility: 'Anyone above 21 years interested in eco-friendly investments.',
        investmentAmount: 50000, // In rupees
        duration: 'Duration: 4 years',
      },
    ];
    setPlans(fetchedPlans);
  }, []);

  return (
    <div className="plans-container">
      <h3>Available Micro-Investment Plans</h3>
      <table className="plans-table">
        <thead>
          <tr>
            <th className="first-header">Plan Name</th>
            <th>Description</th>
            <th>Benefits</th>
            <th>Eligibility</th>
            <th>Minimum Investment</th>
            <th>Duration</th>
          </tr>
        </thead>
        <tbody>
          {plans.map(plan => (
            <tr key={plan.id}>
              <td>{plan.name}</td>
              <td>{plan.description}</td>
              <td>
                <ul>
                  {plan.benefits.map((benefit: string, index: number) => (
                    <li key={index}>{benefit}</li>
                  ))}
                </ul>
              </td>
              <td>{plan.eligibility}</td>
              <td>{`₹ ${plan.investmentAmount.toLocaleString()}`}</td>
              <td>{plan.duration}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link to="/micro-investment">
        <button className="go-back-button">Go Back</button>
      </Link>
    </div>
  );
};

export default ViewPlans;
