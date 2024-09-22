import { useState } from "react";
import { Link } from "react-router-dom";

export function NavbarComponent() {
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuVisible(!mobileMenuVisible);
  };

  return (
    <>
      <nav className="flex items-center justify-between w-4/5 mx-auto bg-white">
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

          <ul className="hidden space-x-4 text-sm text-gray-600 md:flex">
            <li>
              <Link to="/CoursePage" className="hover:text-blue-600">
                Courses
              </Link>
            </li>
            <li>
              <Link to="/Category" className="hover:text-blue-600">
                Category
              </Link>
            </li>
            <li>
              <Link to="/AboutPage" className="hover:text-blue-600">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/watchLater" className="hover:text-blue-600">
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
              className="px-20 py-2 pl-3 text-xs border border-gray-300 rounded-md"
            />
            <button className="absolute text-gray-500 right-2 top-1">
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
                  d="M21 21l-4.35-4.35M18 11a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>

          <button className="text-gray-600">
            <i class="fa-solid fa-moon h-4 w-4"></i>
          </button>
          <Link to="/login">
            <img
              src="src/assets/Image/instructor.png"
              alt="Profile"
              className="w-6 h-6 border-2 border-gray-300 rounded-full"
            />
          </Link>
        </div>

        <div className="md:hidden">
          <button
            id="mobile-menu-btn"
            className="text-gray-600 focus:outline-none"
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
        className={`bg-white border-b-2 border-gray-200 p-4 md:hidden ${
          mobileMenuVisible ? "" : "hidden"
        }`}
      >
        <ul className="space-y-4 text-sm font-semibold text-gray-600">
          <li>
            <Link to="/CoursePage" className="hover:text-blue-600">
              Courses
            </Link>
          </li>
          <li>
            <Link to="/Category" className="hover:text-blue-600">
              Category
            </Link>
          </li>
          <li>
            <Link to="/AboutPage" className="hover:text-blue-600">
              About Us
            </Link>
          </li>
          <li>
            <Link to="/MyLearning" className="hover:text-blue-600">
              My Learning
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
