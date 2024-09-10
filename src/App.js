// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import CardCreator from './components/CardCreator';
import CardDisplay from './components/CardDisplay';
import MyCards from './components/MyCards';
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/share/:uniqueId" element={<CardDisplay />} />
        <Route
          path="*"
          element={
            <>
              <Navbar />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/create" element={<CardCreator />} />
                <Route path="/my-cards" element={<MyCards />} />
              </Routes>
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;