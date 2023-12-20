// components/Dashboard/VehiclesList.js
import React, { useState, useEffect } from 'react';
import ListItem from '../Common/ListItem';
import { getVehicles } from '../../services/swapi';

const VehiclesList = () => {
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    getVehicles().then((data) => {
      setVehicles(data.results);
    });
  }, []);

  return (
    <div className="vehicles-list">
      {vehicles.map((vehicle) => (
        <ListItem key={vehicle.name} title={vehicle.name} />
      ))}
    </div>
  );
};

export default VehiclesList;
