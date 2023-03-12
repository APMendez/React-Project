import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//COMPONENTS
import NavbarContainer from "./components/navbarContainer";

//PAGES
import Inicio from "./pages/Inicio";
import Conocenos from "./pages/Conocenos";
import Contacto from "./pages/Contacto";
import PlantDetail from "./pages/plantDetail";
import Cart from "./pages/Cart";
//CONTEXT
import { ItemsProvider } from "./context";
import { CartProvider } from "./context/cartContext";

function App() {
    return (
        <CartProvider>
            <BrowserRouter>
                <ItemsProvider>
                    <div className="App">
                        <NavbarContainer logo={"APICAL"} />
                        <Routes>
                            <Route path="/" element={<Inicio />} />
                            <Route path="/conocenos" element={<Conocenos />} />
                            <Route path="/contacto" element={<Contacto />} />
                            <Route
                                path="/detail/:id"
                                element={<PlantDetail />}
                            />
                            <Route path="/cart" element={<Cart />} />
                        </Routes>
                    </div>
                </ItemsProvider>
            </BrowserRouter>
        </CartProvider>
    );
}

export default App;
