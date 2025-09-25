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
import {
  SiDjango,
  SiExpress,
  SiNextdotjs,
  SiTailwindcss,
} from "react-icons/si";
import { VscEdit } from "react-icons/vsc";
import { ABOUT_ME } from "../utils/data";

const AboutMe = () => {
  return (
    <section id="about" className="container mx-auto px-8 py-16">
      <div className="w-full lg:w-[60vw] mx-auto mb-16">
        <h4 className="section-title">About Me</h4>
      </div>

      <div className="flex flex-col lg:flex-row gap-16 items-start justify-between">
        {/* Avatar container with floating icons - same as Hero section */}
        <div className="relative flex items-center justify-center w-80 h-80 mx-auto z-0">
          {/* Main avatar circle */}
          <div className="relative w-48 h-48 bg-gradient-to-br from-orange-400 via-orange-500 to-orange-600 rounded-full flex items-center justify-center shadow-2xl border-4 border-white z-10">
            <span className="text-3xl font-bold text-white text-center leading-tight">
              Sran
            </span>
            {/* Subtle inner shadow for depth */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/20 to-transparent"></div>
          </div>

          {/* Floating Technology Icons positioned evenly around circle - 8 icons */}

          {/* Django - 12 o'clock (0 degrees) */}
          <div
            className="absolute transform -translate-x-1/2 -translate-y-1/2 animate-float-slow z-20"
            style={{ top: "calc(50% - 115px)", left: "calc(50% - 15px)" }}
          >
            <div className="w-10 h-10 bg-white/95 backdrop-blur-sm rounded-xl shadow-lg flex items-center justify-center border border-orange-200 hover:scale-110 transition-transform duration-300">
              <SiDjango className="w-6 h-6 text-orange-600" />
            </div>
          </div>

          {/* Next.js - 1:30 o'clock (45 degrees) */}
          <div
            className="absolute transform -translate-x-1/2 -translate-y-1/2 animate-float-slow z-20"
            style={{ top: "calc(50% - 78px)", left: "calc(50% + 55px)" }}
          >
            <div className="w-10 h-10 bg-white/95 backdrop-blur-sm rounded-xl shadow-lg flex items-center justify-center border border-orange-200 hover:scale-110 transition-transform duration-300">
              <SiNextdotjs className="w-6 h-6 text-black" />
            </div>
          </div>

          {/* HTML5 - 3 o'clock (90 degrees) */}
          <div
            className="absolute transform -translate-x-1/2 -translate-y-1/2 animate-float-medium z-20"
            style={{ top: "calc(50% - 10px)", left: "calc(50% + 80px)" }}
          >
            <div className="w-10 h-10 bg-white/95 backdrop-blur-sm rounded-xl shadow-lg flex items-center justify-center border border-orange-200 hover:scale-110 transition-transform duration-300">
              <FaHtml5 className="w-6 h-6 text-orange-500" />
            </div>
          </div>

          {/* CSS3 - 4:30 o'clock (135 degrees) */}
          <div
            className="absolute transform -translate-x-1/2 -translate-y-1/2 animate-float-fast z-20"
            style={{ top: "calc(50% + 58px)", left: "calc(50% + 55px)" }}
          >
            <div className="w-10 h-10 bg-white/95 backdrop-blur-sm rounded-xl shadow-lg flex items-center justify-center border border-orange-200 hover:scale-110 transition-transform duration-300">
              <FaCss3 className="w-6 h-6 text-blue-500" />
            </div>
          </div>

          {/* Node.js - 6 o'clock (180 degrees) */}
          <div
            className="absolute transform -translate-x-1/2 -translate-y-1/2 animate-float-slow z-20"
            style={{ top: "calc(50% + 90px)", left: "calc(50% - 10px)" }}
          >
            <div className="w-10 h-10 bg-white/95 backdrop-blur-sm rounded-xl shadow-lg flex items-center justify-center border border-orange-200 hover:scale-110 transition-transform duration-300">
              <FaNodeJs className="w-6 h-6 text-green-600" />
            </div>
          </div>

          {/* Express.js - 7:30 o'clock (225 degrees) */}
          <div
            className="absolute transform -translate-x-1/2 -translate-y-1/2 animate-float-medium z-20"
            style={{ top: "calc(50% + 68px)", left: "calc(50% - 88px)" }}
          >
            <div className="w-10 h-10 bg-white/95 backdrop-blur-sm rounded-xl shadow-lg flex items-center justify-center border border-orange-200 hover:scale-110 transition-transform duration-300">
              <SiExpress className="w-6 h-6 text-gray-700" />
            </div>
          </div>

          {/* React - 9 o'clock (270 degrees) */}
          <div
            className="absolute transform -translate-x-1/2 -translate-y-1/2 animate-float-fast z-20"
            style={{ top: "calc(50% - 10px)", left: "calc(50% - 120px)" }}
          >
            <div className="w-10 h-10 bg-white/95 backdrop-blur-sm rounded-xl shadow-lg flex items-center justify-center border border-orange-200 hover:scale-110 transition-transform duration-300">
              <FaReact className="w-6 h-6 text-blue-400" />
            </div>
          </div>

          {/* Tailwind CSS - 10:30 o'clock (315 degrees) */}
          <div
            className="absolute transform -translate-x-1/2 -translate-y-1/2 animate-float-medium z-20"
            style={{ top: "calc(50% - 88px)", left: "calc(50% - 88px)" }}
          >
            <div className="w-10 h-10 bg-white/95 backdrop-blur-sm rounded-xl shadow-lg flex items-center justify-center border border-orange-200 hover:scale-110 transition-transform duration-300">
              <SiTailwindcss className="w-6 h-6 text-cyan-500" />
            </div>
          </div>
        </div>

        <div className="flex-1">
          <p className="text-sm text-justify leading-6 whitespace-pre-line">
            {ABOUT_ME.content}
          </p>

          <div className="flex gap-4 mt-6">
            {ABOUT_ME.socialLink.map((item) => (
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
            <div className="flex items-center gap-3 p-4 bg-white/50 dark:bg-white/10 rounded-lg border border-orange-100 dark:border-white/10">
              <FaEnvelope className="text-primary text-lg" />
              <div>
                <p className="text-xs text-gray-600 dark:text-gray-300">
                  Email
                </p>
                <p className="text-sm font-medium">{ABOUT_ME.email}</p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-3 p-4 bg-white/50 dark:bg-white/10 rounded-lg border border-orange-100 dark:border-white/10">
              <FaPhone className="text-primary text-lg" />
              <div>
                <p className="text-xs text-gray-600 dark:text-gray-300">
                  Phone
                </p>
                <p className="text-sm font-medium">{ABOUT_ME.phone}</p>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-center gap-3 p-4 bg-white/50 dark:bg-white/10 rounded-lg border border-orange-100 dark:border-white/10">
              <FaLocationArrow className="text-primary text-lg" />
              <div>
                <p className="text-xs text-gray-600 dark:text-gray-300">
                  Location
                </p>
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
