// import React from 'react';
// import Sidebar from './Sidebar'; // Adjust the path if Sidebar is in a different folder
// import Nav from './Nav';
// import Footer from './Footer';
// import ContactForm from './ContactForm';

// const App = () => {

//   return (
//     <div className="min-h-screen w-full flex p-2 bg-gray-50">
      {/* <Nav/> */}
      {/* Sidebar */}
      {/* <Sidebar /> */}
      {/* <ContactForm/> */}
      
      {/* Main Content */}
      {/* <div className="flex-1 bg-gray-100 p-8">
        <h1 className="text-2xl font-bold">Welcome to the App</h1>
        <p className="mt-4 text-gray-600">
          This is the main content area. You can add more content here.
        </p>
      </div> */}
      {/* <Footer/>
    </div>
  );
};

export default App; */}


import React from "react";
import { useSwipeable } from "react-swipeable";
import { FaTimes, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const ImageViewer = ({ images, selectedIndex, onClose, onChangeIndex }) => {
    const handlers = useSwipeable({
        onSwipedLeft: () => handleNext(),
        onSwipedRight: () => handlePrev(),
    });

    const handleNext = () => {
        onChangeIndex((selectedIndex + 1) % images.length);
    };

    const handlePrev = () => {
        onChangeIndex((selectedIndex - 1 + images.length) % images.length);
    };

    return (
        <div
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50"
            {...handlers}
        >
            <button
                onClick={onClose}
                className="absolute top-4 right-4 text-white text-3xl"
            >
                <FaTimes />
            </button>

            <button
                onClick={handlePrev}
                className="absolute left-4 text-white text-3xl"
            >
                <FaChevronLeft />
            </button>

            <img
                src={images[selectedIndex]}
                alt={`Image ${selectedIndex + 1}`}
                className="max-w-full max-h-full rounded-md"
            />

            <button
                onClick={handleNext}
                className="absolute right-4 text-white text-3xl"
            >
                <FaChevronRight />
            </button>
        </div>
    );
};

export default ImageViewer;
