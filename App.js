// // App.js
// import React from 'react';
// import Dashboard from './components/Dashboard/Dashboard';
// import Menu from './components/Menu/DropdownMenu';
// import Sidebar from './components/Sidebar/Sidebar';
// import PeopleList from './components/Dashboard/PeopleList';
// import PlanetsList from './components/Dashboard/PlanetsList';
// import SpeciesList from './components/Dashboard/SpeciesList';
// //import StarshipsList from './components/Dashboard/StarshipsList';
// import StarshipsList from './components/Dashboard/StarshipsList';
// import VehiclesList from './components/Dashboard/VehiclesList';
// import FilmList from './components/Dashboard/FilmList';

// const App = () => {
//   return (
//     <div>
//       <Menu /> {/* Adjust this based on your actual menu component */}
//       <main>
//         <Dashboard>
//           <FilmList/>
//           <PeopleList />
//           <PlanetsList />
//           <SpeciesList />
//           <StarshipsList />
//           <VehiclesList />
//           {/* Add other category components here */}
//         </Dashboard>
//         <Sidebar /> {/* Adjust this based on your actual sidebar component */}
//       </main>
//     </div>
//   );
// };

// export default App;
// App.js
// App.js
import React from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import Menu from './components/Menu/DropdownMenu';
import Dashboard from './components/Dashboard/Dashboard';
import VehiclesSidebar from './components/Sidebar/VehiclesSidebar'; // Keep this line
import FilmList from './components/Dashboard/FilmList'; // Add this line
import PeopleList from './components/Dashboard/PeopleList';
import PlanetsList from './components/Dashboard/PlanetsList';
import SpeciesList from './components/Dashboard/SpeciesList';
import StarshipsList from './components/Dashboard/StarshipList';
import VehiclesList from './components/Dashboard/VehiclesList';

const App = () => {
  return (
    <div>
      <Menu />
      <main>
        <Dashboard>
          <FilmList /> {/* Use FilmList component here */}
          <PeopleList />
          <PlanetsList />
          <SpeciesList />
          <StarshipsList />
          <VehiclesList />
          {/* Add other category components here */}
        </Dashboard>
        <Sidebar>
          <VehiclesSidebar />
        </Sidebar>
      </main>
    </div>
  );
};

export default App;
