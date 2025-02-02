import { CategoryCard } from "../../components/Cards/CategoryCard";
import { PopularCard } from "../../components/Cards/PopularCard";
import React from "react";
import hero from "../../assets/Image/hero.png";

export function Homepage() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="container mx-auto dark:bg-gray-900">
        <div className="flex flex-col items-center justify-between py-2 bg-white md:flex-row dark:text-textDark dark:bg-gray-900">
          <div className="md:w-1/2">
            <h1 className="font-bold text-Title text-primary lg:text-heroText dark:text-primary">
              Take your time
            </h1>
            <h2 className="mt-2 font-bold text-Title lg:text-heroText text-textBlack dark:text-white">
              and learn from Anywhere
            </h2>
            <p className="mt-4 text-textGray text-Description dark:text-gray-300">
              Welcome to Serksa, your gateway to limitless learning! Our
              platform offers a wide range of courses designed to help you gain
              new skills, deepen your knowledge, and achieve your goals.
            </p>
            <button className="px-6 py-2 mt-6 font-semibold text-white transition rounded-full shadow-md bg-primary dark:bg-primary hover:bg-green-800">
              Learn now{" "}
              <i className="w-3 h-3 pl-1 fa-solid fa-arrow-right-long"></i>
            </button>
          </div>

          <div className="relative mt-10 md:mt-0 md:w-1/2">
            <img src={hero} alt="Student learning" className="rounded-xl" />

            <div className="absolute top-0 right-0 px-5 py-2 text-center bg-white border border-gray-300 rounded-md shadow-md dark:bg-gray-700">
              <p className="text-sm font-semibold text-primary dark:text-primary">
                250
              </p>
              <p className="text-xs text-primary dark:text-white">
                Active students
              </p>
            </div>

            <div className="absolute bottom-0 left-0 p-2 px-5 py-2 text-center bg-white border border-gray-300 rounded-md shadow-md dark:bg-gray-700">
              <p className="text-sm font-semibold text-primary dark:text-primary">
                150
              </p>
              <p className="text-xs text-primary dark:text-primary">
                Free Course
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 bg-white dark:bg-textBlack md:grid-cols-3">
          <div className="flex flex-col items-start justify-start">
            <i className="fa-solid fa-headphones text-primary dark:text-primary text-heroText"></i>
            <h3 className="mt-4 text-lg font-bold text-textBlack dark:text-white">
              Powerful Program
            </h3>
            <p className="mt-2 text-textGray text-Description dark:text-gray-300">
              Our programs are set up for the student in the world to study far
              away
            </p>
          </div>

          <div className="flex flex-col items-start justify-start">
            <i className="fa-solid fa-book text-primary dark:text-primary text-heroText"></i>
            <h3 className="mt-4 text-lg font-bold text-textBlack dark:text-white">
              24/7 Supports
            </h3>
            <p className="mt-2 text-textGray text-Description dark:text-gray-300">
              If you have any question, you can contact our support, We will
              answer you as possible
            </p>
          </div>

          <div className="flex flex-col items-start justify-start">
            <h3 className="text-2xl font-bold text-textBlack dark:text-white">
              Our best feature
            </h3>
            <h4 className="mt-2 text-2xl font-bold text-primary dark:text-primary">
              Special for you
            </h4>
            <p className="mt-4 text-textGray text-Description dark:text-gray-300">
              Look into yourself, get something in return for your achievements
            </p>
          </div>
        </div>
      </div>

      <CategoryCard />

      <div className="w-full mt-20 py-14 bg-secondary dark:bg-gray-900">
        <h1 className="font-bold text-center text-white text-heroText">
          Our popular course
        </h1>
        <p className="w-3/4 mx-auto mt-2 text-center text-white text-Description">
          Unlock your potential with Our Best Course, where expert-led lessons
          meet practical skills.
        </p>

        <div className="flex flex-col w-4/5 mx-auto mt-20">
          <h1 className="text-xl font-bold text-left text-white md:text-heroText">
            Web development
          </h1>
          <span className="block w-32 h-2 mt-3 mr-auto bg-white md:w-64"></span>
        </div>

        <PopularCard />

        <div className="flex flex-col w-4/5 mx-auto mt-20">
          <h1 className="text-xl font-bold text-left text-white md:text-heroText">
            Programming languages
          </h1>
          <span className="block w-32 h-2 mt-3 mr-auto bg-white md:w-64"></span>
        </div>

        <PopularCard />
      </div>

      <h1 className="mt-20 font-bold text-center text-black lg:text-heroText text-heroResponsive dark:text-white">
        Educational Tips{" "}
        <span className="font-bold ext-4xl text-primary dark:text-primary">
          & Tricks
        </span>
      </h1>

      {/* Trick learn */}
      <div className="w-4/5 p-4 mx-auto sm:p-8">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 sm:gap-8">
          <div className="overflow-hidden bg-white rounded-lg shadow-lg dark:bg-black">
            <img
              src="src/assets/Image/review.png"
              alt=""
              className="object-cover w-full h-40 sm:h-48"
            />
            <div className="p-4 sm:p-6">
              <h3 className="mb-2 text-lg font-semibold text-black sm:text-xl dark:text-white">
                Review regularly
              </h3>
              <p className="text-sm text-textGray dark:text-gray-300 sm:text-base">
                Revisit previous lessons to strengthen memory retention.
              </p>
            </div>
          </div>

          <div className="overflow-hidden bg-white rounded-lg shadow-lg dark:bg-black">
            <img
              src="src/assets/Image/practise.jpg"
              alt=""
              className="object-cover w-full h-40 sm:h-48"
            />
            <div className="p-4 sm:p-6">
              <h3 className="mb-2 text-lg font-semibold text-black sm:text-xl dark:text-white">
                Practice and application
              </h3>
              <p className="text-sm text-textGray dark:text-gray-300 sm:text-base">
                Apply concepts through real-world projects and case studies.
              </p>
            </div>
          </div>

          <div className="overflow-hidden bg-white rounded-lg shadow-lg dark:bg-black">
            <img
              src="src/assets/Image/visual.jpg"
              alt=""
              className="object-cover w-full h-40 sm:h-48"
            />
            <div className="p-4 sm:p-6">
              <h3 className="mb-2 text-lg font-semibold text-black sm:text-xl dark:text-white">
                Visual learning
              </h3>
              <p className="text-sm text-textGray dark:text-gray-300 sm:text-base">
                This method emphasizes using images, diagrams, charts, and
                videos to help you grasp and retain information.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Best Course */}
      <div className="w-4/5 p-6 px-5 py-8 mx-auto bg-green-100 rounded-lg dark:bg-textDark">
        <h2 className="mb-8 text-3xl font-bold dark:text-textBlack">
          Best languages courses of SERKSA
        </h2>
        <div className="flex justify-between space-x-10">
          {/* HTML */}
          <div className="flex flex-col items-center">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
              alt="HTML"
              className="w-16 h-16"
            />
            <p className="mt-2 font-bold text-center dark:text-textBlack">
              HTML
            </p>
          </div>
          {/* CSS */}
          <div className="flex flex-col items-center">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
              alt="CSS"
              className="w-16 h-16"
            />
            <p className="mt-2 font-bold text-center dark:text-textBlack">
              CSS
            </p>
          </div>
          {/* JavaScript */}
          <div className="flex flex-col items-center">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
              alt="JavaScript"
              className="w-16 h-16"
            />
            <p className="mt-2 font-bold text-center dark:text-textBlack">
              JavaScript
            </p>
          </div>
          {/* Bootstrap */}
          <div className="flex flex-col items-center">
            <img
              src="src/assets/Image/Bootstrap_logo.svg.png"
              alt="JavaScript"
              className="w-16 h-16"
            />
            <p className="mt-2 font-bold text-center dark:text-textBlack">
              Bootstrap
            </p>
          </div>
          {/* Tailwind CSS */}
          <div className="flex flex-col items-center">
            <img
              src="src/assets/Image/tailwind.png"
              alt="Tailwind CSS"
              className="h-16 w-25"
            />
            <p className="mt-2 font-bold text-center dark:text-textBlack">
              Tailwind
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
