// Import the icons we want to use for floating icons
import { FaHtml5, FaCss3, FaNodeJs, FaReact } from "react-icons/fa";
import {
  SiDjango,
  SiExpress,
  SiNextdotjs,
  SiTailwindcss,
} from "react-icons/si";
import { Link } from "react-scroll";

import { STATS } from "../utils/data";
import StatInfoCard from "../components/StatInfoCard";

const Hero = () => {
  return (
    <section id="hero" className="container mx-auto px-8">
      <div className="flex flex-col lg:flex-row gap-14 items-center justify-between mt-[80px]">
        <div className="order-2 lg:order-1 text-center lg:text-left mt-16 lg:mt-0">
          <h3 className="signature-font text-3xl lg:text-5xl font-medium text-black dark:text-white leading-snug">
            👋 Hi, I&apos;m Sran
          </h3>
          <h1 className="w-full lg:w-[480px] text-4xl lg:text-5xl font-bold leading-[50px] lg:leading-[60px] mt-3 bg-gradient-primary bg-clip-text text-transparent">
            Building Scalable & User Centric Web Apps
          </h1>

          <p className="w-full lg:w-[500px] text-sm lg:text-base mt-4">
            I&apos;m a passionate Full Stack Developer specializing in building
            responsive, accessible, and dynamic web applications using modern
            technologies like MERN, PERN, Django, Tailwind CSS, HTML5, and CSS3.
            From frontend interfaces to backend APIs, I craft seamless user
            experiences with a strong focus on performance and scalability.
          </p>

          <div className="flex justify-center lg:justify-start gap-4 md:gap-8 mt-6">
            <Link
              to="projects"
              smooth
              spy
              offset={-80}
              className="flex-1 md:flex-none action-btn-outline btn-scale-anim cursor-pointer flex items-center justify-center"
            >
              View My Work
            </Link>
            <a
              href="/my-resume.pdf"
              download="Sran_Resume.pdf"
              className="flex-1 md:flex-none action-btn btn-scale-anim text-center"
            >
              Download Resume
            </a>
          </div>
        </div>
        {/* Avatar container with floating icons - larger container to accommodate all icons */}
        <div className="relative order-1 lg:order-2 flex items-center justify-center w-80 h-80 z-0">
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
