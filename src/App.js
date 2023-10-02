import './App.css';
import React from 'react';
import { Routes, Route, HashRouter } from 'react-router-dom'

import Home from './pages/home';
import NoPage from './pages/NoPage';
import Experience from './pages/experience';
import Projects from './pages/projects';
import Resume from './pages/resume';
import Contact from './pages/contact';
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <HashRouter>
        <Navbar />
        <Routes>
          <Route index element={<Home />} />
          <Route path='/' element={<Home />} />
          <Route path="/Personal-Portfolio" element={< Home />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
