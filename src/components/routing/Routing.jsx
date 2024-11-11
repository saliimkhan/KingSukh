// src/components/routing/Routing.jsx
import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Home";
import About from "../Gallery";
import Contact from "../Contact";
import Gallery from "../Gallery";

const Routing = () => {
  return (
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    
  );
};

export default Routing;
