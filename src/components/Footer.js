import React from "react";
import "../App.css";
import flogo from "../assets/footer_logo.png";

function Footer() {

return (
    <footer className="footer">
    <div className="footer-image">
        <img src={flogo} alt="footer-logo" className="footer-image" />
    </div>
    <div className="footer-content">
        <p>Little Lemon © 2024</p>
        <p>Some footer text here</p>
    </div>
</footer>
);
}

export default Footer;
