import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaGithub } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-14 px-14">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="footer-section">
                    <h3 className="text-lg font-bold">About Us</h3>
                    <p>
                    We are dedicated to helping creators fund their projects through community support. Our platform connects passionate backers with innovative ideas, making dreams a reality.
                    </p>
                </div>
                <div className="footer-section ml-8">
                    <h3 className="text-lg font-bold">Quick Links</h3>
                    <ul>
                        <li><a href="#about" className="hover:underline">About</a></li>
                        <li><a href="#projects" className="hover:underline">Projects</a></li>
                        <li><a href="#faq" className="hover:underline">FAQ</a></li>
                        <li><a href="#contact" className="hover:underline">Contact</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h3 className="text-lg font-bold">Follow Us</h3>
                    <div className="flex space-x-4">
                      <a href="#" aria-label="Facebook"><FaFacebook className="text-2xl hover:text-blue-600" /></a>
                        <a href="#" aria-label="Github"><FaGithub className="text-2xl hover:text-black" /></a>
                        <a href="#" aria-label="Twitter"><FaTwitter className="text-2xl hover:text-blue-400" /></a>
                        <a href="#" aria-label="Instagram"><FaInstagram className="text-2xl hover:text-pink-500" /></a>
                    </div>
                </div>
                <div className="footer-section">
                    <h3 className="text-lg font-bold">Contact Us</h3>
                    <p>Email: support@crowdfunding.com</p>
                    <p>Phone: (123) 456-7890</p>
                </div>
            </div>
            <div className="text-center mt-8">
                <p>© {new Date().getFullYear()} Crowdfunding. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;