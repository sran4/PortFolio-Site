import { FaReact, FaHtml5, FaCss3, FaNodeJs, FaGithub } from "react-icons/fa";
import { BiLogoJavascript } from "react-icons/bi";
import {
  SiExpress,
  SiMongodb,
  SiMysql,
  SiWebpack,
  SiDjango,
  SiPostgresql,
  SiTailwindcss,
  SiPostman,
  SiNextdotjs,
} from "react-icons/si";
import {
  VscVscode,
  VscCommentUnresolved,
  VscTerminalPowershell,
  VscEdit,
} from "react-icons/vsc";
import { FaGitAlt } from "react-icons/fa6";
import { MdGroups3 } from "react-icons/md";

import PROJECT_IMG_1 from "../assets/projectsImgs/inv-analytic.avif";
import PROJECT_IMG_2 from "../assets/projectsImgs/nextCart.avif";
import PROJECT_IMG_3 from "../assets/projectsImgs/netflix.avif";
import PROJECT_IMG_4 from "../assets/projectsImgs/bomCalc.avif";
import PROJECT_IMG_5 from "../assets/projectsImgs/MPICreator.avif";
import PROJECT_IMG_6 from "../assets/projectsImgs/portfolio.avif";

export const MENU_LINKS = [
  { id: "01", label: "Home", offset: -100, to: "hero" },
  { id: "02", label: "Skills", offset: -80, to: "skills" },
  { id: "03", label: "About Me", offset: -80, to: "about" },
  { id: "04", label: "Projects", offset: -80, to: "projects" },
  { id: "05", label: "Contact", offset: -80, to: "contact" },
];

export const STATS = [
  { id: "01", count: "5+", label: "Years of Experience" },
  { id: "02", count: "5", label: "Certifications Earned" },
  { id: "03", count: "50+", label: "Projects Completed" },
];

export const SKILL_TABS = [
  { id: "01", label: "All", value: "all" },
  { id: "02", label: "Frontend", value: "frontend" },
  { id: "03", label: "Backend", value: "backend" },
  { id: "04", label: "Tools", value: "tools" },
  { id: "05", label: "Skills", value: "soft-skills" },
];

