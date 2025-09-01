import React from 'react';
import './StatCard.css'; // We'll create this for styling

const StatCard = ({ title, value }) => {
  return (
    <div className="stat-card">
      <h4 className="stat-card-title">{title}</h4>
      <p className="stat-card-value">{value}</p>
    </div>
  );
};

export default StatCard;