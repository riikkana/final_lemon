import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import ConfirmedBooking from './components/ConfirmedBooking';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from 'react';

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Main showBooking={false} />} />
          <Route path="/booking" element={<Main showBooking={true} />} />
          <Route path="/confirmed" element={<ConfirmedBooking />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;