import './App.css';
import React from 'react';
import Me from './components/me';
import About from './components/about';
import Experience from './components/experience';
import Projects from './components/projects';

function App() {
  return (
    <>
      <div className='app_module_format mt-12'><Me/></div>
      <div className='app_module_format'><About/></div>
      <div className='app_module_format'><Experience/></div>
      <div className='app_module_format'><Projects/></div>
    </>
  );
}

export default App;
