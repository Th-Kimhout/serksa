import { useState } from "react";
import { Link } from "react-router-dom";

export function NavbarComponent() {
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);

  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    // Toggle the 'dark' class on the body or html element
    if (darkMode) {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  };

  const toggleMobileMenu = () => {
    setMobileMenuVisible(!mobileMenuVisible);
  };

  return (
    <>
      <header className="sticky top-0 z-10 bg-white dark:bg-textBlack">
        <nav className="container flex items-center justify-between mx-auto bg-white dark:bg-textBlack">
          <div className="flex items-center space-x-6">
            <div className="flex items-center">
              <Link to="/">
                <img
                  src="src/assets/Image/logo.png"
                  alt="logo image"
                  className="w-20 h-15"
                />
              </Link>
            </div>

            <ul className="hidden space-x-4 text-sm text-gray-600 md:flex dark:text-textDark">
              <li>
                <Link
                  to="/CoursePage"
                  className="hover:text-blueLight dark:hover:text-blue-400"
                >
                  Courses
                </Link>
              </li>
              <li>
                <Link
                  to="/Category"
                  className="hover:text-blueLight dark:hover:text-blue-400"
                >
                  Category
                </Link>
              </li>
              <li>
                <Link
                  to="/AboutPage"
                  className="hover:text-blueLight dark:hover:text-blue-400"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/MyLearning"
                  className="hover:text-blueLight dark:hover:text-blue-400"
                >
                  WatchLater
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex items-center space-x-6">
            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                className="px-20 py-2 pl-3 text-xs border border-gray-300 rounded-md dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300"
              />
              <button className="absolute right-2 top-1 text-textGray dark:text-textDark">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-4.35-4.35M18 11a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </div>

            <button
              className="text-black rounded-md dark:text-textDark"
              onClick={toggleDarkMode}
              aria-label={
                darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"
              }
            >
              <i
                className={`fas ${darkMode ? "fa-sun" : "fa-moon"} h-5 w-5`}
              ></i>
            </button>

            <Link to="/login">
              <img
                src="src/assets/Image/instructor.png"
                alt="Profile"
                className="w-6 h-6 border-2 border-gray-300 rounded-full dark:border-gray-700"
              />
            </Link>
          </div>

          <div className="md:hidden">
            <button
              id="mobile-menu-btn"
              className="text-gray-600 dark:text-textDark focus:outline-none"
              onClick={toggleMobileMenu}
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </nav>

        <div
          id="mobile-menu"
          className={`bg-white dark:bg-gray-800 border-b-2 dark:border-gray-700 p-4 md:hidden ${
            mobileMenuVisible ? "" : "hidden"
          }`}
        >
          <ul className="space-y-4 text-sm font-semibold text-gray-600 dark:text-textDark">
            <li>
              <Link
                to="/CoursePage"
                className="hover:text-blueLight dark:hover:text-blue-400"
              >
                Courses
              </Link>
            </li>
            <li>
              <Link
                to="/Category"
                className="hover:text-blueLight dark:hover:text-blue-400"
              >
                Category
              </Link>
            </li>
            <li>
              <Link
                to="/AboutPage"
                className="hover:text-blueLight dark:hover:text-blue-400"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/watchLater"
                className="hover:text-blueLight dark:hover:text-blue-400"
              >
                Watch Later
              </Link>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
}
