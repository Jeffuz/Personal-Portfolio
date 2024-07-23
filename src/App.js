import "./App.css";
import React, { useEffect } from "react";
import Navbar from "./components/navbar";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/home";
import ReactGA from "react-ga";

const TRACKING_ID = "G-0GK5L2X0C6";

function App() {
  const location = useLocation();

  useEffect(() => {
    ReactGA.initialize(TRACKING_ID);
  }, []);

  useEffect(() => {
    ReactGA.set({ page: location.pathname });
    ReactGA.pageview(location.pathname);
  }, [location]);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
