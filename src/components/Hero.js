import React from "react";
import "../App.css";
import { Link, Navigate } from "react-router-dom";

function Hero() {
    return (
        <section className="hero">
            <div className="hero-text">
                <h1>Little Lemon</h1>
                <p>It's not pretty, but it works :D</p>
                <Link to="/booking">
                <button>Reserve a Table</button>
                </Link>
            </div>
            <div className="hero-image"></div>
        </section>
    );
}

export default Hero;
