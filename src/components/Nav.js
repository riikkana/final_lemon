import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

function Nav() {

return (
    <nav className="navbar">
        <Link to="/">Home</Link> 
        <Link to="/about">About</Link>
        <Link to="/menu">Menu</Link> 
        <Link to="/reservations">Reservations</Link> 
        <Link to="/order-online">Order Online</Link> 
        <Link to="/login">Login</Link> 
    </nav>
);
}

export default Nav;
