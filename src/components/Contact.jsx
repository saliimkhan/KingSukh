
// export default ContactForm;
import React, { useState } from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope,FaInstagram } from "react-icons/fa";
const ContactPage = () => {
    const [formSubmitted, setFormSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormSubmitted(true);
    };

    return (
        <div className="flex h-screen bg-zinc-200 items-center justify-center">
            
            <div className="  w-full max-w-5xl bg-white rounded-lg shadow-lg p-8 md:flex">
                {/* Left Section: Contact Form */}
                {!formSubmitted ? (
                    <div className="md:w-1/2 md:pr-8">
                        <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
                        <p className="text-gray-600 mb-6">We'd love to hear from you! Please fill out the form below.</p>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label className="block text-gray-700 font-medium mb-2">Name</label>
                                <input type="text" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500" required />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 font-medium mb-2">Email</label>
                                <input type="email" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500" required />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 font-medium mb-2">Message</label>
                                <textarea className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500" rows="4" required></textarea>
                            </div>
                            <button type="submit" className="w-full bg-pink-500 text-white py-2 rounded-md font-semibold hover:bg-pink-600">
                                Send Message
                            </button>
                        </form>
                    </div>
                ) : (
                    // Right Section: Thank You Message
                    <div className="md:w-1/2 flex items-center justify-center">
                        <div className="text-center">
                            <h2 className="text-3xl font-semibold text-pink-500 mb-4">Thank You!</h2>
                            <p className="text-gray-600 mb-6">Your message has been sent successfully. We’ll get back to you shortly.</p>
                            <button onClick={() => setFormSubmitted(false)} className="bg-pink-500 text-white py-2 px-4 rounded-md font-semibold hover:bg-pink-600">
                                Send Another Message
                            </button>
                        </div>
                    </div>
                )}

                {/* Right Section: Contact Info */}
                <div className="md:w-1/2 mt-8 md:mt-0 md:pl-8 bg-pink-50 p-6 rounded-lg flex flex-col justify-center">
                    <h2 className="text-2xl font-semibold mb-4 text-pink-600">Contact Information</h2>
                    <p className="text-gray-600 mb-6">Reach out to us through the following contact details:</p>
                    <div className="flex items-center mb-4">
                        <FaMapMarkerAlt className="text-pink-500 text-xl mr-4" />
                        <div>
                            <p className="text-gray-700 font-medium">Address</p>
                            <p className="text-gray-600">Beside Barshal Water Tank,
Manpur, Barhanti,
West Bengal 723156</p>
                        </div>
                    </div>
                    <div className="flex items-center mb-4">
                        <FaPhoneAlt className="text-pink-500 text-xl mr-4" />
                        <div>
                            <p className="text-gray-700 font-medium">Phone</p>
                            <p className="text-gray-600">+91 9007062180</p>
                        </div>
                    </div>
                    <div className="flex items-center mb-4">
                        <FaEnvelope className="text-pink-500 text-xl mr-4" />
                        <div>
                            <p className="text-gray-700 font-medium">Email</p>
                            <p className="text-gray-600">kkghosh0099@gmail.com</p>
                        </div>
                    </div>

                    {/* Social Media Section */}
                    <a href="https://www.instagram.com/kingsukhguesthouse/">
                    <div className="flex items-center mt-4">
                        
                        <FaInstagram className="text-pink-500 text-2xl mr-4" />
                        <div>
                            <p className="text-gray-700 font-medium">Instagram</p>
                            <p className="text-gray-600">@kingsukhguesthouse</p>
                        </div>
                    </div>
                    </a>
                    
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
