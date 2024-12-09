import React, { useState } from "react";
import "../App.css";

function BookingPage() {
    const [name, setName] = useState("");
    const [time, setTime] = useState("");
    const [people, setPeople] = useState(1);

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Reservation for ${name} at ${time} for ${people} people`);
    };

    return (
        <section className="booking">
            <h2>Book a Table</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    type="time"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                />
                <input
                    type="number"
                    value={people}
                    onChange={(e) => setPeople(e.target.value)}
                    min="1"
                />
                <button type="submit">Reserve</button>
            </form>
        </section>
    );
}

export default BookingPage;
