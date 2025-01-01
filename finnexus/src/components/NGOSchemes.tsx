import React from 'react';
import SchemeList from './SchemeList';

const ngoSchemes = {
  'Women Empowerment': [
    {
      name: 'SEWA (Self Employed Women’s Association)',
      description: 'Empowers women through community-based development programs.',
      link: '#',
    },
    // Add more schemes here...
  ],
  'Scholarships for Students': [
    {
      name: 'The L’Oréal Foundation For Women In Science Program',
      description: 'Supports women scientists with grants for their projects.',
      link: '#',
    },
    // Add more schemes here...
  ],
  'Small-Scale Business Schemes': [
    {
      name: 'UNDP Small Enterprise Development Programme',
      description: 'Assists small businesses through financial and training support.',
      link: '#',
    },
    // Add more schemes here...
  ],
};

const NGOSchemes: React.FC = () => {
  return (
    <div>
      <h1>NGO Schemes</h1>
      {Object.entries(ngoSchemes).map(([category, schemes], index) => (
        <SchemeList key={index} title={category} schemes={schemes} />
      ))}
    </div>
  );
};

export default NGOSchemes;
