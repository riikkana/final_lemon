import React from "react";
import logo from "../assets/y_logo.png"
import "../App.css";

function Header() {

return (
    <div>
        <img src={logo} alt="Logo" className="logo" />
    </div>
);
}

export default Header;
