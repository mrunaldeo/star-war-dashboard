// components/Sidebar/FilmSidebar.js
import React, { useState, useEffect } from 'react';

const FilmSidebar = ({ filmId }) => {
  const [filmDetails, setFilmDetails] = useState(null);

  useEffect(() => {
    // You can fetch film details using getFilms and filter the result based on filmId
    // Example: getFilms().then((films) => setFilmDetails(films.find(film => film.id === filmId)));
  }, [filmId]);

  if (!filmDetails) {
    return null; // Handle loading state or render an empty sidebar
  }

  return (
    <div className="film-sidebar">
      <h2>{filmDetails.title}</h2>
      <p>Director: {filmDetails.director}</p>
      <p>Release Date: {filmDetails.release_date}</p>
      {/* Add more details as needed */}
    </div>
  );
};

export default FilmSidebar;
