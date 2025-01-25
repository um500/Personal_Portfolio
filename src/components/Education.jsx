import React from "react";

const Education = () => {
  return (
    <div className="h-screen py-10">
      <h1 className="ml-8 md:text-4xl text-2xl text-center font-bold mb-8 text-[#E649A1]">
        My Education
      </h1>

      <div className="p-8 w-full px-4">
        {/* School 1 */}
        <div className="p-4 mb-8 rounded-sm transform transition duration-500 hover:scale-105 hover:shadow-[0_4px_15px_#C050D6] shadow-[0_4px_10px_rgba(255,255,255,0.3)] w-[95%] md:w-[80%] md:ml-6 ml-2">
          <h2 className=" md:text-2xl text-xl font-semibold text-[#C084FC] mb-4">
            Haldia Institute of Technology Haldia, West Bengal
          </h2>
          <p className="text-white mb-4">
            Bachelor of Technology (B.Tech) - Information Technology
          </p>
          <p className="text-white">Graduation Year: 2025</p>
        </div>

        {/* School 2 */}
        <div className="p-4 mb-8 rounded-sm transform transition duration-500 hover:scale-105 hover:shadow-[0_4px_15px_#C050D6] shadow-[0_4px_10px_rgba(255,255,255,0.3)] w-[95%] md:w-[80%] md:ml-6 ml-2">
          <h2 className="md:text-2xl text-xl font-semibold text-[#C084FC] mb-4">
            Jharkhand Commerce Inter College Dumri, Giridih Jharkhand
          </h2>
          <p className="text-white mb-4">Senior Secondary School</p>
          <p className="text-white">Passing Year: 2021</p>
        </div>

        {/* School 3 */}
        <div className="p-4 mb-8 rounded-sm  transform transition duration-500 hover:scale-105 hover:shadow-[0_4px_15px_#C050D6] shadow-[0_4px_10px_rgba(255,255,255,0.3)] w-[95%] md:w-[80%] md:ml-6 ml-2">
          <h2 className="md:text-2xl text-xl font-semibold text-[#C084FC] mb-4">
            K.S.S High School Koiridih, Giridih Jharkhand
          </h2>
          <p className="text-white mb-4">Secondary School</p>
          <p className="text-white">Passing Year: 2019</p>
        </div>
      </div>
    </div>
  );
};

export default Education;
