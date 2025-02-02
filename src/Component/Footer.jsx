import React from "react";
import { Facebook, Instagram, Phone, Mail, MapPin, MessageCircle } from "lucide-react"; // Added WhatsApp icon
import logo from "../assets/logo.png"; // Ensure your logo path is correct

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-brown py-8 px-4">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center sm:text-left">
        
        {/* Logo & Description */}
        <div className="flex flex-col items-center sm:items-start space-y-4">
          <img src={logo} alt="Cafe Logo" className="w-24 h-24 object-contain" />
          <h1 className="font-semibold text-lg sm:text-xl">SRIMURUGAN CAFE <br /> SINCE 1967</h1>
          <p className="text-sm">Serving the finest meals and beverages for a delightful experience...</p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col items-center sm:items-start space-y-3">
          <h3 className="text-lg font-bold">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="/" className="text-sm hover:text-orange-500">Home</a></li>
            <li><a href="/about" className="text-sm hover:text-orange-500">About</a></li>
            <li><a href="/menu" className="text-sm hover:text-orange-500">Menu</a></li>
            <li><a href="/contact" className="text-sm hover:text-orange-500">Contact</a></li>
          </ul>
        </div>

        {/* Social Media (Centered Icons) */}
        <div className="flex flex-col items-center space-y-3">
          <h3 className="text-lg font-bold">Follow Us</h3>
          <ul className="flex gap-6 justify-center">
            <li><a href="#" className="text-brown hover:text-orange-500"><Facebook size={24} /></a></li>
            <li><a href="#" className="text-brown hover:text-orange-500"><Instagram size={24} /></a></li>
            <li><a href="#" className="text-brown hover:text-orange-500"><MessageCircle size={24} /></a></li> {/* WhatsApp */}
          </ul>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col items-center sm:items-start space-y-3">
          <h3 className="text-lg font-bold">Get In Touch</h3>
          <ul className="space-y-2">
            <li className="flex items-center gap-2"><MapPin size={16} /> <span className="text-sm">Plot A7, Broadway Mall Road, Coimbatore-641014</span></li>
            <li className="flex items-center gap-2"><Phone size={16} /> <span className="text-sm">+91 9363615104</span></li>
            <li className="flex items-center gap-2"><Mail size={16} /> <span className="text-sm">srimurugancafe1967@gmail.com</span></li>
          </ul>
        </div>
      </div>

      {/* Horizontal Line */}
      <hr className="border-t-2 border-gray-300 my-6" />

      {/* Copyright & Developer Credit */}
      <div className="text-center text-sm">
        <p>&copy; 2025 SRI MURUGAN CAFE. All Rights Reserved. | Designed & Developed By:  
          <a href="https://naveen-portfolio-steel.vercel.app/" className="text-brown hover:text-orange-500"> Naveen</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
