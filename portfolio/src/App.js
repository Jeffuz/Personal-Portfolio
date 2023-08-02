import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/home';
import NoPage from './pages/NoPage';
import Experience from './pages/experience';
import Projects from './pages/projects';
import Resume from './pages/resume';
import Contact from './pages/contact';

function App() {
  return (
    <div>
      <BrowserRouter basename="/Personal-Portfolio">
        <Routes>
          <Route index element={<Home />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
