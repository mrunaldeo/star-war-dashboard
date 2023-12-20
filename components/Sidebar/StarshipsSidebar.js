// components/Sidebar/StarshipsSidebar.js
import React, { useState, useEffect } from 'react';
import { getStarshipDetails } from '../../services/swapi';

const StarshipsSidebar = ({ starshipId }) => {
  const [starshipDetails, setStarshipDetails] = useState(null);

  useEffect(() => {
    getStarshipDetails(starshipId).then((data) => {
      setStarshipDetails(data);
    });
  }, [starshipId]);

  if (!starshipDetails) {
    return null; // Handle loading state or render an empty sidebar
  }

  return (
    <div className="starships-sidebar">
      <h2>{starshipDetails.name}</h2>
      <p>Model: {starshipDetails.model}</p>
      <p>Hyperdrive Rating: {starshipDetails.hyperdrive_rating}</p>
      {/* Add more details as needed */}
    </div>
  );
};

export default StarshipsSidebar;
