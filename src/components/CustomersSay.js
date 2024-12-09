import React from "react";
import "../App.css";

function CustomersSay() {
    return (
        <section className="testimonials">
            <h2>What Our Customers Say</h2>
            <div className="testimonial">
                <p>"Great food and amazing atmosphere!"</p>
                <p>- John Doe</p>
            </div>
            <div className="testimonial">
                <p>"I love the pizza here, best in town!"</p>
                <p>- Jane Smith</p>
            </div>
        </section>
    );
}

export default CustomersSay;
