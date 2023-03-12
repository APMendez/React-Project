import React, { useContext } from "react";
import { AppBar, Container, Toolbar } from "@mui/material";
import { Link } from "react-router-dom";
import "./styles.css";

import { ItemsContext } from "../../context";

const styles = {
    linkButton: {
        textDecoration: "none",
        color: "white",
        fontSize: 18,
        fontWeight: "bold",
    },
    purchaseButton: {
        color: "grey",
        fontSize: 18,
        fontWeight: "bold",
    },
};

const ResponsiveNavigation = ({logo}) => {
    const [items] = useContext(ItemsContext);

    return (
        <AppBar position="static" className="ResponsiveNavigation">
            <Container maxWidth="xl">
                <Toolbar
                    disableGutters
                    className="ResponsiveNavigationContainer"
                >
                    <Link to="/" className="logo">
                        {logo}    
                    </Link>
                    <Link to="/" style={styles.linkButton}>
                        Music Store
                    </Link>
                    <Link to="/conocenos" style={styles.linkButton}>
                        About
                    </Link>
                    <Link to="/contacto" style={styles.linkButton}>
                        Contact
                    </Link>
                    <Link to="/cart" style={styles.linkButton}>
                        <i className="fa-solid fa-cart-shopping"></i>
                        {items.length}
                    </Link>
                </Toolbar>
            </Container>
        </AppBar>
    );
};
export default ResponsiveNavigation;
