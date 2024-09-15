import React, { useState } from "react";

const Header = () => {
  // State to control mobile menu visibility
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Toggle the mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="sticky top-0 z-10">
      {/* Navbar */}
      <nav className="bg-white flex justify-between items-center w-4/5 mx-auto font-serif">
        {/* Logo and Links container */}
        <div className="flex items-center space-x-6">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src="src/assets/logo computer-01.png"
              alt="New Logo"
              className="h-10 w-15"
            />
          </div>

          {/* Links (Hidden on mobile, shown on larger screens) */}
          <ul className="hidden md:flex space-x-4 text-gray-600 text-sm font-body">
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
            <button className="absolute right-2 top-1 text-gray-500">
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
            src="data:image/webp;base64,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"
            alt="New Profile"
            className="h-6 w-6 rounded-full border-2 border-gray-300"
          />
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-gray-600 focus:outline-none"
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
        } bg-white border-b-2 border-gray-200 p-4 font-serif`}
      >
        <ul className="space-y-4 text-gray-600 font-semibold text-sm">
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
