import React, { useState } from "react";
import { ArrowRightIcon } from "@heroicons/react/solid";
import {
  BsFacebook,
  BsGithub,
  BsLinkedin,
  BsTwitter,
  BsWhatsapp,
} from "react-icons/bs";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-gray-800 z-40">
      <div className="flex justify-between items-center h-16 px-6 bg-gray-800 shadow-lg">
        {/* Logo */}
        <a href="/" className="text-white font-bold text-xl">
          <img src="ChaskaLogo.png" alt="logo" className="w-10" />
        </a>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6 text-white font-medium ">
          <a href="#projects" className="hover:text-green-400">
            Past Work
          </a>
          <a href="#skills" className="hover:text-green-400">
            Skills
          </a>
          <a href="#testimonials" className="hover:text-green-400">
            Testimonials
          </a>
        </nav>

        {/* Desktop Icons */}
        <div className="hidden md:flex items-center space-x-4">
          <a
            className="text-2xl hover:text-green-400"
            href="https://github.com/kingrayChaska"
            target="_blank"
            rel="noreferrer"
          >
            <BsGithub />
          </a>
          <a
            className="text-2xl hover:text-blue-400"
            href="https://www.linkedin.com/in/oluwaseun-raymond-6a1765241/"
            target="_blank"
            rel="noreferrer"
          >
            <BsLinkedin />
          </a>
          <a
            className="text-2xl hover:text-blue-400"
            href="https://www.x.com/Chaska44?s=09"
            target="_blank"
            rel="noreferrer"
          >
            <BsTwitter />
          </a>
          <a
            className="text-2xl hover:text-blue-700"
            href="https://www.facebook.com/kingray.sama.3"
            target="_blank"
            rel="noreferrer"
          >
            <BsFacebook />
          </a>
          <a
            className="text-2xl hover:text-green-400"
            href="https://whatsapp.com/dl/"
            target="_blank"
            rel="noreferrer"
          >
            <BsWhatsapp />
          </a>
          <a
            href="#contact"
            className="flex items-center font-medium text-white bg-green-700 py-1 px-3 rounded hover:bg-green-600"
          >
            Hire Me
            <ArrowRightIcon className="w-4 h-4 ml-1" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="space-y-1">
            <span
              className={`block h-0.5 w-6 bg-current transform transition duration-300 ${
                isOpen ? "rotate-45 translate-y-1.5" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-current transition duration-300 ${
                isOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-current transform transition duration-300 ${
                isOpen ? "-rotate-45 -translate-y-1.5" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-gray-800 text-white transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden z-30`}
      >
        <div className="flex flex-col items-start p-6 space-y-6">
          <a
            href="#projects"
            className="hover:text-green-400"
            onClick={() => setIsOpen(false)}
          >
            Past Work
          </a>
          <a
            href="#skills"
            className="hover:text-green-400"
            onClick={() => setIsOpen(false)}
          >
            Skills
          </a>
          <a
            href="#testimonials"
            className="hover:text-green-400"
            onClick={() => setIsOpen(false)}
          >
            Testimonials
          </a>
          <div className="flex space-x-4 pt-6">
            <a
              className="text-2xl hover:text-green-400"
              href="https://github.com/kingrayChaska"
              target="_blank"
              rel="noreferrer"
            >
              <BsGithub />
            </a>
            <a
              className="text-2xl hover:text-blue-400"
              href="https://www.linkedin.com/in/oluwaseun-raymond-6a1765241/"
              target="_blank"
              rel="noreferrer"
            >
              <BsLinkedin />
            </a>
            <a
              className="text-2xl hover:text-blue-400"
              href="https://www.linkedin.com/in/oluwaseun-raymond-6a1765241/"
              target="_blank"
              rel="noreferrer"
            >
              <BsTwitter />
            </a>
            <a
              className="text-2xl hover:text-blue-700"
              href="https://www.linkedin.com/in/oluwaseun-raymond-6a1765241/"
              target="_blank"
              rel="noreferrer"
            >
              <BsFacebook />
            </a>
            <a
              className="text-2xl hover:text-green-400"
              href="https://www.linkedin.com/in/oluwaseun-raymond-6a1765241/"
              target="_blank"
              rel="noreferrer"
            >
              <BsWhatsapp />
            </a>
          </div>
          <a
            href="#contact"
            className="flex items-center font-medium text-white bg-green-700 py-2 px-4 rounded hover:bg-green-600 mt-6"
            onClick={() => setIsOpen(false)}
          >
            Hire Me
            <ArrowRightIcon className="w-4 h-4 ml-1" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
