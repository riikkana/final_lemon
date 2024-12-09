import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

function Hero() {
    return (
        <section className="hero">
            <div className="hero-text">
                <h1>Little Lemon</h1>
                <p>Text here and some more text here</p>
                <Link to="/booking">
                <button>Reserve a Table</button>
                </Link>
            </div>
            <div className="hero-image"></div>
        </section>
    );
}

export default Hero;
