// components/Sidebar/SpeciesSidebar.js
import React, { useState, useEffect } from 'react';
import { getSpeciesDetails } from '../../services/swapi';

const SpeciesSidebar = ({ speciesId }) => {
  const [speciesDetails, setSpeciesDetails] = useState(null);

  useEffect(() => {
    getSpeciesDetails(speciesId).then((data) => {
      setSpeciesDetails(data);
    });
  }, [speciesId]);

  if (!speciesDetails) {
    return null; // Handle loading state or render an empty sidebar
  }

  return (
    <div className="species-sidebar">
      <h2>{speciesDetails.name}</h2>
      <p>Homeworld: {speciesDetails.homeworld}</p>
      <p>Lifespan: {speciesDetails.lifespan}</p>
      {/* Add more details as needed */}
    </div>
  );
};

export default SpeciesSidebar;
