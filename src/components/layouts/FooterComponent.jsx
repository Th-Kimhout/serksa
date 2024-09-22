import React from "react";

export default function FooterComponent() {
  return (
    <>
      <footer>
        <section className="border-2 mt-10 bg-white sm:pt-14 sm:pb-5 lg:pt-20">
          <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
            <div className="grid grid-cols-2 gap-x-5 gap-y-12 md:grid-cols-5 md:gap-x-12">
              <div>
                <img
                  className="w-32 h-32"
                  src="src/assets/Image/logo.png"
                  alt="logo image"
                />
                <h1 className="text-3xl font-bold text-primary text-start">
                  SERKSA
                </h1>
                <p className="text-textBlack mt-5">
                  Empowering learners worldwide with accessible and engaging
                  content.
                </p>
              </div>
              <div>
                <p className="text-base text-textBlack font-bold">Resources</p>

                <ul className="mt-8 space-y-4">
                  <li>
                    <a
                      href="#"
                      title=""
                      className="text-base text-textGray transition-all duration-100 hover:text-blueLight"
                    >
                      Saas Development
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      title=""
                      className="text-base text-textGray transition-all duration-100 hover:text-blueLight"
                    >
                      Our Courses
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      title=""
                      className="text-base text-textGray transition-all duration-100 hover:text-blueLight"
                    >
                      Our Gategories
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      title=""
                      className="text-base text-textGray transition-all duration-100 hover:text-blueLight"
                    >
                      User Strategy
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <p className="text-base text-textBlack font-bold">Company</p>

                <ul className="mt-8 space-y-4">
                  <li>
                    <a
                      href="#"
                      title=""
                      className="text-base text-textGray transition-all duration-100 hover:text-blueLight"
                    >
                      About Landio
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      title=""
                      className="text-base text-textGray transition-all duration-100 hover:text-blueLight"
                    >
                      Contact & Support
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      title=""
                      className="text-base text-textGray transition-all duration-100 hover:text-blueLight"
                    >
                      Success History
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      title=""
                      className="text-base text-textGray transition-all duration-100 hover:text-blueLight"
                    >
                      Setting & Privacy
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <p className="text-base text-textBlack font-bold">
                  Quicks Links
                </p>

                <ul className="mt-8 space-y-4">
                  <li>
                    <a
                      href="#"
                      title=""
                      className="text-base text-textGray transition-all duration-100 hover:text-blueLight"
                    >
                      Premium Support
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      title=""
                      className="text-base text-textGray transition-all duration-100 hover:text-blueLight"
                    >
                      Our Services
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      title=""
                      className="text-base text-textGray transition-all duration-100 hover:text-blueLight"
                    >
                      Know Our Team
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      title=""
                      className="text-base text-textGray transition-all duration-100 hover:text-blueLight"
                    >
                      Download App
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <p className="text-base text-textBlack font-bold">
                  Follow us on
                </p>

                <ul className="flex items-center space-x-3 md:order-3 mt-10">
                  <li>
                    <a
                      href="#"
                      title=""
                      className="flex items-center justify-center text-blueLight transition-all duration-200 bg-transparent border border-blueLight rounded-full w-8 h-8 hover:bg-blueLight hover:border-blueLight hover:text-white"
                    >
                      <i className="fa-brands fa-facebook-f w-4 h-4 text-center"></i>
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      title=""
                      className="flex items-center justify-center text-blue-400 transition-all duration-200 bg-transparent border border-blue-400 rounded-full w-8 h-8 hover:bg-blue-400 hover:border-blue-400 hover:text-white"
                    >
                      <i className="fa-brands fa-twitter w-4 h-4 text-center"></i>
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      title=""
                      className="flex items-center justify-center text-red-600 transition-all duration-200 bg-transparent border border-red-600 rounded-full w-8 h-8 hover:bg-red-600 hover:border-red-600 hover:text-white"
                    >
                      <i className="fa-brands fa-youtube w-5 h-4 text-center"></i>
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      title=""
                      className="flex items-center justify-center text-pink-600 transition-all duration-200 bg-transparent border border-pink-600 rounded-full w-8 h-8 hover:bg-pink-600 hover:border-pink-600 hover:text-white"
                    >
                      <i className="fa-brands fa-invision w-4 h-4 text-center"></i>
                    </a>
                  </li>
                </ul>
                <div className="flex mt-5">
                  <i className="fa-solid fa-phone-volume w-4 h-4 text-blue-500 mr-3"></i>
                  <p>+012 (345) 678 99</p>
                </div>
                <p className="w-full mt-7 text-sm text-textBlack">
                  © 2024 CSTAD
                </p>
                <button
                  id="theme-toggle"
                  type="button"
                  class="text-black bg-blue-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-5"
                >Dark
                  <svg
                    id="theme-toggle-dark-icon"
                    class="hidden w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
                  </svg>
                  <svg
                    id="theme-toggle-light-icon"
                    class="hidden w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </section>
      </footer>
    </>
  );
}
