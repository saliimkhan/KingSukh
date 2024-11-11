// src/components/Home.jsx
import React from "react";
import Ayodhya from "../assets/ayodhya_LE_auto_x4.jpg"

const Home = () => {
  return <div className="w-full h-screen">
    <div className="w-full h-screen">
    <img className="w-full h-full object-cover " src={Ayodhya} alt="" />
    </div>
  </div>;
};

export default Home;
