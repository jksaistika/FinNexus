import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const SchemesPage: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    console.log('SchemesPage rendered'); // Check if it's being rendered
  }, []);

  const goToGovernmentSchemes = () => {
    console.log('Navigating to Government Schemes');
    navigate('/government-schemes');
  };

  const goToNGOSchemes = () => {
    console.log('Navigating to NGO Schemes');
    navigate('/ngo-schemes');
  };

  return (
    <div>
      <h1>Choose a Scheme Category</h1>
      <div>
        <button onClick={goToGovernmentSchemes}>Government Schemes</button>
        <button onClick={goToNGOSchemes}>NGO Schemes</button>
      </div>
    </div>
  );
};

export default SchemesPage;
