import React from "react";

// Import the icons we want to use for floating icons
import {
  FaHtml5,
  FaCss3,
  FaNodeJs,
  FaReact,
  FaEnvelope,
  FaPhone,
  FaLocationArrow,
} from "react-icons/fa";
import { SiDjango, SiExpress, SiNextdotjs } from "react-icons/si";
import { ABOUT_ME } from "../utils/data";

const AboutMe = () => {
  return (
    <section id="about" className="container mx-auto px-8 py-16">
      <h4 className="block lg:hidden w-[200px] section-title text-left mb-16">
        About Me
      </h4>

      <div className="flex flex-col lg:flex-row gap-16 items-start justify-between">
        {/* Avatar container with floating icons - same as Hero section */}
        <div className="relative flex items-center justify-center w-80 h-80 mx-auto">
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

        <div className="flex-1">
          <h4 className="hidden lg:block w-[200px] section-title text-left">
            About Me
          </h4>

          <p className="text-sm text-justify leading-6 whitespace-pre-line mt-4">
            {ABOUT_ME.content}
          </p>

          <div className="flex gap-4 mt-6">
            {ABOUT_ME.socialLinks.map((item) => (
              <a
                key={item.label}
                className="cursor-pointer group"
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <item.icon className="text-2xl text-secondary transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110 group-hover:translate-y-[-2px] group-hover:text-primary" />
              </a>
            ))}
          </div>

          {/* Contact Information */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Email */}
            <div className="flex items-center gap-3 p-4 bg-white/50 rounded-lg border border-orange-100">
              <FaEnvelope className="text-primary text-lg" />
              <div>
                <p className="text-xs text-gray-600">Email</p>
                <p className="text-sm font-medium">{ABOUT_ME.email}</p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-3 p-4 bg-white/50 rounded-lg border border-orange-100">
              <FaPhone className="text-primary text-lg" />
              <div>
                <p className="text-xs text-gray-600">Phone</p>
                <p className="text-sm font-medium">{ABOUT_ME.phone}</p>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-center gap-3 p-4 bg-white/50 rounded-lg border border-orange-100">
              <FaLocationArrow className="text-primary text-lg" />
              <div>
                <p className="text-xs text-gray-600">Location</p>
                <p className="text-sm font-medium">{ABOUT_ME.location}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
