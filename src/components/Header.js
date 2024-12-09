import React from "react";
import logo from "../assets/y_logo.png";
import "../App.css";
import Nav from "./Nav";

function Header() {

return (
    <>
    <img src={logo} alt="Logo" className="logo" />
    <Nav />
    </>
);
}

export default Header;