export const SKILLS = [
  // 1. React
  {
    id: "01",
    icon: FaReact,
    skill: "React JS",
    progress: 95,
    type: "frontend",
    description:
      "Experienced in building scalable, component-driven web applications using React.js. Proficient in state management, hooks, and integrating third-party libraries for enhanced functionality.",
  },
  // 2. JavaScript
  {
    id: "02",
    icon: BiLogoJavascript,
    skill: "JavaScript",
    progress: 85,
    type: "frontend",
    description:
      "Skilled in writing clean, modular, and efficient JavaScript code to create interactive web functionalities. Well-versed in ES6+ features, DOM manipulation, and asynchronous programming",
  },
  // 3. Next.js
  {
    id: "03",
    icon: SiNextdotjs,
    skill: "Next.js",
    progress: 75,
    type: "frontend",
    description:
      "Experienced in building full-stack React applications with Next.js. Proficient in server-side rendering, static site generation, API routes, and optimizing performance for modern web applications.",
  },
  // 4. Tailwind CSS
  {
    id: "04",
    icon: SiTailwindcss,
    skill: "Tailwind CSS",
    progress: 90,
    type: "frontend",
    description:
      "Proficient in utility-first CSS framework for rapid UI development. Experienced in creating responsive, modern designs with Tailwind's comprehensive design system and custom configurations.",
  },
  // 5. HTML
  {
    id: "05",
    icon: FaHtml5,
    skill: "HTML",
    progress: 99,
    type: "frontend",
    description:
      "Expert in structuring web content with semantic HTML, ensuring accessibility and SEO optimization. Skilled at creating clean and maintainable markup for modern web applications.",
  },
  // 6. CSS
  {
    id: "06",
    icon: FaCss3,
    skill: "CSS",
    progress: 65,
    type: "frontend",
    description:
      "Proficient in designing visually appealing and responsive layouts using CSS and pre-processors like SCSS. Experienced in implementing animations, transitions, and custom designs with precision.",
  },
  // 07 Node JS
  {
    id: "07",
    icon: FaNodeJs,
    skill: "Node.js",
    progress: 81,
    type: "backend",
    description:
      "Skilled in building scalable and high-performance server-side applications using Node.js. Experienced in handling asynchronous operations, event-driven programming, and optimizing API performance.",
  },
  // 08. Express.js
  {
    id: "08",
    icon: SiExpress,
    skill: "Express.js",
    progress: 79,
    type: "backend",
    description:
      "Proficient in developing RESTful APIs and middleware using Express.js. Focused on creating secure, efficient, and maintainable backend architectures for web applications.",
  },
  // 09. MongoDB
  {
    id: "09",
    icon: SiMongodb,
    skill: "MongoDB",
    progress: 75,
    type: "backend",
    description:
      "Experienced in designing and managing NoSQL databases using MongoDB. Skilled in schema design, aggregation pipelines, and optimizing queries for performance and scalability.",
  },

  // 10. Python Django
  {
    id: "10",
    icon: SiDjango,
    skill: "Python Django",
    progress: 75,
    type: "backend",
    description:
      "Experienced in building robust web applications using Python Django framework. Proficient in creating RESTful APIs, handling authentication, and implementing MVC architecture for scalable backend solutions.",
  },
  // 11. Cursor
  {
    id: "11",
    icon: VscEdit,
    skill: "Cursor",
    progress: 85,
    type: "tools",
    description:
      "Proficient in using Cursor AI-powered code editor for enhanced development productivity. Skilled in leveraging AI assistance for code generation, debugging, and refactoring to accelerate development workflows.",
  },
  // 12. Visual Studio Code
  {
    id: "12",
    icon: VscVscode,
    skill: "Visual Studio Code",
    progress: 95,
    type: "tools",
    description:
      "Well-versed in using Visual Studio Code with custom extensions and debugging tools for a smooth development workflow. Optimized for productivity with shortcuts and automation.",
  },

  // 13. GitHub
  {
    id: "13",
    icon: FaGitAlt,
    skill: "Git & GitHub",
    progress: 75,
    type: "tools",
    description:
      "Experienced in version control and collaborative development using Git and GitHub. Proficient in branching strategies, pull requests, and maintaining clean commit histories.",
  },
  // 14. SQL

  {
    id: "14",
    icon: SiMysql,
    skill: "SQL",
    progress: 75,
    type: "backend",
    description:
      "Proficient in working with relational databases using SQL. Experienced in writing complex queries, optimizing database performance, and ensuring data integrity through normalization and indexing.",
  },
  // 15. PostgreSQL
  {
    id: "15",
    icon: SiPostgresql,
    skill: "PostgreSQL",
    progress: 76,
    type: "backend",
    description:
      "Proficient in PostgreSQL database management and optimization. Experienced in advanced SQL queries, indexing strategies, and database design for high-performance applications.",
  },
  // 16. Webpack

  {
    id: "16",
    icon: SiWebpack,
    skill: "Webpack",
    progress: 70,
    type: "tools",
    description:
      "Skilled in optimizing frontend performance with Webpack, including asset bundling and code splitting. Ensures efficient loading times and modular code structures.",
  },
  // 17. Postman
  {
    id: "17",
    icon: SiPostman,
    skill: "Postman",
    progress: 85,
    type: "tools",
    description:
      "Proficient in API testing and development using Postman. Experienced in creating comprehensive API test suites, documenting endpoints, and automating API workflows for efficient backend development.",
  },

  // 18. Problem-Solving
  {
    id: "18",
    icon: VscCommentUnresolved,
    skill: "Problem-Solving",
    progress: 85,
    type: "soft-skills",
    description:
      "Strong analytical skills to identify and resolve technical challenges efficiently. Approaches problems with a structured and logical mindset to deliver effective solutions.",
  },
  // 19. Collaboration
  {
    id: "19",
    icon: MdGroups3,
    skill: "Collaboration",
    progress: 70,
    type: "soft-skills",
    description:
      "Experienced in working within teams, contributing ideas, and integrating feedback. Effective communication ensures smooth project execution and shared success.",
  },
  // 20. Attention to Detail
  {
    id: "20",
    icon: VscTerminalPowershell,
    skill: "Attention to Detail",
    progress: 83,
    type: "soft-skills",
    description:
      "Meticulous in writing clean, maintainable code and ensuring UI/UX consistency. Focused on delivering high-quality work with precision and thoroughness.",
  },
];

