
import { useState } from 'react';
import { Link } from "react-router-dom";

export function NavbarComponent() {
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuVisible(!mobileMenuVisible);
  };

  return (
    <>
    <header className='sticky top-0 z-10 bg-white'>
    <nav className="bg-white flex justify-between items-center w-4/5 mx-auto">
        <div className="flex items-center space-x-6">
          <div className="flex items-center">
            <Link to="/">
              <img src="src/assets/Image/logo.png" alt="logo image" className="h-15 w-20" />
            </Link>
          </div>

          <ul className="hidden md:flex space-x-4 text-gray-600 text-sm">
            <li>
              <Link to="/CoursePage" className="hover:text-blueLight text-Description">Courses</Link>
            </li>
            <li>
              <Link to="/Category" className="hover:text-blueLight text-Description">Category</Link>
            </li>
            <li>
              <Link to="/AboutPage" className="hover:text-blueLight text-Description">About Us</Link>
            </li>
            <li>
              <Link to="/MyLearning" className="hover:text-blueLight text-Description">WatchLater</Link>
            </li>
          </ul>
        </div>

        <div className="flex items-center space-x-6">
          <div className="relative">
            <input type="text" placeholder="Search" className="border border-gray-300 rounded-md pl-3 px-20 py-2 text-xs" />
            <button className="absolute right-2 top-1 text-textGray">
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35M18 11a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>

          <button type="button" className="text-gray-600">
          <i class="fa-solid fa-moon h-5 w-5"></i>
          </button>

          <Link to="/login">
            <img src="src/assets/Image/instructor.png" alt="Profile" className="h-6 w-6 rounded-full border-2 border-gray-300" />
          </Link>
        </div>

        <div className="md:hidden">
          <button id="mobile-menu-btn" className="text-gray-600 focus:outline-none" onClick={toggleMobileMenu}>
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </nav>

      <div id="mobile-menu" className={`bg-white border-b-2 border-gray-200 p-4 md:hidden ${mobileMenuVisible ? '' : 'hidden'}`}>
        <ul className="space-y-4 text-gray-600 font-semibold text-sm">
          <li>
            <Link to="/CoursePage" className="hover:text-blueLight">Courses</Link>
          </li>
          <li>
            <Link to="/Category" className="hover:text-blueLight">Category</Link>
          </li>
          <li>
            <Link to="/AboutPage" className="hover:text-blueLight">About Us</Link>
          </li>
          <li>
            <Link to="/MyLearning" className="hover:text-blueLight">My Learning</Link>
          </li>
        </ul>
      </div>
    </header>
    </>
  );
}

