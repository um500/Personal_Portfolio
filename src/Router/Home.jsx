import React, { useState } from "react";
import Front from "../components/Front";
import About from "../components/About";
import Project from "../components/Project";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import Education from "../components/Education";
import Experience from "../components/Experiences";
import { FiMenu, FiX } from "react-icons/fi";

import {
  AiOutlineHome,
  AiOutlineInfoCircle,
  AiOutlineProject,
  AiOutlineStar,
  AiOutlineMail,
  AiOutlineBook,
  AiOutlineLaptop,
} from "react-icons/ai";

const Home = () => {
  const [activeComponent, setActiveComponent] = useState("Front");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const renderComponent = () => {
    switch (activeComponent) {
      case "Front":
        return <Front />;
      case "About":
        return <About />;
      case "Education":
        return <Education />;
      case "Experience":
        return <Experience />;
      case "Project":
        return <Project />;
      case "Skills":
        return <Skills />;
      case "Contact":
        return <Contact />;
      default:
        return <div>Component not found</div>;
    }
  };

  const navItems = [
    { id: "Front", label: "It's Me", icon: <AiOutlineHome /> },
    { id: "About", label: "About", icon: <AiOutlineInfoCircle /> },
    { id: "Education", label: "Education", icon: <AiOutlineBook /> },
    { id: "Experience", label: "Experience", icon: <AiOutlineLaptop /> }, // New Experience item
    { id: "Project", label: "Project", icon: <AiOutlineProject /> },
    { id: "Skills", label: "Skills", icon: <AiOutlineStar /> },
    { id: "Contact", label: "Contact", icon: <AiOutlineMail /> },
  ];

  return (
    <section>
      <div>
        {/* Toggle Button for Mobile View */}
        <button
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="md:hidden fixed top-3 left-3 z-50 bg-[#201E43] text-white p-2 rounded"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
        </button>

        {/* Sidebar */}
        <aside
          className={`fixed left-0 top-0 h-full w-[200px] bg-[#201E43] border-r pt-10 px-6 z-50 transition-transform duration-300 ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
          }`}
        >
          <div className="mb-6 text-center">
            <h1 className="text-white font-bold text-xl md:text-2xl">UMESH</h1>
          </div>
          <ul className="space-y-6 text-[#ffffff] ml-6">
            {navItems.map((item) => (
              <li
                key={item.id}
                onClick={() => {
                  setActiveComponent(item.id);
                  setIsMenuOpen(false);
                }}
                className={`cursor-pointer flex items-center space-x-3 ${
                  activeComponent === item.id ? "font-bold text-white" : ""
                }`}
              >
                <span className="text-lg">{item.icon}</span>
                <span>{item.label}</span>
              </li>
            ))}
          </ul>
        </aside>

        {/* Background Overlay */}
        {isMenuOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={() => setIsMenuOpen(false)}
          ></div>
        )}

        {/* Main Content */}
        <main
          className={`relative z-30 ${
            isMenuOpen ? "ml-[200px]" : "ml-[0px] md:ml-[200px]"
          } transition-all duration-300`}
        >
          <div className="absolute inset-0">
            {/* Add your background animations here */}
            <div
              className="absolute top-10 left-10 w-[120px] h-[120px] bg-pink-400 
            rounded-full blur-3xl opacity-30 animate-pulse"
            ></div>
            <div
              className="absolute bottom-20 right-20 w-[150px] h-[150px] bg-purple-500 
            rounded-full blur-3xl opacity-20 animate-ping"
            ></div>
            <div
              className="absolute top-20 left-1/2 w-[200px] h-[200px] bg-green-500 
            rounded-full blur-3xl opacity-10 animate-bounce"
            ></div>
            <div
              className="absolute top-10 left-10 w-[120px] h-[120px] bg-red-500 
            rounded-full blur-3xl opacity-10 animate-bounce"
            ></div>
            <div
              className="absolute bottom-40 right-[-20] w-[150px] h-[150px] bg-yellow-500 
            rounded-full blur-3xl opacity-10 animate-bounce"
            ></div>
          </div>
          <div className="absolute inset-0">
            {/* Add Background Animations */}
          </div>
          <div className="relative">{renderComponent()}</div>
        </main>
      </div>
    </section>
  );
};

export default Home;

