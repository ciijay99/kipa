import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Discover from './pages/Discover';
import Publication from './pages/Publication';
import Contact from './pages/Contact';
import Portal from './pages/Portal';

const App = () => {
  return (
  <>
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" exact element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/discover" element={<Discover />}/>
        <Route path="/publication" element={<Publication />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/portal" element={<Portal />}/>
      </Routes>
      <Footer/>
    </Router>
  </>
  )
};

export default App;
