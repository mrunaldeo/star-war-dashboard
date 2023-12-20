// components/Dashboard/PlanetsList.js
import React, { useState, useEffect } from 'react';
import ListItem from '../Common/ListItem';
import { getPlanets } from '../../services/swapi';

const PlanetsList = () => {
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    getPlanets().then((data) => {
      setPlanets(data.results);
    });
  }, []);

  return (
    <div className="planets-list">
      {planets.map((planet) => (
        <ListItem key={planet.name} title={planet.name} />
      ))}
    </div>
  );
};

export default PlanetsList;
