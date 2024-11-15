import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/home.js';
import About from './pages/about.js';
import Contact from './pages/contact.js';
import Perfil from './pages/Perfil.js';




function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/contact">CADASTRO</Link>
            </li>
            <li>
              <Link to="/about">ESTUDOS</Link>
            </li>
            <li>
              <Link to="/">TREINO</Link>
            </li>
            <li>
              <Link to="/Perfil">PERFIL</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/Perfil" element={<Perfil />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

