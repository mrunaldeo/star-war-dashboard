// components/Sidebar/PeopleSidebar.js
import React, { useState, useEffect } from 'react';
import { getPeopleDetails } from '../../services/swapi';

const PeopleSidebar = ({ personId }) => {
  const [peopleDetails, setPeopleDetails] = useState(null);

  useEffect(() => {
    getPeopleDetails(personId).then((data) => {
      setPeopleDetails(data);
    });
  }, [personId]);

  if (!peopleDetails) {
    return null; // Handle loading state or render an empty sidebar
  }

  return (
    <div className="people-sidebar">
      <h2>{peopleDetails.name}</h2>
      <p>Birthdate: {peopleDetails.birth_year}</p>
      <p>Species: {peopleDetails.species}</p>
      {/* Add more details as needed */}
    </div>
  );
};

export default PeopleSidebar;
