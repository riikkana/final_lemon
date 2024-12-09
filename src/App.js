import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import BookingPage from './components/BookingPage';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
import React from 'react';

function App() {
  return (
    <Router> 
      <Header /> 
        <main>
            <Routes> 
                <Route path="/" element={<Main />} /> 
                <Route path="/booking" element={<BookingPage />} />
            </Routes>
        </main>
      <Footer /> 
    </Router>
  );
}

export default App;
