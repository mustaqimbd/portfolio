import React from "react";

const Navbar = () => {
  return (
    
      <nav className="text-black w-40 min-h-full fixed top-0 z-50">
        <div className="flex items-center justify-center h-16">
          <span className=" text-xl font-semibold bg-[#2bc582] p-4 rounded-full mt-4">MK</span>
        </div>
        <ul className="mt-6 font-bold pl-5">
          <li className="pl-4 py-2 ">
            <a href="#" className="block">
              Home
            </a>
          </li>
          <li className="pl-4 py-2 ">
            <a href="#about" className="block">
              About
            </a>
          </li>
          <li className="pl-4 py-2 ">
            <a href="#services" className="block">
              Services
            </a>
          </li>
          <li className="pl-4 py-2 ">
            <a href="#skills" className="block">
              Skills
            </a>
          </li>
          <li className="pl-4 py-2 ">
            <a href="#my-works" className="block">
              My works
            </a>
          </li>
          <li className="pl-4 py-2 ">
            <a href="#contact" className="block">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    
  );
};

export default Navbar;
