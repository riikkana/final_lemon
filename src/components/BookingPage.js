/* global submitAPI */
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

function BookingPage({ availableTimes, updateTimes, selectedDate, setSelectedDate, submitForm }) {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [time, setTime] = useState("");
    const [people, setPeople] = useState(1);
    const [occasion, setOccasion] = useState("");

    useEffect(() => {
        if (selectedDate) {
            console.log("BookingPage: updating times for date:", selectedDate);
            updateTimes(selectedDate);
        }
    }, [selectedDate, updateTimes]);

    const handleDateChange = (e) => {
        const newDate = e.target.value;
        setSelectedDate(newDate);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = {
            name: name,
            time: time,
            people: people,
            occasion: occasion,
            date: selectedDate
        };

        if (submitForm(formData)) {
            alert(`Reservation confirmed!\n\n` +
                `Name: ${name}\n` +
                `Date: ${selectedDate}\n` +
                `Time: ${time}\n` +
                `Number of people: ${people}\n` +
                `Occasion: ${occasion}`);

            setName("");
            setTime("");
            setPeople(1);
            setOccasion("");

            window.location.href = "/confirmed";
        } else {
            alert("Something went wrong with your reservation. Please try again.");
        }
    };

    return (
        <section className="booking">
            <h2>Book a Table</h2>
            <form
                style={{ display: 'grid', maxWidth: '200px', gap: '20px' }}
                onSubmit={handleSubmit}
            >
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />

                <label htmlFor="res-date">Choose date</label>
                <input
                    type="date"
                    id="res-date"
                    value={selectedDate}
                    onChange={handleDateChange}
                    required
                />

                <label htmlFor="res-time">Choose time</label>
                <select
                    id="res-time"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    required
                >
                    <option value="">Select Time</option>
                    {availableTimes && availableTimes.length > 0 ? (
                        availableTimes.map((availableTime, index) => (
                            <option key={index} value={availableTime}>
                                {availableTime}
                            </option>
                        ))
                    ) : (
                        <option disabled>No available times</option>
                    )}
                </select>

                <label htmlFor="guests">Number of guests</label>
                <input
                    type="number"
                    id="guests"
                    value={people}
                    onChange={(e) => setPeople(e.target.value)}
                    placeholder="1"
                    min="1"
                    max="10"
                    required
                />

                <label htmlFor="occasion">Occasion</label>
                <select
                    id="occasion"
                    value={occasion}
                    onChange={(e) => setOccasion(e.target.value)}
                >
                    <option value="">Select Occasion</option>
                    <option value="Birthday">Birthday</option>
                    <option value="Anniversary">Anniversary</option>
                </select>

                <input
                    type="submit"
                    value="Make Your reservation"
                    aria-label="Make your reservation"
                />
            </form>
        </section>
    );
}


export default BookingPage;


{/* 
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
</form>  */}