/* global fetchAPI, submitAPI */
import React from "react";
import { useReducer, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";
import Hero from "./Hero";
import Specials from "./Specials";
import CustomersSay from "./CustomersSay";
import BookingPage from "./BookingPage";

const initializeTimes = () => {
    const today = new Date();
    console.log("Fetching times for date: ", today);
    try {
        const times = fetchAPI(today);
        return times;
    } catch (error) {
        console.error("Error fetching times:", error);
        return [];
    }
};

const timesReducer = (state, action) => {
    switch (action.type) {
        case 'SET_TIMES':
            return action.times;
        default:
            return state;
    }
};

function Main( {showBooking} ) {
    const [selectedDate, setSelectedDate] = useState("");
    const [availableTimes, dispatch] = useReducer(timesReducer, [], initializeTimes);
    const navigate = useNavigate();

    const submitForm = (formData) => {
        return submitAPI(formData);
    };

    const updateTimes = (dateStr) => {
        try {
            const date = new Date(dateStr);
            console.log("Fetching times for date:", date);
            const times = fetchAPI(date);
            console.log("Received times:", times);
            dispatch({ type: 'SET_TIMES', times });
        } catch (error) {
            console.error("Error fetching times:", error);
        }
    };

    useEffect(() => {
        if (!selectedDate) {
            const today = new Date().toISOString().split('T')[0];
            setSelectedDate(today);
            updateTimes(today);
        } else {
            updateTimes(selectedDate);
        }
    }, [selectedDate]);

    if (showBooking) {
        return (
            <BookingPage
                availableTimes={availableTimes}
                updateTimes={updateTimes}
                selectedDate={selectedDate}
                setSelectedDate={setSelectedDate}
                submitForm={submitForm}
            />
        );
    }

    return (
        <main>
            <Hero />
            <Specials/>
            <CustomersSay />
        </main>
    );
}

export default Main;
