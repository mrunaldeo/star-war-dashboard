// components/Menu/DropdownMenu.js
import React from 'react';

const DropdownMenu = ({ options, onSelect }) => {
  return (
    <div className="dropdown-menu">
      <select onChange={(e) => onSelect(e.target.value)}>
        {options && options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DropdownMenu;
