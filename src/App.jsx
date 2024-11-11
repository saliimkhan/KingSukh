// src/App.js
import React from "react";
import Navbar from "./components/Navbar";
import Routing from "./components/routing/Routing"
import ServiceComponent from "./components/ServiceComponent";  // Add this component to display a map
import Footer from "./components/Footer";


const App = () => {
  return (
    <>
   
     <Navbar/>
     
      
      <div className="w-full min-h-screen bg-gray-100">
        
        <Routing/>
      </div>
      
      <ServiceComponent/>
      <Footer/>
    </>
  );
};

export default App;



