import React from "react";
import { FaRegCheckCircle } from "react-icons/fa";

const Experiences = () => {
  return (
    <div className="px-6 py-12">
      <h1 className="ml-2 mb-20 md:text-4xl text-2xl font-bold  text-center text-[#E649A1]">My Experiences</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {/* Experience Card 1 */}
        <div
          className="p-6 text-black rounded-lg shadow-white shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-[#8F449E] h-[400px] w-full sm:w-[70%] mx-auto flex flex-col justify-between"
        >
          <div>
            <h1 className="text-xl font-semibold mb-2 text-[#C085FC]">Frontend Developer</h1>
            <h2 className="text-xl font-semibold mb-2">IBM SkillsBuild</h2>
            <div className="flex items-center mb-4">
              <FaRegCheckCircle className="text-[#C085FC] mr-2" />
              <div className="w-full h-1 bg-gradient-to-r from-[#C085FC] to-[#E649A1]"></div>
            </div>
            <p className="mb-4 h-[120px] overflow-y-auto">
              During my 6-week Frontend Developer program at IBM SkillsBuild, I utilized React.js to build dynamic and responsive components for an environmental website. This experience allowed me to develop a fully functional platform focused on raising environmental awareness, promoting eco-friendly practices, and providing engaging solutions to users.
            </p>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm">Jan 2022 - Dec 2023</span>
            <a 
              href="https://github.com/um500/eco-mind.git" 
              className="bg-[#E649A1] text-white px-4 py-2 rounded font-bold hover:bg-[#C0388F]"
              target="_blank" 
              rel="noopener noreferrer"
            >
              View Details
            </a>
          </div>
        </div>

        {/* Experience Card 2 */}
        <div
          className="p-6 text-black rounded-lg shadow-white shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-[#8F449E] h-[400px] w-full sm:w-[70%] mx-auto flex flex-col justify-between"
        >
          <div>
            <h1 className="text-xl font-semibold mb-2 text-[#C085FC]">Angular Developer</h1>
            <h2 className="text-xl font-semibold mb-2">Infosys SpringBoard</h2>
            <div className="flex items-center mb-4">
              <FaRegCheckCircle className="text-[#C085FC] mr-2" />
              <div className="w-full h-1 bg-gradient-to-r from-[#C085FC] to-[#8F449E]"></div>
            </div>
            <p className="mb-4 h-[120px] overflow-y-auto">
              I completed a 2-month program at Infosys SpringBoard, where I utilized React.js technology to develop an Expense System Management platform. The system allowed users to add, edit, delete, and share their expenses, providing a complete solution for managing personal finances with an intuitive user interface.
            </p>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm">Jan 2021 - Dec 2022</span>
            <a 
              href="https://github.com/um500/SpendWise.git" 
              className="bg-[#E649A1] text-white px-4 py-2 rounded font-bold hover:bg-[#C0388F]"
              target="_blank" 
              rel="noopener noreferrer"
            >
              View Details
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experiences;
