import React from "react";
import { FiWifi, FiCoffee, FiTruck, FiClock } from "react-icons/fi"; // Feather Icons
import { MdRoomService, MdPool, MdDirectionsCar } from "react-icons/md"; // Material Design Icons
import { GiMountainCave, GiWeightLiftingUp } from "react-icons/gi"; // Game Icons

const ServiceComponent = () => {
  return (
    <div
      className="relative w-full h-screen bg-cover bg-center"
 // Path to image in public folder
    >
      <div className="absolute inset-0 bg-white opacity-50"></div> {/* Dark overlay */}
      
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-pink-600 p-6">
        <h2 className="text-4xl font-bold mb-4">Our Services at Kingsukh Guest House</h2>
        
        <p className="text-lg text-center mb-6 max-w-2xl">
          Enjoy the best hospitality at Kingsukh Guest House with top-notch services for a comfortable and memorable stay.
        </p>
        
        <ul className="space-y-4 text-lg max-w-xl text-center">
          <li className="flex items-center justify-center gap-2">
            <MdRoomService /> 24/7 Room Service
          </li>
          <li className="flex items-center justify-center gap-2">
            <FiWifi /> Free High-Speed Wi-Fi
          </li>
          <li className="flex items-center justify-center gap-2">
            <GiMountainCave /> Scenic Mountain Views
          </li>
          <li className="flex items-center justify-center gap-2">
            <FiCoffee /> Complimentary Breakfast
          </li>
          <li className="flex items-center justify-center gap-2">
            <MdDirectionsCar /> Free Parking
          </li>
          <li className="flex items-center justify-center gap-2">
            <MdPool /> Rooftop Pool Access
          </li>
          <li className="flex items-center justify-center gap-2">
            <GiWeightLiftingUp /> Fitness Center & Spa
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ServiceComponent;
