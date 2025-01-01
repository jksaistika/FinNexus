import React from 'react';
import SchemeList from './SchemeList';

const governmentSchemes = {
  'Women Empowerment': [
    {
      name: 'Mahatma Gandhi National Rural Employment Guarantee Act (MGNREGA)',
      description: 'Provides wage employment for adult members of rural families.',
      link: '#',
    },
    // Add more schemes here...
  ],
  'Scholarships for Students': [
    {
      name: 'Central Sector Scheme of Scholarships for College and University Students',
      description: 'Provides financial assistance to students for higher education.',
      link: '#',
    },
    // Add more schemes here...
  ],
  'Small-Scale Business Schemes': [
    {
      name: 'Prime Minister’s Employment Generation Programme (PMEGP)',
      description: 'Provides financial assistance to promote small-scale industries.',
      link: '#',
    },
    // Add more schemes here...
  ],
};

const GovernmentSchemes: React.FC = () => {
  return (
    <div>
      <h1>Government Schemes</h1>
      {Object.entries(governmentSchemes).map(([category, schemes], index) => (
        <SchemeList key={index} title={category} schemes={schemes} />
      ))}
    </div>
  );
};

export default GovernmentSchemes;
