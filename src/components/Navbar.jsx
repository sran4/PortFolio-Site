import { useEffect, useState } from "react";
import { MENU_LINKS } from "../utils/data";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [theme, setTheme] = useState("light");

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(true); // Always show menu on large screens
      } else {
        setIsOpen(false); // Hide menu by default on small screens
      }
    };

    // Set initial state based on screen size
    handleResize();

    // Listen to resize events
    window.addEventListener("resize", handleResize);

    // Cleanup listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    // Default to dark when no stored preference
    const initial = stored ?? "dark";
    if (initial === "dark") {
      document.documentElement.classList.add("dark");
      setTheme("dark");
    } else {
      document.documentElement.classList.remove("dark");
      setTheme("light");
    }
  }, []);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    localStorage.setItem("theme", next);
    if (next === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <nav className="container mx-auto sticky top-5 z-10">
      <div className="flex items-center justify-between rounded-full bg-white/25 dark:bg-white/10 border border-[#fee6cc] dark:border-white/10 backdrop-blur-[10px] m-5 p-3 md:p-0">
        <div className="ml-1 md:ml-6 -mb-1">
          <span className="text-3xl md:text-2xl font-bold bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-transparent">
            Sran.dev
          </span>
        </div>

        {/* Hamburger Icon (Visible only on small screens) */}
        <button
          className="block md:hidden text-[#333] dark:text-white mr-2 focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>

        {/* Navigation Links */}
        <ul
          className={`
           ${isOpen ? "flex" : "hidden"} 
          menu-wrapper`}
        >
          {MENU_LINKS.map((item) => (
            <li key={item.id}>
              <Link
                activeClass="active"
                to={item.to}
                smooth
                spy
                offset={item.offset}
                className="menu-item"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Theme Toggle + Hire Me */}
        <div className="flex items-center gap-1 md:gap-2 pr-1 md:pr-3">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="h-8 w-8 md:h-10 md:w-10 rounded-full flex items-center justify-center bg-white/60 dark:bg-white/10 border border-[#fee6cc] dark:border-white/10 text-[#333] dark:text-white hover:scale-105 transition"
          >
            {theme === "dark" ? "🌙" : "☀️"}
          </button>
          <Link
            to="contact"
            smooth
            spy
            offset={-80}
            className="inline-flex items-center justify-center h-10 md:h-12 text-[14px] md:text-[15px] font-medium text-white bg-gradient-primary rounded-full px-2 md:px-9 transition-transform duration-300 ease-in-out hover:scale-105 cursor-pointer whitespace-nowrap"
          >
            Hire Me
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
