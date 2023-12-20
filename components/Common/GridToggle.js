// components/Common/GridToggle.js
import React from 'react';

const GridToggle = ({ onToggle, isGrid }) => {
  return (
    <div className="grid-toggle">
      <label>
        <input type="checkbox" checked={isGrid} onChange={onToggle} />
        Grid View
      </label>
    </div>
  );
};

export default GridToggle;
