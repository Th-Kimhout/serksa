
export function Footers() {
  return (
    <footer>
      <section className="border-2 mt-10 w-4-5 mx-auto bg-white sm:pt-14 lg:pt-20">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-2 gap-x-5 gap-y-12 md:grid-cols-5 md:gap-x-12">
            <div>
              <img className="w-40 h-30" src="src/assets/logo computer-01.png" alt="logo image" />
              <h1 className="text-3xl font-bold text-green-600 text-start">
                SERKSA
              </h1>
              <p className="text-black mt-5">
                Empowering learners worldwide with accessible and engaging
                content.
              </p>
              <div className="flex mt-5">
                <i className="fa-solid fa-phone-volume w-4 h-4 text-blue-500 mr-3"></i>
                <p>+012 (345) 678 99</p>
              </div>
            </div>
            <div>
              <p className="text-base text-black font-bold">Resources</p>
              <ul className="mt-8 space-y-4">
                <li>
                  <a
                    href="#"
                    className="text-base text-gray-500 transition-all duration-100 hover:text-blue-600"
                  >
                    Saas Development
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-base text-gray-500 transition-all duration-100 hover:text-blue-600"
                  >
                    Our Courses
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-base text-gray-500 transition-all duration-100 hover:text-blue-600"
                  >
                    Our Categories
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-base text-gray-500 transition-all duration-100 hover:text-blue-600"
                  >
                    User Strategy
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="text-base text-black font-bold">Company</p>
              <ul className="mt-8 space-y-4">
                <li>
                  <a
                    href="#"
                    className="text-base text-gray-500 transition-all duration-100 hover:text-blue-600"
                  >
                    About Landio
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-base text-gray-500 transition-all duration-100 hover:text-blue-600"
                  >
                    Contact & Support
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-base text-gray-500 transition-all duration-100 hover:text-blue-600"
                  >
                    Success History
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-base text-gray-500 transition-all duration-100 hover:text-blue-600"
                  >
                    Setting & Privacy
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="text-base text-black font-bold">Quick Links</p>
              <ul className="mt-8 space-y-4">
                <li>
                  <a
                    href="#"
                    className="text-base text-gray-500 transition-all duration-100 hover:text-blue-600"
                  >
                    Premium Support
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-base text-gray-500 transition-all duration-100 hover:text-blue-600"
                  >
                    Our Services
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-base text-gray-500 transition-all duration-100 hover:text-blue-600"
                  >
                    Know Our Team
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-base text-gray-500 transition-all duration-100 hover:text-blue-600"
                  >
                    Download App
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="text-base text-black font-bold">Follow us on</p>
              <ul className="flex items-center space-x-3 md:order-3 mt-10">
                <li>
                  <a
                    href="#"
                    className="flex items-center justify-center text-blue-600 transition-all duration-200 bg-transparent border border-blue-600 rounded-full w-8 h-8 hover:bg-blue-600 hover:border-blue-600 hover:text-white"
                  >
                    <i className="fa-brands fa-facebook-f w-4 h-4 text-center"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center justify-center text-blue-400 transition-all duration-200 bg-transparent border border-blue-400 rounded-full w-8 h-8 hover:bg-blue-400 hover:border-blue-400 hover:text-white"
                  >
                    <i className="fa-brands fa-twitter w-4 h-4 text-center"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center justify-center text-red-600 transition-all duration-200 bg-transparent border border-red-600 rounded-full w-8 h-8 hover:bg-red-600 hover:border-red-600 hover:text-white"
                  >
                    <i className="fa-brands fa-youtube w-5 h-4 text-center"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center justify-center text-pink-600 transition-all duration-200 bg-transparent border border-pink-600 rounded-full w-8 h-8 hover:bg-pink-600 hover:border-pink-600 hover:text-white"
                  >
                    <i className="fa-brands fa-invision w-4 h-4 text-center"></i>
                  </a>
                </li>
              </ul>
              <p className="w-full mt-7 text-sm text-black">© 2024 CSTAD</p>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
}