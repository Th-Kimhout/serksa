import { useState } from 'react';

export function NavbarComponent() {
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuVisible(!mobileMenuVisible);
  };

  return (
    <>
      <nav className="bg-white flex justify-between items-center w-4/5 mx-auto">
        <div className="flex items-center space-x-6">
          <div className="flex items-center">
            <img src="../Image/logo.png"
                alt="logo image" className="h-15 w-20" />
          </div>
          
          <ul className="hidden md:flex space-x-4 text-gray-600 text-sm">
            <li><a href="#" className="hover:text-blue-600">Courses</a></li>
            <li><a href="#" className="hover:text-blue-600">Category</a></li>
            <li><a href="#" className="hover:text-blue-600">About Us</a></li>
            <li><a href="#" className="hover:text-blue-600">My Learning</a></li>
          </ul>
        </div>

        <div className="flex items-center space-x-6">
          <div className="relative">
            <input type="text" placeholder="Search" className="border border-gray-300 rounded-md pl-3 px-10 py-1 text-xs" />
            <button className="absolute right-2 top-1 text-gray-500">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35M18 11a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>
          
          <button className="text-gray-600">
            <img src="./img/moon.png" className="h-4 w-4" alt="Dark Mode Toggle" />
          </button>

          <img src="./img/♡TAEHYUNG♡.jfif" alt="Profile" className="h-6 w-6 rounded-full border-2 border-gray-300" />
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
          <li><a href="#" className="hover:text-blue-600">Courses</a></li>
          <li><a href="#" className="hover:text-blue-600">Category</a></li>
          <li><a href="#" className="hover:text-blue-600">About Us</a></li>
          <li><a href="#" className="hover:text-blue-600">My Learning</a></li>
        </ul>
      </div>
    </>
  );
}
