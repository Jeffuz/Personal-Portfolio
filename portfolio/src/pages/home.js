import Navbar from '../components/Navbar';
import About from '../components/about';
import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div>
            <Navbar/>
            <About/>
        </div>
    );
}
