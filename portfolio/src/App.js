import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/home';
import NoPage from './pages/NoPage';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