export const ABOUT_ME = {
  content: `I'm a passionate Frontend Developer with a strong foundation in building responsive, user-friendly web applications. With a keen eye for design and performance, I specialize in crafting seamless digital experiences using modern technologies like React.js, JavaScript, Tailwind CSS, and Django. My goal is to bridge the gap between aesthetics and functionality, ensuring every project I work on is both visually appealing and highly performant.

In addition to my software development journey, I bring 20+ years of proven success as a Manufacturing Manager in the PCBA industry, where I led teams, drove operational efficiency, and consistently took companies toward profitability and growth through innovation and change management. Recognizing the need for speed and accuracy in the manufacturing process, I created several custom applications for the PCBA industry to streamline workflows, reduce errors, and accelerate delivery timelines.

My journey in web development started with curiosity—how does the web work? Fast forward to today, I've built dynamic applications, collaborated with cross-functional teams, and combined my manufacturing leadership experience with technical expertise to solve real-world industry challenges. I love tackling problems, optimizing user experiences, and bringing creative ideas to life through code.

Let's build something amazing together!`,
  socialLink: [
    {
      id: "01",
      label: "GitHub",
      icon: FaGithub,
      link: "https://github.com/sran4?tab=repositories",
    },
  ],

  email: "sransatwant@gmail.com",
  phone: "(408) 561-0966",
  location: "San Jose, CA, USA",
};

