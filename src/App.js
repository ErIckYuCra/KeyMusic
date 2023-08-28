
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import MenuRoutes from './components/menu/MenuRoutes';
import NavBar from './components/menu/NavBar';
import NavSearch from './components/search/NavSearch';
import ContentGlobal from './components/content/ContentGlobal';
import React from 'react';

function App() {

  return (
    <div id='contenedor'>


        <BrowserRouter>


          <NavSearch></NavSearch>
          <ContentGlobal></ContentGlobal>

          <NavBar></NavBar>
          <MenuRoutes></MenuRoutes>

        </BrowserRouter>





    </div>
  );
}

export default App;


