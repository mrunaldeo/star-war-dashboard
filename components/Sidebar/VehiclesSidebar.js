// components/Sidebar/VehiclesSidebar.js
import React, { useState, useEffect } from 'react';
import { getVehicleDetails } from '../../services/swapi'; // Update this import

const VehiclesSidebar = ({ vehicleId }) => {
  const [vehicleDetails, setVehicleDetails] = useState(null);

  useEffect(() => {
    getVehicleDetails(vehicleId).then((data) => {
      setVehicleDetails(data);
    });
  }, [vehicleId]);

  if (!vehicleDetails) {
    return null; // Handle loading state or render an empty sidebar
  }

  return (
    <div className="vehicle-sidebar">
      <h2>{vehicleDetails.name}</h2>
      {/* Add more details as needed */}
    </div>
  );
};

export default VehiclesSidebar;
