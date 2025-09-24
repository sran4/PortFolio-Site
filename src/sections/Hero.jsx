import React from "react";

// Import the icons we want to use for floating icons
import { FaHtml5, FaCss3, FaNodeJs, FaReact } from "react-icons/fa";
import { SiDjango, SiExpress, SiNextdotjs } from "react-icons/si";

import { STATS } from "../utils/data";
import StatInfoCard from "../components/StatInfoCard";

const Hero = () => {
  return (
    <section id="hero" className="container mx-auto px-8">
      <div className="flex flex-col lg:flex-row gap-14 items-center justify-between mt-[80px]">
        <div className="order-2 lg:order-1 text-center lg:text-left mt-16 lg:mt-0">
          <h3 className="text-xl lg:text-2xl font-medium text-black">
            👋 Hi, I'm Sran Satwant
          </h3>
          <h1 className="w-full lg:w-[480px] text-4xl lg:text-5xl font-bold leading-[50px] lg:leading-[60px] mt-3 bg-gradient-primary bg-clip-text text-transparent">
            Building Scalable & User Centric Web Apps
          </h1>

          <p className="w-full lg:w-[500px] text-sm lg:text-base mt-4">
            I'm a passionate Full Stack Frontend Developer crafting responsive,
            accessible, and dynamic web experiences using React, Node.js, and
            TailwindCSS.
          </p>

          <div className="flex justify-center lg:justify-start gap-4 md:gap-8 mt-6">
            <button className="flex-1 md:flex-none action-btn-outline btn-scale-anim">
              View My Work
            </button>
            <button className="flex-1 md:flex-none action-btn btn-scale-anim">
              Download Resume
            </button>
          </div>
        </div>

        {/* Avatar container with floating icons - larger container to accommodate all icons */}
        <div className="relative order-1 lg:order-2 flex items-center justify-center w-80 h-80">
          {/* Main avatar circle */}
          <div className="relative w-48 h-48 bg-gradient-to-br from-orange-400 via-orange-500 to-orange-600 rounded-full flex items-center justify-center shadow-2xl border-4 border-white z-10">
            <span className="text-3xl font-bold text-white text-center leading-tight">
              Sran
            </span>
            {/* Subtle inner shadow for depth */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/20 to-transparent"></div>
          </div>

          {/* Floating Technology Icons positioned within the container */}

          {/* Django - Top Left */}
          <div className="absolute left-2 top-8 animate-float-slow">
            <div className="w-10 h-10 bg-white/95 backdrop-blur-sm rounded-xl shadow-lg flex items-center justify-center border border-orange-200 hover:scale-110 transition-transform duration-300">
              <SiDjango className="w-6 h-6 text-orange-600" />
            </div>
          </div>

          {/* HTML5 - Left Side */}
          <div className="absolute left-4 bottom-16 animate-float-medium">
            <div className="w-10 h-10 bg-white/95 backdrop-blur-sm rounded-xl shadow-lg flex items-center justify-center border border-orange-200 hover:scale-110 transition-transform duration-300">
              <FaHtml5 className="w-6 h-6 text-orange-500" />
            </div>
          </div>

          {/* CSS3 - Bottom Left */}
          <div className="absolute left-12 bottom-4 animate-float-fast">
            <div className="w-10 h-10 bg-white/95 backdrop-blur-sm rounded-xl shadow-lg flex items-center justify-center border border-orange-200 hover:scale-110 transition-transform duration-300">
              <FaCss3 className="w-6 h-6 text-blue-500" />
            </div>
          </div>

          {/* Node.js - Bottom Right */}
          <div className="absolute right-12 bottom-4 animate-float-slow">
            <div className="w-10 h-10 bg-white/95 backdrop-blur-sm rounded-xl shadow-lg flex items-center justify-center border border-orange-200 hover:scale-110 transition-transform duration-300">
              <FaNodeJs className="w-6 h-6 text-green-600" />
            </div>
          </div>

          {/* Express.js - Right Side */}
          <div className="absolute right-4 bottom-16 animate-float-medium">
            <div className="w-10 h-10 bg-white/95 backdrop-blur-sm rounded-xl shadow-lg flex items-center justify-center border border-orange-200 hover:scale-110 transition-transform duration-300">
              <SiExpress className="w-6 h-6 text-gray-700" />
            </div>
          </div>

          {/* React - Top Right */}
          <div className="absolute right-2 top-8 animate-float-fast">
            <div className="w-10 h-10 bg-white/95 backdrop-blur-sm rounded-xl shadow-lg flex items-center justify-center border border-orange-200 hover:scale-110 transition-transform duration-300">
              <FaReact className="w-6 h-6 text-blue-400" />
            </div>
          </div>

          {/* Next.js - Top Center */}
          <div className="absolute top-2 left-1/2 transform -translate-x-1/2 animate-float-slow">
            <div className="w-10 h-10 bg-white/95 backdrop-blur-sm rounded-xl shadow-lg flex items-center justify-center border border-orange-200 hover:scale-110 transition-transform duration-300">
              <SiNextdotjs className="w-6 h-6 text-black" />
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-12 mt-16 md:mt-24 flex-wrap">
        {STATS.map((item) => (
          <StatInfoCard key={item.id} count={item.count} label={item.label} />
        ))}
      </div>
    </section>
  );
};

export default Hero;
