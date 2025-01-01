import React from 'react';
import { Link } from 'react-router-dom';
import './MicroInvestment.css'; // Make sure to link to your CSS file

const MicroInvestment: React.FC = () => {
  return (
    <div className="micro-investment-container">
      <div className="image-container">
        <h2>Micro-Investment Plans</h2>
        <img src="img17.jpg" alt="Investment Plans" className="investment-image" />
      </div>
      <div className="content-container">
        <p>Choose an option to proceed:</p>
        <div className="button-container">
          <Link to="/view-plans">
            <button className="nav-button">View Plans</button>
          </Link>
          <Link to="/register-plan">
            <button className="nav-button">Register Plan</button>
          </Link>
        </div>
      </div>
      {/* Add the Go Back button */}
      <Link to="/">
        <button className="go-back-button">Go Back</button>
      </Link>
    </div>
  );
};

export default MicroInvestment;
