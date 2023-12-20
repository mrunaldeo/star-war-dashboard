// components/Sidebar/PlanetsSidebar.js
import React, { useState, useEffect } from 'react';
import { getPlanetDetails } from '../../services/swapi';

const PlanetsSidebar = ({ planetId }) => {
  const [planetDetails, setPlanetDetails] = useState(null);

  useEffect(() => {
    getPlanetDetails(planetId).then((data) => {
      setPlanetDetails(data);
    });
  }, [planetId]);

  if (!planetDetails) {
    return null; // Handle loading state or render an empty sidebar
  }

  return (
    <div className="planets-sidebar">
      <h2>{planetDetails.name}</h2>
      <p>Climate: {planetDetails.climate}</p>
      <p>Gravity: {planetDetails.gravity}</p>
      {/* Add more details as needed */}
    </div>
  );
};

export default PlanetsSidebar;
