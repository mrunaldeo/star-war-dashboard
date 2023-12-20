// components/Dashboard/StarshipsList.js
import React, { useState, useEffect } from 'react';
import ListItem from '../Common/ListItem';
import { getStarships } from '../../services/swapi';

const StarshipsList = () => {
  const [starships, setStarships] = useState([]);

  useEffect(() => {
    getStarships().then((data) => {
      setStarships(data.results);
    });
  }, []);

  return (
    <div className="starships-list">
      {starships.map((starship) => (
        <ListItem key={starship.name} title={starship.name} />
      ))}
    </div>
  );
};

export default StarshipsList;
