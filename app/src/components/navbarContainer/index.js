import React from "react";
import "./styles.css";
import { NavLink } from "react-router-dom";

const NavbarContainer = ({ logo, children }) => {
    return (
        <nav className="navbar">
            <NavLink to="/" className="logo">
                {logo}    
            </NavLink>
            <ul className="List-ul">
                <NavLink
                to="/"
                className="NavLink"
                >
                Inicio
                </NavLink>
                <NavLink
                to="/conocenos"
                className="NavLink"
                >
                Conocenos
                </NavLink>
                <NavLink
                to="/contacto"
                className="NavLink"
                >
                Contacto
                </NavLink>
            </ul>
            {children}
        </nav>
    );
};

export default NavbarContainer;
