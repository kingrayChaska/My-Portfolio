import { ArrowRightIcon } from "@heroicons/react/solid";
import React, { useState } from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-gray-800 md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-3 flex-col md:flex-row items-center">
        <a className="title-font font-medium text-white mb-2 md:mb-0">
          <img
            src="chaska-codes-high-resolution-logo-white-transparent.png"
            className="h-10"
            alt="Logo"
          />
        </a>
        <button
          className="inline-flex items-center text-white md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
        <nav
          className={`${
            isOpen ? "block" : "hidden"
          } md:flex md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700 flex flex-wrap items-center text-base justify-center`}
        >
          <a href="#projects" className="mr-5 font-medium hover:text-white">
            Past Work
          </a>
          <a href="#skills" className="mr-5 font-medium hover:text-white">
            Skills
          </a>
          <a href="#testimonials" className="mr-5 font-medium hover:text-white">
            Testimonials
          </a>
        </nav>
        <div className="flex items-center">
          <a
            className="mr-5 text-2xl hover:text-green-400"
            href="https://github.com/hens-virtuella-varld"
            target="_blank"
            rel="noreferrer"
          >
            <BsGithub />
          </a>
          <a
            className="mr-5 text-2xl hover:text-blue-400"
            href="https://www.linkedin.com/in/regan-y/"
            target="_blank"
            rel="noreferrer"
          >
            <BsLinkedin />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center font-medium bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:text-gray-200 hover:bg-gray-700 rounded text-base mt-4 md:mt-0"
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
