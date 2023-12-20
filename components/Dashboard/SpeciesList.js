// components/Dashboard/SpeciesList.js
import React, { useState, useEffect } from 'react';
import ListItem from '../Common/ListItem';
import { getSpecies } from '../../services/swapi';

const SpeciesList = () => {
  const [species, setSpecies] = useState([]);

  useEffect(() => {
    getSpecies().then((data) => {
      setSpecies(data.results);
    });
  }, []);

  return (
    <div className="species-list">
      {species.map((specie) => (
        <ListItem key={specie.name} title={specie.name} />
      ))}
    </div>
  );
};

export default SpeciesList;
