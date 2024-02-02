import './App.css';
import React from 'react';
import Navbar from './components/navbar';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';

function App() {
  return (
    <>
      <HashRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}/>
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
