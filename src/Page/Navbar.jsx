import React, { useState } from "react";

const Header = () => {
  // State to control mobile menu visibility
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Toggle the mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="sticky top-0 z-10 bg-white">
      {/* Navbar */}
      <nav className="bg-white flex justify-between items-center w-4/5 mx-auto font-english">
        {/* Logo and Links container */}
        <div className="flex items-center space-x-6">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src="src/assets/logo computer-01.png"
              alt="New Logo"
              className="h-20 w-32"
            />
          </div>

          {/* Links (Hidden on mobile, shown on larger screens) */}
          <ul className="hidden md:flex space-x-4 text-gray-900 font-english text-lg">
            <li>
              <a href="#" className="hover:text-blue-600">
                Courses
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600">
                Category
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600">
                My Learning
              </a>
            </li>
          </ul>
        </div>

        {/* Search and icons */}
        <div className="flex items-center space-x-6">
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="border border-gray-300 rounded-md pl-3 px-10 py-1 text-xs"
            />
            <button className="absolute right-2 top-1 text-gray-900">
              <svg
                className="h-4 w-4"
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

          {/* Icons */}
          <button className="text-gray-600">
            <img
              src="src/assets/moon.png"
              className="h-4 w-4"
              alt="New Moon Icon"
            />
          </button>

          {/* User profile */}
          <img
            src="https://m.media-amazon.com/images/M/MV5BODYwODYzMDk0OF5BMl5BanBnXkFtZTgwNzQ4MjYyNDM@._V1_.jpg"
            alt="New Profile"
            className="h-6 w-6 rounded-full border-2 border-gray-300"
          />
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-gray-900 focus:outline-none"
          >
            <svg
              className="h-4 w-4"
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

      {/* Mobile Menu */}
      <div
        className={`md:hidden ${
          isMobileMenuOpen ? "" : "hidden"
        } bg-white border-b-2 border-gray-200 p-4 font-english}
      >
        <ul className="space-y-4 text-gray-900 font-semibold text-lg">
          <li>
            <a href="#" className="hover:text-blue-600">
              Courses
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-600">
              Category
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-600">
              About Us
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-600">
              My Learning
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
