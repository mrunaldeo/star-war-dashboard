// services/swapi.js
const BASE_URL = "https://swapi.dev/api/";

const fetchData = async (endpoint) => {
  const response = await fetch(`${BASE_URL}${endpoint}`);
  return response.json();
};

export const getFilms = () => fetchData("films/");
export const getPeople = () => fetchData("people/");
export const getPlanets = () => fetchData("planets/");
export const getSpecies = () => fetchData("species/");
export const getStarships = () => fetchData("starships/");
export const getVehicles = () => fetchData("vehicles/");

// New function for getting species details
export const getSpeciesDetails = async (speciesId) => {
  try {
    const response = await fetchData(`species/${speciesId}/`);
    return response;
  } catch (error) {
    console.error('Error fetching species details:', error);
    throw error;
  }
};
export const getVehicleDetails = (vehicleId) => fetchData(`vehicles/${vehicleId}/`);