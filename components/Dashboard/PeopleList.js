
// components/Dashboard/PeopleList.js
import React, { useState, useEffect } from 'react';
import ListItem from '../Common/ListItem';
import DropdownMenu from '../Menu/DropdownMenu';
import GridToggle from '../Common/GridToggle';
import { getPeople } from '../../services/swapi';

const peopleListStyles = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
  gap: '20px',
  // Add more styles as needed
};
const PeopleList = () => {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    getPeople().then((data) => {
      setPeople(data.results);
    });
  }, []);

  return (
    <div className="people-list">
      {people.map((person) => (
        <ListItem key={person.name} title={person.name} />
      ))}
    </div>
  );
};

export default PeopleList;
