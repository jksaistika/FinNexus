import React from 'react';

interface Scheme {
  name: string;
  description: string;
  link: string;
}

interface SchemeListProps {
  title: string;
  schemes: Scheme[];
}

const SchemeList: React.FC<SchemeListProps> = ({ title, schemes }) => {
  return (
    <div>
      <h2>{title}</h2>
      <div>
        {schemes.map((scheme, index) => (
          <div key={index} style={styles.schemeCard}>
            <h3>{scheme.name}</h3>
            <p>{scheme.description}</p>
            <a href={scheme.link} target="_blank" rel="noopener noreferrer">
              Learn More
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  schemeCard: {
    border: '1px solid #ddd',
    padding: '10px',
    margin: '10px 0',
    borderRadius: '5px',
    backgroundColor: '#f9f9f9',
  },
};

export default SchemeList;
