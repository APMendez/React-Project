import React from 'react';
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import image from '../src/img/cart-widget.png';

//COMPONENTS
import CartWidget from './components/cart';
import NavbarContainer from './components/navbarContainer';


//PAGES
import Inicio from "./pages/Inicio";
import Conocenos from "./pages/Conocenos";
import Contacto from "./pages/Contacto";
import PlantDetail from './pages/plantDetail';
import Cart from './pages/Cart';



function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavbarContainer logo={"APICAL"}>
          <CartWidget amount={"0"} style={{backgroundImage: image}}/>
        </NavbarContainer>
        
        <Routes>
          <Route path="/" element={<Inicio/>} />
          <Route path="/conocenos" element={<Conocenos/>} />
          <Route path="/contacto" element={<Contacto/>} />
          <Route path='/detail/:id' element={<PlantDetail/>} />
          <Route path='/cart' element={<Cart/>}/>
        </Routes>  
    </div>
    </BrowserRouter>
    
  );
}

export default App;
