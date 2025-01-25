import React from "react";
import { FaRegCheckCircle } from "react-icons/fa";
import pic1 from "../assests/project/Attendance.png";
import pic2 from "../assests/project/eco.png";
import pic3 from "../assests/project/Portfolio.png";
import pic4 from "../assests/project/PasswordGen.png";
import pic5 from "../assests/project/Weather.png";
import pic6 from "../assests/project/Razorpay.png";
import pic7 from "../assests/project/ToDoList.png";
import pic8 from "../assests/project/travel.png";
import pic9 from "../assests/project/TicTocToe.png";

const Project = () => {
  const experiences = [
    {
      title: "Addenify-Attendance Management System",
      description: "I developed an attendance management system using the MERN stack (MongoDB, Express.js, React.js, Node.js). It enables efficient tracking of employee attendance with a user-friendly interface, responsive design, and integration with backend APIs for seamless management.",
      date: "Sep 2024 - March 2025",
      link: "https://github.com/um500/attendify.git",
      image: pic1,
    },
    {
      title: "EcoMind-Environmental Website",
      description: "I built an informative and interactive environmental awareness website using React.js. The website features eco-friendly tips, sustainability facts, and green product recommendations, aiming to educate users on environmental conservation while integrating modern design patterns and functionalities.",
      date: "Jun 2022 - jul 2022",
      link: "https://github.com/um500/eco-mind.git",
      image: pic2,
    },
    {
      title: "Portfolio Website",
      description: "Designed and developed my personal portfolio website to showcase my skills, projects, and experience as a React Developer. The site includes interactive components, a responsive layout, and various sections to highlight my professional journey, all styled with modern aesthetics.",
      date: "Feb 2025 - Present",
      link: "#",
      image: pic3,
    },
    {
      title: "Travel Website",
      description: "I created a fully dynamic and responsive travel website as part of my learning experience during the IBM SkillsBuild program. This project allows users to explore travel destinations, check flight prices, and view accommodation options, all while ensuring a mobile-friendly and smooth user experience.",
      date: "Jan 2024 - March 2024",
      link: "https://github.com/um500/traveller.git",
      image: pic8,
    },
    {
      title: "Razorpay Clone",
      description: "Developed a Razorpay payment gateway clone using React.js to understand the complexities of payment integration. This project replicates the essential features of the Razorpay platform, including payment form submission, transaction processing, and security features.",
      date: "Jan 2022 - Feb 2023",
      link: "https://github.com/um500/razorpay-clone.git",
      image: pic6,
    },
    {
      title: "Password Generator",
      description: "Created a password generator app that helps users generate strong and secure passwords based on various criteria. The app allows users to select the length, complexity, and characters for the password, providing them with safe and random password options for better online security.",
      date: "Aug 2022 - Dec 2022",
      link: "https://github.com/um500/password_generator.git",
      image: pic4,
    },
    {
      title: "Weather App",
      description: "Developed a real-time weather application using React.js, which allows users to check the current weather for any city. The app uses a third-party API to retrieve weather data and presents it in a visually appealing and easy-to-read format, helping users stay informed about the weather.",
      date: "Oct 2022 - Dec 2022",
      link: "https://github.com/um500/weather_app.git",
      image: pic5,
    },
    {
      title: "ToDo List",
      description: "Built a simple yet efficient ToDo list application using React.js. The app allows users to create, update, and delete tasks while keeping track of completed tasks. It features an intuitive interface and smooth transitions, ensuring a user-friendly task management experience.",
      date: "March 2021 - May 2021",
      link: "https://github.com/um500/Build-a-Simple-React-To-Do-Application.git",
      image: pic7,
    },
    {
      title: "Tic-Toc-Toe Game",
      description: "Developed a classic Tic-Tac-Toe game using React.js, where users can play against each other in a two-player mode. The game includes features like a reset button, score tracking, and a friendly user interface, making it fun and engaging for users of all ages.",
      date: "Dec 2021 - Feb 2022",
      link: "https://github.com/um500/ETVIP_TIC_TOC_TIE.git",
      image: pic9,
    },
  ];

  return (
    <>
      <div className="mt-4 px-8 py-12">
        <h1 className="text-[#E649A1] md:text-4xl text-2xl text-center mb-4 font-bold">MY Projects</h1>
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 lg:gap-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="p-6 text-black rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-[#8F449E] min-h-[550px] flex flex-col justify-between"
            >
              <img
                src={exp.image}
                alt={exp.title}
                className="w-full h-[200px] object-cover mb-4 rounded"
              />
              <h1 className="text-xl font-semibold text-[#C085FC] mb-2">{exp.title}</h1>
              <div className="flex items-center mb-4">
                <FaRegCheckCircle className="text-[#C085FC] mr-2" />
                <div className="w-full h-1 bg-gradient-to-r from-[#C085FC] to-[#E649A1]"></div>
              </div>
              <div className="mb-4 flex-1 overflow-y-auto pr-2">
                <p>{exp.description}</p>
              </div>
              <div className="flex justify-between items-center mt-4">
                <span className="text-sm">{exp.date}</span>
                <a
                  href={exp.link}
                  className="bg-[#E649A1] text-white px-4 py-2 rounded font-bold hover:bg-[#C0388F]"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Details
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Project;
