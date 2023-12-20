import React from 'react';
const dashboardStyles = {
    backgroundColor: 'navy',
    color: 'white',
    // Add other styles as needed
  };

const Dashboard = ({ children }) => {
  return (
    <div className="dashboard">
      <h1>Star Wars Dashboard</h1>
      <div className="dashboard" style={dashboardStyles}>{children}</div>
    </div>
  );
};

export default Dashboard;
