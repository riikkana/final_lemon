import React from "react";
import "../App.css";

function Main() {

return (
    <main>
    <header className="hero">
        <div className="hero-text">
            <h1>Little Lemon</h1>
            <p>Text here and some more text here</p>
            <button>Reserve a Table</button>
        </div>
        <div className="hero-image"></div>
    </header>

    <section className="features">
        <div className="feature-box"></div>
        <div className="feature-box"></div>
        <div className="feature-box"></div>
    </section>

    <section className="testimonials">
        <div className="testimonial"></div>
        <div className="testimonial"></div>
        <div className="testimonial"></div>
    </section>
</main>
);
}

export default Main;
