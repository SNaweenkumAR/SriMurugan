import { useState } from "react";
import { Menu, X, Home, Info, Utensils, Mail } from "lucide-react";
import React from "react";
import logo from '../assets/logo.png'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav  id="navbar"  className="fixed top-[10%] left-1/2 transform -translate-x-1/2 w-[80%] bg-white shadow-md p-4 z-50 rounded-xl  bg-brown-200">
      <div className="container mx-auto flex justify-between items-center ">
      
        <div className="flex items-center gap-2 text-2xl font-bold ">
          <img src={logo} alt="Cafe Logo" className="h-10 w-10" /> 
          <span className="text-brown hidden md:flex">SRIMURUGANCAFE</span>
        </div>

        
        <ul className="hidden md:flex gap-6 text-lg text-brown">
          <li className="flex items-center gap-1 cursor-pointer hover:text-orange-500">
            <Home size={20} /> Home
          </li>
          <li className="flex items-center gap-1 cursor-pointer hover:text-orange-500">
            <Info size={20} /> About
          </li>
          <li className="flex items-center gap-1 cursor-pointer hover:text-orange-500">
            <Utensils size={20} /> Menu
          </li>
          <li className="flex items-center gap-1 cursor-pointer hover:text-orange-500">
            <Mail size={20} /> Contact Us
          </li>
        </ul>

     
        <div className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </div>
      </div>

  
      {isOpen && (
        <ul className="md:hidden flex flex-col bg-white shadow-md mt-2 p-4 rounded-xl">
          <li className="flex items-center gap-2 py-2"><Home size={20} /> Home</li>
          <li className="flex items-center gap-2 py-2"><Info size={20} /> About</li>
          <li className="flex items-center gap-2 py-2"><Utensils size={20} /> Menu</li>
          <li className="flex items-center gap-2 py-2"><Mail size={20} /> Contact Us</li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
