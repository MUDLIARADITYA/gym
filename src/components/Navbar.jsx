import React from "react";
import logo from "../assets/logo.png";
import { BiPhoneCall } from "react-icons/bi";
import Darkmode from "./Darkmode";

export const Navlinks = [
  { id: 1, name: "SERVICES", link: "/#services" },
  { id: 2, name: "ABOUT", link: "/#about" },
  { id: 3, name: "JOIN", link: "/#join" },
];

const Navbar = () => {
  return (
    <nav className="shadow-md w-full dark:bg-black dark:text-white duration-300">
      <div className="flex justify-between items-center">
        <div className="sm:flex items-center gap-3 hidden font-semibold text-gray-500 dark:text-gray-400 group">
          <BiPhoneCall className="text-primary text-2xl animate-pulse group-hover:scale-105 duration-200" />
          +91 123456789
        </div>
        <div>
          <img src={logo} alt="Logo"  className="w-16 sm:w-24 absolute top-0 left-0 sm:left-1/2 sm:-translate-x-1/2 m-2 sm:m-0 " />   
        </div>
        <div>
          <ul className="flex items-center gap-8">
            {Navlinks.map(({ id, name, link }) => (
              <li key={id} className="py-4">
                <a href={link} className="inline-block text-lg font-semibold hover:text-primary duration-300">
                  {name}
                </a>
              </li>
            ))}
            {/* Dark Mode Toggle */}
            <Darkmode />
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
