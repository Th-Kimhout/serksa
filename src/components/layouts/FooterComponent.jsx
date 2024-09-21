import React from "react";

export default function FooterComponent() {
  return (
    <>
      <footer>
        <section className="mt-10 bg-white border-2 sm:pt-14 sm:pb-5 lg:pt-20">
          <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
            <div className="grid grid-cols-2 gap-x-5 gap-y-12 md:grid-cols-5 md:gap-x-12">
              <div>
                <img
                  className="w-32 h-32"
                  src="src/assets/Image/logo.png"
                  alt="logo image"
                />
                <h1 className="text-3xl font-bold text-green-600 text-start">
                  SERKSA
                </h1>
                <p className="mt-5 text-black">
                  Empowering learners worldwide with accessible and engaging
                  content.
                </p>
              </div>
              <div>
                <p className="text-base font-bold text-black">Resources</p>

                <ul className="mt-8 space-y-4">
                  <li>
                    <a
                      href="#"
                      title=""
                      className="text-base text-gray-500 transition-all duration-100 hover:text-blue-600"
                    >
                      Saas Development
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      title=""
                      className="text-base text-gray-500 transition-all duration-100 hover:text-blue-600"
                    >
                      Our Courses
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      title=""
                      className="text-base text-gray-500 transition-all duration-100 hover:text-blue-600"
                    >
                      Our Gategories
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      title=""
                      className="text-base text-gray-500 transition-all duration-100 hover:text-blue-600"
                    >
                      User Strategy
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <p className="text-base font-bold text-black">Company</p>

                <ul className="mt-8 space-y-4">
                  <li>
                    <a
                      href="#"
                      title=""
                      className="text-base text-gray-500 transition-all duration-100 hover:text-blue-600"
                    >
                      About Landio
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      title=""
                      className="text-base text-gray-500 transition-all duration-100 hover:text-blue-600"
                    >
                      Contact & Support
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      title=""
                      className="text-base text-gray-500 transition-all duration-100 hover:text-blue-600"
                    >
                      Success History
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      title=""
                      className="text-base text-gray-500 transition-all duration-100 hover:text-blue-600"
                    >
                      Setting & Privacy
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <p className="text-base font-bold text-black">Quicks Links</p>

                <ul className="mt-8 space-y-4">
                  <li>
                    <a
                      href="#"
                      title=""
                      className="text-base text-gray-500 transition-all duration-100 hover:text-blue-600"
                    >
                      Premium Support
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      title=""
                      className="text-base text-gray-500 transition-all duration-100 hover:text-blue-600"
                    >
                      Our Services
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      title=""
                      className="text-base text-gray-500 transition-all duration-100 hover:text-blue-600"
                    >
                      Know Our Team
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      title=""
                      className="text-base text-gray-500 transition-all duration-100 hover:text-blue-600"
                    >
                      Download App
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <p className="text-base font-bold text-black">Follow us on</p>

                <ul className="flex items-center mt-10 space-x-3 md:order-3">
                  <li>
                    <a
                      href="#"
                      title=""
                      className="flex items-center justify-center w-8 h-8 text-blue-600 transition-all duration-200 bg-transparent border border-blue-600 rounded-full hover:bg-blue-600 hover:border-blue-600 hover:text-white"
                    >
                      <i className="w-4 h-4 text-center fa-brands fa-facebook-f"></i>
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      title=""
                      className="flex items-center justify-center w-8 h-8 text-blue-400 transition-all duration-200 bg-transparent border border-blue-400 rounded-full hover:bg-blue-400 hover:border-blue-400 hover:text-white"
                    >
                      <i className="w-4 h-4 text-center fa-brands fa-twitter"></i>
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      title=""
                      className="flex items-center justify-center w-8 h-8 text-red-600 transition-all duration-200 bg-transparent border border-red-600 rounded-full hover:bg-red-600 hover:border-red-600 hover:text-white"
                    >
                      <i className="w-5 h-4 text-center fa-brands fa-youtube"></i>
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      title=""
                      className="flex items-center justify-center w-8 h-8 text-pink-600 transition-all duration-200 bg-transparent border border-pink-600 rounded-full hover:bg-pink-600 hover:border-pink-600 hover:text-white"
                    >
                      <i className="w-4 h-4 text-center fa-brands fa-invision"></i>
                    </a>
                  </li>
                </ul>
                <div className="flex mt-5">
                  <i className="w-4 h-4 mr-3 text-blue-500 fa-solid fa-phone-volume"></i>
                  <p>+012 (345) 678 99</p>
                </div>
                <p className="w-full text-sm text-black mt-7">© 2024 CSTAD</p>
              </div>
            </div>
          </div>
        </section>
      </footer>
    </>
  );
}
