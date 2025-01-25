import React from "react";
import image from "../assests/umesh.png"; // Ensure the path to the image is correct

const personalData = {
  description:
    "I am a front-end developer with a passion for coding and design. I specialize in creating responsive, user-friendly websites and web applications using technologies like React, JavaScript, and CSS frameworks such as Tailwind. My goal is to always improve my skills and deliver high-quality work.",
};

const About = () => {
  return (
    <div id="about" className="my-12 lg:my-16 relative">
      {/* Responsive Grid Layout */}
      <div className=" p-20 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        {/* Text Section */}
        <div className="order-2 lg:order-1">
          <p className="mb-12 text-5xl md:text-4xl font-bold text-[#E649A1] uppercase text-center">
            About Me
          </p>
          <p className="text-gray-200 mb-12 text-base lg:text-lg leading-relaxed text-center">
            {personalData.description}
          </p>

          {/* Buttons Container */}
          <div className="flex justify-center items-center gap-6">
            <a
              href="https://drive.google.com/file/d/19MfGm9bQbRSQc8yJX8xHBS-TexwIJem7/view?usp=drivesdk"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg shadow-md hover:shadow-lg hover:from-pink-500 hover:to-purple-500 transition-all duration-300">
                Download CV
              </button>
            </a>

            <button className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg shadow-md hover:shadow-lg hover:from-pink-500 hover:to-purple-500 transition-all duration-300">
              Contact Me
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex justify-center order-1 lg:order-2">
          <img
            src={image}
            width={280}
            height={280}
            alt="Umesh Kumar"
            className="rounded-lg transition-transform duration-300 ease-in-out grayscale hover:grayscale-0 hover:scale-105 cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
