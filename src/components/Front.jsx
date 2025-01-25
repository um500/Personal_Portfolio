import React from "react";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa"; // Removed Instagram and Facebook
import { SiLeetcode, SiGeeksforgeeks } from "react-icons/si"; // Imported LeetCode and GeeksforGeeks icons
import Typed from "typed.js"; // Import the Typed.js library for animations
import { useEffect, useRef } from "react";
import image from "../assests/umesh.png";

const HeroSection = () => {
  const typedElement = useRef(null);
  const typedInstance = useRef(null); // Reference for the Typed.js instance

  useEffect(() => {
    // Initialize Typed.js for text animation
    typedInstance.current = new Typed(typedElement.current, {
      strings: ["FRONTEND DEVELOPER", "WEB DEVELOPER", "FREELANCER", "CODER"],
      typeSpeed: 100, // Controlled and consistent typing speed
      backSpeed: 60,  // Controlled and consistent backspacing speed
      backDelay: 1500, // Delay before backspacing
      loop: true,
      showCursor: false, // Disable the blinking cursor to avoid the double line
    });

    // Cleanup the Typed.js instance when the component unmounts
    return () => {
      if (typedInstance.current) {
        typedInstance.current.destroy();
      }
    };
  }, []);

  return (
    <div
      className="bg-gradient-to-br from-black via-red-900 to-red-800 text-white w-full
      flex items-center justify-center font-sans h-screen relative"
    >
      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center text-center">
        {/* Profile Image */}
        <div
          className="w-56 h-56 rounded-full overflow-hidden border-4 border-gray-700
          shadow-lg hover:scale-105 transition-transform duration-300"
        >
          <img
            src={image}
            alt="Umesh Kumar"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Title and Dynamic Text */}
        <h1 className="text-4xl md:text-7xl font-bold mt-6 tracking-wide">
          UMESH <span className="text-gray-500">KUMAR</span>
        </h1>
        <p className="mt-4 text-xl md:text-2xl tracking-wide text-gray-400">
          I am a <span className="font-bold text-purple-400" ref={typedElement}></span>
        </p>

        {/* Decorative Line */}
        <div className="mt-2 w-20 h-[2px] bg-gray-500"></div>

        {/* Social Media Icons */}
        <div className="mt-6 flex space-x-6">
          <a
            href="https://www.linkedin.com/in/umesh-kumar-aa2286230/"
            target="_blank"
            rel="noopener noreferrer"
            className="group text-gray-400 hover:text-blue-700 transition-colors duration-300"
          >
            <FaLinkedin size={30} className="group-hover:fill-current" />
          </a>
          <a
            href="https://github.com/um500"
            target="_blank"
            rel="noopener noreferrer"
            className="group text-gray-400 hover:text-gray-900 transition-colors duration-300"
          >
            <FaGithub size={30} className="group-hover:fill-current" />
          </a>
          <a
            href="https://leetcode.com/u/ume_500/"
            target="_blank"
            rel="noopener noreferrer"
            className="group text-gray-400 hover:text-orange-500 transition-colors duration-300"
          >
            <SiLeetcode size={30} className="group-hover:fill-current" />
          </a>
          <a
            href="https://www.geeksforgeeks.org/user/um_ht/"
            target="_blank"
            rel="noopener noreferrer"
            className="group text-gray-400 hover:text-green-600 transition-colors duration-300"
          >
            <SiGeeksforgeeks size={30} className="group-hover:fill-current" />
          </a>
          <a
            href="https://x.com/umesh_122"
            target="_blank"
            rel="noopener noreferrer"
            className="group text-gray-400 hover:text-blue-400 transition-colors duration-300"
          >
            <FaTwitter size={30} className="group-hover:fill-current" />
          </a>
        </div>

        {/* Call-to-Action Button */}
        <a
          href="https://drive.google.com/file/d/19MfGm9bQbRSQc8yJX8xHBS-TexwIJem7/view?usp=drivesdk"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="mt-8 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg shadow-md hover:shadow-lg hover:from-pink-500 hover:to-purple-500 transition-all duration-300">
            View Resume
          </button>
        </a>
      </div>
    </div>
  );
};

export default HeroSection;
