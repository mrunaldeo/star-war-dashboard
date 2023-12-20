import React, { useState, useEffect } from 'react';
import ListItem from '../Common/ListItem.js';
import DropdownMenu from '../Menu/DropdownMenu.js'; // Add this import
import GridToggle from '../Common/GridToggle.js';
import { getFilms } from '../../services/swapi.js';

const filmListStyles = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
  gap: '20px',
};

const FilmList = () => {
  const [films, setFilms] = useState([]);
  const [isGrid, setIsGrid] = useState(true);

  useEffect(() => {
    getFilms().then((data) => {
      setFilms(data.results);
    });
  }, []);

  const handleToggle = () => {
    setIsGrid(!isGrid);
  };

  return (
    <div className={`film-list ${isGrid ? 'grid-view' : 'list-view'}`}>
      {/* Use DropdownMenu component */}
      <DropdownMenu
        options={films.map((film, index) => ({
          value: index + 1,
          label: `Episode ${index + 1}: ${film.title}`,
        }))}
        onSelect={(value) => console.log(value)} // Add your logic for selecting a film
      />

      <GridToggle onToggle={handleToggle} isGrid={isGrid} />
      {films.map((film) => (
        <ListItem key={film.title} title={film.title} image={film.poster} />
      ))}
    </div>
  );
};

export default FilmList;
