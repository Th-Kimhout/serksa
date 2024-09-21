import { CategoryCard } from "../../components/cards/CategoryCard";
import { PopularCard } from "../../components/cards/PopularCard";
import React from "react";
import hero from "../../assets/Image/hero.jpg";

export function Homepage() {
  return (
    <section>
      <div className="w-4/5 mx-auto">
        <div className="flex flex-col items-center justify-between py-2 bg-white md:flex-row">
          <div className="md:w-1/2">
            <h1 className="text-4xl font-bold text-green-700">
              Take your time
            </h1>
            <h2 className="mt-2 text-4xl font-bold text-gray-800">
              and learn from Anywhere
            </h2>
            <p className="mt-4 text-gray-600">
              Welcome to Serksa, your gateway to limitless learning! Our
              platform offers a wide range of courses designed to help you gain
              new skills, deepen your knowledge, and achieve your goals.
            </p>
            <button className="px-6 py-2 mt-6 font-semibold text-white transition bg-green-700 rounded-full shadow-md hover:bg-green-800">
              Learn now{" "}
              <i class="fa-solid fa-arrow-right-long pl-1 w-3 h-3"></i>
            </button>
          </div>

          <div className="relative mt-10 md:mt-0 md:w-1/2">
            <img src={hero} alt="Student learning" className="rounded-xl" />

            <div className="absolute top-0 right-0 px-5 py-2 text-center bg-white border border-gray-300 rounded-md shadow-md">
              <p className="text-sm font-semibold text-green-700">250</p>
              <p className="text-xs text-green-700">Active students</p>
            </div>

            <div className="absolute bottom-0 left-0 p-2 px-5 py-2 text-center bg-white border border-gray-300 rounded-md shadow-md">
              <p className="text-sm font-semibold text-green-700">150</p>
              <p className="text-xs text-green-700">Free Course</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 bg-white md:grid-cols-3">
          <div className="flex flex-col items-start justify-start">
            <i class="fa-solid fa-headphones text-green-700 text-4xl"></i>
            <h3 className="mt-4 text-lg font-bold text-gray-800">
              Powerful Program
            </h3>
            <p className="mt-2 text-gray-600">
              Our programs are set up for the student in the world to study far
              away
            </p>
            <button className="px-4 py-2 mt-2 text-white transition bg-green-700 rounded-full shadow-md hover:bg-green-800">
              <i class="fa-solid fa-arrow-right-long w-3 h-3"></i>
            </button>
          </div>

          <div className="flex flex-col items-start justify-start">
            <i class="fa-solid fa-book text-green-700 text-4xl"></i>
            <h3 className="mt-4 text-lg font-bold text-gray-800">
              24/7 Supports
            </h3>
            <p className="mt-2 text-gray-600">
              If you have any question, you can contact our support, We will
              answer you as possible
            </p>
            <button className="px-4 py-2 mt-2 text-white transition bg-green-700 rounded-full shadow-md hover:bg-green-800">
              <i class="fa-solid fa-arrow-right-long w-3 h-3"></i>
            </button>
          </div>

          <div className="flex flex-col items-start justify-start">
            <h3 className="text-2xl font-bold text-gray-800">
              Our best feature
            </h3>
            <h4 className="mt-2 text-2xl font-bold text-green-700">
              Special for you
            </h4>
            <p className="mt-4 text-gray-600">
              Look into yourself, get something in return for your achievements
            </p>
          </div>
        </div>

        {/* <div className="mt-20 text-center">
          <h1 className="text-4xl font-bold text-green-700">All Categories </h1>
          <p className="mt-2 text-gray-600">
            Gain comprehensive knowledge and skills through our expertly
            designed courses, tailored to enhance your learning experience.
          </p>
        </div> */}
      </div>
      <CategoryCard />

      <div className="w-full mt-20 py-14 bg-secondary">
        <h1 className="text-4xl font-bold text-center text-white">
          Our popular course
        </h1>
        <p className="w-3/4 mx-auto mt-2 text-center text-white">
          Unlock your potential with Our Best Course, where expert-led lessons
          meet practical skills. Whether you're a beginner or looking to enhance
          your knowledge, this course provides all the tools you need to
          succeed. Learn at your own pace, anytime, anywhere, and achieve your
          goals with confidence!
        </p>
        <div class="flex flex-col w-4/5 mt-20 mx-auto">
          <h1 class="text-xl font-bold text-left text-white md:text-4xl">
            Web development
          </h1>
          <span class="block w-32 h-2 md:w-64 bg-white mr-auto mt-3"></span>
        </div>
        <PopularCard />
        <div class="flex flex-col w-4/5 mt-20 mx-auto">
          <h1 class="text-xl font-bold text-left text-white md:text-4xl">
            Programming languages
          </h1>
          <span class="block w-32 h-2 md:w-64 bg-white mr-auto mt-3"></span>
        </div>
        <PopularCard />
      </div>

      <h1 className="mt-20 text-4xl font-bold text-center text-black">
        Educational Tips{" "}
        <span className="font-bold text-green-700 ext-4xl">& Tricks</span>
      </h1>

      {/* Trick learn */}
      <div className="w-4/5 p-4 mx-auto sm:p-8">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 sm:gap-8">
          <div className="overflow-hidden bg-white rounded-lg shadow-lg">
            <img
              src="src/assets/Image/review.png"
              alt=""
              className="object-cover w-full h-40 sm:h-48"
            />
            <div className="p-4 sm:p-6">
              <h3 className="mb-2 text-lg font-semibold sm:text-xl">
                Review regularly
              </h3>
              <p className="text-sm text-gray-600 sm:text-base">
                {" "}
                Revisit previous lessons to strengthen memory retention. This
                could be through re-reading notes, watching summary videos, or
                taking practice quizzes.
              </p>
            </div>
          </div>
          <div className="overflow-hidden bg-white rounded-lg shadow-lg">
            <img
              src="src/assets/Image/practise.jpg"
              alt=""
              className="object-cover w-full h-40 sm:h-48"
            />
            <div className="p-4 sm:p-6">
              <h3 className="mb-2 text-lg font-semibold sm:text-xl">
                Practice and application
              </h3>
              <p className="text-sm text-gray-600 sm:text-base">
                Apply concepts through real-world projects and case studies.
                This could include solving problems, building models, or working
                on case studies.
              </p>
            </div>
          </div>
          <div className="overflow-hidden bg-white rounded-lg shadow-lg">
            <img
              src="src/assets/Image/visual.jpg"
              alt=""
              className="object-cover w-full h-40 sm:h-48"
            />
            <div className="p-4 sm:p-6">
              <h3 className="mb-2 text-lg font-semibold sm:text-xl">
                Visual learning
              </h3>
              <p className="text-sm text-gray-600 sm:text-base">
                This method emphasizes using images, diagrams, charts, and
                videos to help you grasp and retain information. Visual learners
                absorb knowledge best when they can see relationships between
                ideas,
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Best Course */}
      <div className="w-4/5 p-6 px-5 py-8 mx-auto bg-green-100 rounded-lg">
        <h2 className="mb-8 text-3xl font-bold">
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
            <p className="mt-2 font-bold text-center">HTML</p>
          </div>
          {/* CSS */}
          <div className="flex flex-col items-center">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
              alt="CSS"
              className="w-16 h-16"
            />
            <p className="mt-2 font-bold text-center">CSS</p>
          </div>
          {/* JavaScript */}
          <div className="flex flex-col items-center">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
              alt="JavaScript"
              className="w-16 h-16"
            />
            <p className="mt-2 font-bold text-center">JavaScript</p>
          </div>
          {/* Tailwind CSS */}
          <div className="flex flex-col items-center">
            <img
              src="src/assets/Image/tailwind.png"
              alt="Tailwind CSS"
              className="w-24 h-16"
            />
            <p className="mt-2 font-bold text-center">Tailwind CSS</p>
          </div>
          {/* Bootstrap */}
          <div className="flex flex-col items-center">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"
              alt="Bootstrap"
              className="w-16 h-16"
            />
            <p className="mt-2 font-bold text-center">Bootstrap</p>
          </div>
        </div>
      </div>
    </section>
  );
}
