import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav className="bg-gray-800 w-52 h-screen">
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
            <a href="#" className="block">
              About
            </a>
          </li>
          <li className="pl-4 py-2 text-gray-300 hover:bg-gray-700">
            <a href="#" className="block">
              Service
            </a>
          </li>
          <li className="pl-4 py-2 text-gray-300 hover:bg-gray-700">
            <a href="#" className="block">
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
    </div>
  );
};

export default Navbar;
