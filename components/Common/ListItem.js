// components/Common/ListItem.js
import React from 'react';

const ListItem = ({ title, image }) => {
  return (
    <div className="list-item">
      <img src={image} alt={title} />
      <p>{title}</p>
    </div>
  );
};

export default ListItem;