export const PROJECTS = [
  {
    id: 1,
    title:
      "Professional Invoice Management System | Next.js 15, TypeScript, MongoDB",
    description:
      "A comprehensive invoice management application built with Next.js 15 and TypeScript. Features 5 beautiful invoice templates, auto-calculations for taxes and discounts, real-time dashboard with business metrics, and complete invoice lifecycle management. Includes user authentication, template preview, and status tracking for draft, sent, paid, and overdue invoices.",
    image: PROJECT_IMG_1,
    githubUrl: "https://github.com/sran4/invoice-management-system",
    liveUrl: "https://invoice-management-system-seven.vercel.app/",
    technologies: [
      "Next.js 15",
      "React 18",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "Framer Motion",
      "MongoDB Atlas",
      "Mongoose",
      "NextAuth.js",
      "Lucide React",
      "Sonner",
      "Pdfjs",
      "Chart.js",
    ],
  },
  {
    id: 2,
    title: "E-commerce Platform with React & Node.js",
    description:
      "Built a complete e-commerce solution with user authentication, product catalog, shopping cart, and payment integration. Implemented admin dashboard for inventory management and order processing.",
    image: PROJECT_IMG_2,
    githubUrl: "https://github.com/sran4/gocart_full_stack",
    liveUrl: "https://gocart-full-stack-rjei.vercel.app/",
    technologies: [
      "React",
      "openai",
      "redux-toolkit",
      "stripe",
      "clerk",
      "neondatabase",
      "Node.js",
      "MongoDB",
      "Stripe",
      "Redux",
    ],
  },
  {
    id: 3,
    title:
      "Netflix Clone | React, Zustand, Render, Axios, React Router DOM, MongoDB, Tailwind CSS, cors, TMDB API",
    description:
      "A full-stack Netflix clone built with React frontend and Node.js backend. Features user authentication, movie browsing, search functionality, and personalized recommendations using TMDB API. Includes responsive design, state management with Zustand, and seamless user experience.",
    image: PROJECT_IMG_3,
    githubUrl: "https://github.com/sran4/mern-netflix-clone",
    liveUrl: "https://netflix-clone-production-894e.up.railway.app/",
    technologies: [
      "React",
      "Zustand",
      "Render",
      "Axios",
      "React Router DOM",
      "MongoDB",
      "Tailwind CSS",
      "cors",
      "TMDB API",
    ],
  },
  {
    id: 4,
    title: "PCBA Quote System | Next.js 14, TypeScript, PDF Export",
    description:
      "A comprehensive PCB Assembly (PCBA) quote generation system featuring multi-step quote generation, component-based pricing for Passives, BGAs, QFNs, and Hand Solder components. Includes tiered pricing system with 9 pricing tiers, delivery options from 1-day to 2-week standard, NRE cost calculations, and professional PDF export. Features unique quote number generation, local data persistence, and modern dark theme UI optimized for manufacturing workflows.",
    image: PROJECT_IMG_4,
    githubUrl: "https://github.com/sran4/PCBA_Quote",
    liveUrl: "https://pcbaquotesystem.com",
    technologies: [
      "Next.js 14",
      "React 18",
      "TypeScript",
      "Tailwind CSS",
      "PDF Export",
      "Local Storage",
    ],
  },
  {
    id: 5,
    title: "MPI Creator | Manufacturing Process Instructions Management System",
    description:
      "A comprehensive manufacturing process instruction (MPI) management system built for the PCBA industry. Features real-time collaboration, drag-and-drop interface, version control, and audit trails. Includes role-based access control, JWT authentication, print preview, and professional document export capabilities. Engineers can create, edit, and manage MPIs with a global step library and automatic versioning.",
    image: PROJECT_IMG_5,
    githubUrl: "https://github.com/sran4/MPI_Creator",
    liveUrl: "https://mpi-creator.vercel.app/",
    technologies: [
      "Next.js 14",
      "React",
      "TypeScript",
      "Tailwind CSS v4",
      "MongoDB Atlas",
      "Mongoose",
      "JWT Authentication",
      "Radix UI",
      "Lucide React",
      "Framer Motion",
      "File Saver",
      "React Beautiful DND",
      "Cloudinary",
      "TinyMCE",
    ],
  },
  {
    id: 6,
    title: "Modern Portfolio Website | React 18, Vite, Tailwind CSS",
    description:
      "A fully responsive portfolio website featuring dark/light mode toggle, smooth scroll navigation, animated hero section with floating tech icons, projects carousel with touch support, and contact form with EmailJS integration. Includes honeypot spam protection, performance-optimized Vite build, and comprehensive technical proficiency showcase with filtering capabilities.",
    image: PROJECT_IMG_6,
    githubUrl: "https://github.com/sran4/PortFolio-Site",
    liveUrl: "https://port-folio-site-psi.vercel.app/",
    technologies: [
      "React 18",
      "Vite",
      "Tailwind CSS 3",
      "Framer Motion",
      "Embla Carousel",
      "React Scroll",
      "React Icons",
      "EmailJS",
    ],
  },
  {
    id: 7,
    title:
      "MERN Stack Real-Time Chat Application| React 18,socket.io,Zustand,React Router DOM, Vite, Tailwind CSS",
    description:
      "A modern, full-stack real-time chat application built with the MERN stack, featuring instant messaging, user authentication, and real-time updates.",
    image: PROJECT_IMG_6,
    githubUrl: "https://github.com/sran4/chat-app",
    liveUrl: "https://chat-app-six-livid-43.vercel.app/",
    technologies: [
      "React 18",
      "Vite",
      "Tailwind CSS 3",
      "Framer Motion",
      "Embla Carousel",
      "React Scroll",
      "React Icons",
      "EmailJS",
    ],
  },
];
