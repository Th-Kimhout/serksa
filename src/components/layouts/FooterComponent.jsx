import React from "react";

export default function FooterComponent() {
  return (
    <>
<footer>
  <section className=" mt-10 bg-white dark:bg-textBlack sm:pt-14 sm:pb-5 lg:pt-20">
    <div className="px-4 mx-auto sm:px-6 lg:px-8 container">
      <div className="grid grid-cols-2 gap-x-5 gap-y-12 md:grid-cols-5 md:gap-x-12">
        <div>
          <img
            className="w-35 h-32"
            src="src/assets/Image/logo.png"
            alt="logo image"
          />
          <h1 className="text-3xl font-bold text-primary dark:text-white text-start">
            SERKSA
          </h1>
          <p className="text-textBlack dark:text-gray-300 mt-5">
            Empowering learners worldwide with accessible and engaging content.
          </p>
        </div>
        <div>
          <p className="text-base text-textBlack dark:text-gray-200 font-bold">Resources</p>

          <ul className="mt-8 space-y-4">
            <li>
              <a
                href="#"
                title=""
                className="text-base text-textGray dark:text-gray-400 transition-all duration-100 hover:text-blueLight dark:hover:text-blueLight"
              >
                Saas Development
              </a>
            </li>
            <li>
              <a
                href="#"
                title=""
                className="text-base text-textGray dark:text-gray-400 transition-all duration-100 hover:text-blueLight dark:hover:text-blueLight"
              >
                Our Courses
              </a>
            </li>
            <li>
              <a
                href="#"
                title=""
                className="text-base text-textGray dark:text-gray-400 transition-all duration-100 hover:text-blueLight dark:hover:text-blueLight"
              >
                Our Gategories
              </a>
            </li>
            <li>
              <a
                href="#"
                title=""
                className="text-base text-textGray dark:text-gray-400 transition-all duration-100 hover:text-blueLight dark:hover:text-blueLight"
              >
                User Strategy
              </a>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-base text-textBlack dark:text-gray-200 font-bold">Company</p>

          <ul className="mt-8 space-y-4">
            <li>
              <a
                href="#"
                title=""
                className="text-base text-textGray dark:text-gray-400 transition-all duration-100 hover:text-blueLight dark:hover:text-blueLight"
              >
                About Landio
              </a>
            </li>
            <li>
              <a
                href="#"
                title=""
                className="text-base text-textGray dark:text-gray-400 transition-all duration-100 hover:text-blueLight dark:hover:text-blueLight"
              >
                Contact & Support
              </a>
            </li>
            <li>
              <a
                href="#"
                title=""
                className="text-base text-textGray dark:text-gray-400 transition-all duration-100 hover:text-blueLight dark:hover:text-blueLight"
              >
                Success History
              </a>
            </li>
            <li>
              <a
                href="#"
                title=""
                className="text-base text-textGray dark:text-gray-400 transition-all duration-100 hover:text-blueLight dark:hover:text-blueLight"
              >
                Setting & Privacy
              </a>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-base text-textBlack dark:text-gray-200 font-bold">
            Quicks Links
          </p>

          <ul className="mt-8 space-y-4">
            <li>
              <a
                href="#"
                title=""
                className="text-base text-textGray dark:text-gray-400 transition-all duration-100 hover:text-blueLight dark:hover:text-blueLight"
              >
                Premium Support
              </a>
            </li>
            <li>
              <a
                href="#"
                title=""
                className="text-base text-textGray dark:text-gray-400 transition-all duration-100 hover:text-blueLight dark:hover:text-blueLight"
              >
                Our Services
              </a>
            </li>
            <li>
              <a
                href="#"
                title=""
                className="text-base text-textGray dark:text-gray-400 transition-all duration-100 hover:text-blueLight dark:hover:text-blueLight"
              >
                Know Our Team
              </a>
            </li>
            <li>
              <a
                href="#"
                title=""
                className="text-base text-textGray dark:text-gray-400 transition-all duration-100 hover:text-blueLight dark:hover:text-blueLight"
              >
                Download App
              </a>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-base text-textBlack dark:text-gray-200 font-bold">
            Follow us on
          </p>

          <ul className="flex items-center space-x-3 md:order-3 mt-10">
            <li>
              <a
                href="#"
                title=""
                className="flex items-center justify-center text-blueLight dark:text-blue-400 transition-all duration-200 bg-transparent border border-blueLight dark:border-blue-400 rounded-full w-8 h-8 hover:bg-blueLight hover:border-blueLight hover:text-white"
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
            <p className="text-black dark:text-gray-300">+012 (345) 678 99</p>
          </div>
          <p className="w-full mt-7 text-sm text-textBlack dark:text-gray-400">
            © 2024 CSTAD
          </p>
        </div>
      </div>
    </div>
  </section>
</footer>

    </>
  );
}
