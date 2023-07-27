import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import {
  BrowserRouter,
  Routes,
  Route,
}from 'react-router-dom';
import Navbar from './componentes/NavBar';
import ItemListContainer from './componentes/Home';
import Catalogo from './componentes/Catalogo';
import './App.css'

function App() {
  

  return (
    <BrowserRouter>
     <Navbar/>
     <Routes>

        <Route
          exact
          path="/"
          element={<ItemListContainer/>} />

          <Route
          exact
          path="category"
          element={<Catalogo/>} />

     </Routes>

     <footer>
      soy footer
     </footer>
    </BrowserRouter>
  )
}

export default App


