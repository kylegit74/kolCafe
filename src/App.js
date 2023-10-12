import React from "react";
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min';
import '@fortawesome/fontawesome-svg-core/styles.css';
import About from './pages/AboutUs';
import Contact from './pages/ContactUs';
import Gallery from './pages/GalleryPage';
import Menu from './pages/MenuPage';
import Home from './pages/Home.js';



function App() {

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
    
   
  );
}

export default App;
