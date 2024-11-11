
import React from "react";
import Insta from "../assets/instagram.png"
import Face from "../assets/facebook.png"
import Twit from "../assets/twitter.png"
import Yout from "../assets/youtube.png"
const Footer = () => {
    return (
        <footer className="py-10 px-6 bg-gray-900 text-gray-400 ">
            <div className="max-w-7xl mx-auto mt-10 grid grid-cols-1 md:grid-cols-4 gap-8">
                {/* Tools Section */}
                <div>
                    <h2 className="text-white font-semibold mb-4">KingSukh Guest House</h2>

                    <p className="hover:text-white">"Experience unmatched comfort, luxury, and adventure at KingSukh Guest House—where every moment becomes extraordinary."</p>
                    
                </div>

                {/* Information Section */}
                <div>
                    <h2 className="text-white font-semibold mb-4">Quick Links </h2>
                    <ul className="space-y-2">
                        <li><a href="#" className="hover:text-white">Browse Destinations</a></li>
                        <li><a href="#" className="hover:text-white">Special Offers & Packages</a></li>
                        <li><a href="#" className="hover:text-white">Customer Reviews & Ratings</a></li>
                        <li><a href="#" className="hover:text-white">Room Types & Amenities</a></li>
                        <li><a href="#" className="hover:text-white">Travel Tips & Guides</a></li>
                        <li><a href="#" className="hover:text-white">Freepik brand guidelines</a></li>
                    </ul>
                </div>

                {/* Legal Section */}
                <div>
                    <h2 className="text-white font-semibold mb-4">OUR SERVICES</h2>
                    <ul className="space-y-2">
                        <li><a href="#" className="hover:text-white">Terms of use</a></li>
                        <li><a href="#" className="hover:text-white">Copyright information</a></li>
                        <li><a href="#" className="hover:text-white">Concierge Assistance</a></li>
                        <li><a href="#" className="hover:text-white">Flexible Booking Options</a></li>
                        <li><a href="#" className="hover:text-white"> Airport Transfers</a></li>
                        <li><a href="#" className="hover:text-white">Wellness & Recreation</a></li>
                    </ul>
                </div>

                




                {/* Social Media and Support */}
                <div>
                    <h2 className="text-white font-semibold mb-4">SOCIAL MEDIA</h2>
                    <div className="flex space-x-2 mb-4">
                        {/* Replace # with actual social media links */}
                        <a href="https://www.instagram.com/kingsukhguesthouse/"><img className="w-5" src={Insta} alt="" /></a>
                        <a href="https://www.instagram.com/kingsukhguesthouse/"><img className="w-5" src={Face} alt="" /></a>
                        <a href="https://www.instagram.com/kingsukhguesthouse/"><img className="w-5" src={Twit} alt="" /></a>
                        <a href="https://www.instagram.com/kingsukhguesthouse/"><img className="w-5" src={Yout} alt="" /></a>

                                            </div>
                    <p className="mb-4 hover:text-white">Address: Beside Barshal Water Tank, Manpur, Barhanti, West Bengal 723156</p>
                    <p className="mb-4 hover:text-white">kkghosh0099@gmail.com</p>
                    <p className="mb-4 hover:text-white">+91 9007062180</p>

                    <button className="bg-pink-600 text-white py-2 px-4 rounded">Book Now</button>
                </div>
            </div>

            {/* Bottom Section */}
            <div className="mt-8 text-center text-gray-500">
                <p>Copyright © 2024 KingSukh Guest House. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
