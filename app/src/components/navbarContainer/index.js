import React, { useContext } from "react";
import { AppBar, Container, Toolbar } from "@mui/material";
import { Link } from "react-router-dom";
import "./styles.css";

import { ItemsContext } from "../../context";
import { CartContext } from "../../context/cartContext";

const ResponsiveNavigation = ({logo}) => {
    const [cart, setCart] = useContext(CartContext);
    
    const quantity = cart.reduce((acc, curr) => {
        return acc + curr.quantity;
    }, 0);
    return (
        <AppBar position="static" className="ResponsiveNavigation">
            <Container maxWidth="xl">
                <Toolbar
                    disableGutters
                    className="ResponsiveNavigationContainer"
                >
                    <Link to="/" className="logo link">
                        {logo}    
                    </Link>
                    <Link to="/" className="link">
                        Catálogo
                    </Link>
                    <Link to="/conocenos" className="link">
                        Conocenos
                    </Link>
                    <Link to="/contacto" className="link">
                        Contacto
                    </Link>
                    <Link to="/cart" className="link">
                        <i className="fa-solid fa-cart-shopping"></i>
                        {quantity}
                    </Link>
                </Toolbar>
            </Container>
        </AppBar>
    );
};
export default ResponsiveNavigation;
