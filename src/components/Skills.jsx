import React from "react";
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaPython, FaGithub, FaJava } from "react-icons/fa";
import { SiC, SiTailwindcss, SiJavascript, SiNextdotjs, SiMongodb, SiAngular, SiMysql } from "react-icons/si";
import { TbBinaryTree } from "react-icons/tb";
import { GiDatabase } from "react-icons/gi";  // DBMS icon

const Skills = () => {
  const skills = [
    {
      icon: <FaPython />,
      name: "Python",
      description: "A versatile programming language used for web development, data science, AI, and more.",
    },
    {
      icon: <SiC />,
      name: "C Programming",
      description: "A foundational language for system programming, embedded systems, and software development.",
    },
    {
      icon: <FaJava />,
      name: "Core Java",
      description: "An object-oriented programming language for enterprise applications and Android development.",
    },
    {
      icon: <FaGithub />,
      name: "Git/GitHub",
      description: "Tools for version control and collaborative development of source code repositories.",
    },
    {
      icon: <TbBinaryTree />,
      name: "Data Structures and Algorithms",
      description: "The backbone of efficient programming, focusing on problem-solving and optimization techniques.",
    },
    {
      icon: <FaJava />,
      name: "Object-Oriented Programming (OOP)",
      description: "A programming paradigm based on the concept of objects and classes to design scalable systems.",
    },
    {
      icon: <SiMysql />,
      name: "MySQL",
      description: "A popular relational database management system used to store and manage structured data.",
    },
    {
      icon: <GiDatabase />,  // Changed to DBMS icon
      name: "DBMS",
      description: "Database Management Systems for storing, retrieving, and managing structured data efficiently.",
    },
    {
      icon: <FaHtml5 />,
      name: "HTML",
      description: "The standard markup language for structuring content on the web.",
    },
    {
      icon: <FaCss3Alt />,
      name: "CSS",
      description: "A styling language used to design and beautify web pages.",
    },
    {
      icon: <SiJavascript />,
      name: "JavaScript",
      description: "A versatile scripting language for creating dynamic and interactive web applications.",
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwind CSS",
      description: "A utility-first CSS framework for building custom, modern designs efficiently.",
    },
    {
      icon: <FaReact />,
      name: "React.js",
      description: "A popular JavaScript library for building responsive and dynamic user interfaces.",
    },
    {
      icon: <FaNodeJs />,
      name: "Node.js",
      description: "A JavaScript runtime for developing scalable server-side applications.",
    },
    {
      icon: <SiMongodb />,
      name: "MongoDB",
      description: "A NoSQL database solution designed for handling unstructured data with ease.",
    },
    {
      icon: <SiNextdotjs />,
      name: "Next.js",
      description: "A React framework for building server-rendered and statically generated web applications.",
    },
  ];

  return (
    <div className="p-4">
      <h1 className="md:text-4xl text-2xl text-[#E649A1] font-bold text-center py-2">My Skills</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 m-2">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="p-4 rounded-md my-6 text-center transform transition duration-500 cursor-pointer hover:scale-105 hover:shadow-[0_4px_15px_#C050D6] shadow-[0_4px_10px_rgba(255,255,255,0.3)]"
          >
            <div className="sm:text-6xl text-4xl my-4 text-white flex justify-center items-center">
              {skill.icon}
            </div>
            <h2 className="sm:text-2xl text-xl my-2 font-semibold text-[#E649A1]">{skill.name}</h2>
            <p className="text-gray-300">{skill.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
