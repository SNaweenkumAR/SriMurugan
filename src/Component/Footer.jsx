import React from "react";
import logo from '../assets/logo.png'; // Ensure your logo path is correct

const Footer = () => {
  return (
    <footer id="Footer" className="text-brown py-12">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* First Grid: Logo, Description */}
        <div className="flex flex-col items-start space-y-4">
          <img
            src={logo} // Replace with your logo path
            alt="Cafe Logo"
            className="w-32 h-32 object-contain"
          />
          <h1 className="font-semibold text-2xl"> SRIMURUGAN CAFE <br /> SINCE 1967</h1>
          <p className="text-sm sm:text-base lg:text-lg">
          Serving the finest meals and beverages for a delightful experience...
          </p>
        </div>

        {/* Second Grid: Quick Links */}
        <div className="flex flex-col space-y-4">
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="/" className="text-sm sm:text-base text-brown hover:text-orange-500">Home</a>
            </li>
            <li>
              <a href="/about" className="text-sm sm:text-base text-brown hover:text-orange-500">About</a>
            </li>
            <li>
              <a href="/menu" className="text-sm sm:text-base text-brown hover:text-orange-500">Menu</a>
            </li>
            <li>
              <a href="/contact" className="text-sm sm:text-base text-brown hover:text-orange-500">Contact</a>
            </li>
          </ul>
        </div>   


  <div className="flex flex-col space-y-4">

  <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold">Social Meadia</h3> 
  <ul className="space-y-2">
            <li className="text-sm sm:text-base">facebook</li>
            <li className="text-sm sm:text-base">instagram</li>
            <li className="text-sm sm:text-base">Whatsapp</li>
          </ul>
  </div>


      
        <div className="flex flex-col space-y-4">
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold">Get In Touch</h3>
          <ul className="space-y-2">
            <li className="text-sm sm:text-base">PLot A7,Broadway mall Road ,Near KMCH ,Coimbatore-641014</li>
            <li className="text-sm sm:text-base">+91 9363615104</li>
            <li className="text-sm sm:text-base">srimurugancafe1967@gmail.com</li>
          </ul>
        </div>
      </div>
       
       <hr className=""/>

      <div className="text-center text-sm sm:text-base mt-8">
        <p>&copy; 2025 SRI MURUGAN CAFE. All Rights Reserved.|Designed & Developed By :  <a href="https://naveen-portfolio-steel.vercel.app/" className="text-sm sm:text-base text-brown hover:text-orange-500">Naveen</a></p>
      </div>
    </footer>
  );
};

export default Footer;
