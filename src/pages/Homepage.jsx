import { CategoryCard } from "../components/CategoryCard";
import { PopularCard } from "../components/PopularCard";
import Courses from "../components/sections/BestCourses";
import EducationalTips from "../components/sections/Trick";

import heroImage from "../image/heroImage.png";
export function Homepage() {
  return (
    <section>
      <div className="w-4/5 mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between bg-white py-2">
          <div className="md:w-1/2">
            <h1 className="text-4xl font-bold text-green-700">
              Take your time
            </h1>
            <h2 className="text-4xl font-bold text-gray-800 mt-2">
              and learn from Anywhere
            </h2>
            <p className="mt-4 text-gray-600">
              Welcome to Serksa, your gateway to limitless learning! Our
              platform offers a wide range of courses designed to help you gain
              new skills, deepen your knowledge, and achieve your goals.
            </p>
            <button className="mt-6 px-6 py-2 bg-green-700 text-white font-semibold rounded-full shadow-md hover:bg-green-800 transition">
              Learn now{" "}
              <i class="fa-solid fa-arrow-right-long pl-1 w-3 h-3"></i>
            </button>
          </div>

          <div className="relative mt-10 md:mt-0 md:w-1/2">
            <img
              src={heroImage}
              alt="Student learning"
              className="rounded-xl"
            />

            <div className="absolute top-0 right-0 bg-white border border-gray-300 rounded-md shadow-md px-5 py-2 text-center">
              <p className="text-sm font-semibold text-green-700">250</p>
              <p className="text-xs text-green-700">Active students</p>
            </div>

            <div className="absolute bottom-0 left-0 bg-white border border-gray-300 rounded-md shadow-md p-2 px-5 py-2 text-center">
              <p className="text-sm font-semibold text-green-700">150</p>
              <p className="text-xs text-green-700">Free Course</p>
            </div>
          </div>
        </div>

        <div className="bg-white grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex flex-col items-start justify-start">
            <i class="fa-solid fa-headphones text-green-700 text-4xl"></i>
            <h3 className="text-lg font-bold text-gray-800 mt-4">
              Powerful Program
            </h3>
            <p className="text-gray-600 mt-2">
              Our programs are set up for the student in the world to study far
              away
            </p>
            <button className="mt-2 px-4 py-2 bg-green-700 text-white rounded-full shadow-md hover:bg-green-800 transition">
              <i class="fa-solid fa-arrow-right-long w-3 h-3"></i>
            </button>
          </div>

          <div className="flex flex-col items-start justify-start">
            <i class="fa-solid fa-book text-green-700 text-4xl"></i>
            <h3 className="text-lg font-bold text-gray-800 mt-4">
              24/7 Supports
            </h3>
            <p className="text-gray-600 mt-2">
              If you have any question, you can contact our support, We will
              answer you as possible
            </p>
            <button className="mt-2 px-4 py-2 bg-green-700 text-white rounded-full shadow-md hover:bg-green-800 transition">
              <i class="fa-solid fa-arrow-right-long w-3 h-3"></i>
            </button>
          </div>

          <div className="flex flex-col items-start justify-start">
            <h3 className="text-2xl font-bold text-gray-800">
              Our best feature
            </h3>
            <h4 className="text-2xl font-bold text-green-700 mt-2">
              Special for you
            </h4>
            <p className="text-gray-600 mt-4">
              Look into yourself, get something in return for your achievements
            </p>
          </div>
        </div>

        <div className="text-center mt-20">
          <h1 className="text-4xl font-bold text-green-700">All Categories </h1>
          <p className="text-gray-600 mt-2">
            Gain comprehensive knowledge and skills through our expertly
            designed courses, tailored to enhance your learning experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-20">
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
        </div>
      </div>

      <div className="py-14 bg-secondary w-full mt-20">
        <h1 className="text-4xl font-bold text-white text-center">
          Our popular course
        </h1>
        <p className="text-white mt-2 w-3/4 mx-auto text-center">
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-12 w-4/5 mx-auto">
          <PopularCard />
          <PopularCard />
          <PopularCard />
        </div>
        <div class="flex flex-col w-4/5 mt-20 mx-auto">
          <h1 class="text-xl font-bold text-left text-white md:text-4xl">
            Programming languages
          </h1>
          <span class="block w-32 h-2 md:w-64 bg-white mr-auto mt-3"></span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-12 w-4/5 mx-auto">
          <PopularCard />
          <PopularCard />
          <PopularCard />
        </div>
      </div>

      <h1 className="text-4xl font-bold text-black text-center mt-20">
          Educational Tips <span className="ext-4xl font-bold text-green-700">& Tricks</span>
        </h1> 
        <EducationalTips />
        <Courses/>
    </section>
  );
}
