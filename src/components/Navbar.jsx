import React from "react";

const Navbar = () => {
  return (
    
      <nav className="bg-gray-800 w-40 min-h-full fixed top-0 z-50">
        <div className="flex items-center justify-center h-16">
          <span className="text-white text-xl font-semibold">Logo</span>
        </div>
        <ul className="mt-6">
          <li className="pl-4 py-2 text-gray-300 hover:bg-gray-700">
            <a href="#" className="block">
              Home
            </a>
          </li>
          <li className="pl-4 py-2 text-gray-300 hover:bg-gray-700">
            <a href="#about" className="block">
              About
            </a>
          </li>
          <li className="pl-4 py-2 text-gray-300 hover:bg-gray-700">
            <a href="#services" className="block">
              Services
            </a>
          </li>
          <li className="pl-4 py-2 text-gray-300 hover:bg-gray-700">
            <a href="#skills" className="block">
              Skills
            </a>
          </li>
          <li className="pl-4 py-2 text-gray-300 hover:bg-gray-700">
            <a href="#" className="block">
              My works
            </a>
          </li>
          <li className="pl-4 py-2 text-gray-300 hover:bg-gray-700">
            <a href="#" className="block">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    
  );
};

export default Navbar;
