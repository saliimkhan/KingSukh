import React, { useState } from "react";
import ImageViewer from "./ImageViewer";


const Gallery = () => {
    const [selectedImageIndex, setSelectedImageIndex] = useState(null);
    const images = [
        "/images/image2.jpg",
        "/images/image13.webp",
        "/images/image1.webp",
        "/images/image3.jpg",
        "/images/image7.jpg",
        "/images/image11.jpg",
        "/images/image12.webp",
        "/images/image9.jpg",
        "/images/image4.webp",
        "/images/image8.jpg",
        "/images/image5.jpg",
        "/images/image6.jpg",
        "/images/image10.jpg",

    ];

    return (
        <>
        <h1 className="flex justify-center items-center mt-20 text-3xl text-pink-600 hover:underline">Gallery</h1>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 py-20 px-10">
            {images.map((image, index) => (
                <img
                    key={index}
                    src={image}
                    alt={`Gallery Image ${index + 1}`}
                    className="w-full h-auto cursor-pointer rounded-md"
                    onClick={() => setSelectedImageIndex(index)}
                />
            ))}
            {selectedImageIndex !== null && (
                <ImageViewer
                    images={images}
                    selectedIndex={selectedImageIndex}
                    onClose={() => setSelectedImageIndex(null)}
                    onChangeIndex={(newIndex) => setSelectedImageIndex(newIndex)}
                />
            )}
        </div>
        </>
    );
};

export default Gallery;
