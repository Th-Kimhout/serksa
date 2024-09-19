import { CategoryCard } from "../components/Cards/CategoryCard";
import { PopularCard } from "../components/Cards/PopularCard";
import Courses from "../components/Layouts/BestCourses";
import EducationalTips from "../components/Layouts/Trick";
import React from "react";

import heroImage from "../image/heroImage.png";
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
            <img
              src={heroImage}
              alt="Student learning"
              className="rounded-xl"
            />

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

        <div className="mt-20 text-center">
          <h1 className="text-4xl font-bold text-green-700">All Categories </h1>
          <p className="mt-2 text-gray-600">
            Gain comprehensive knowledge and skills through our expertly
            designed courses, tailored to enhance your learning experience.
          </p>
        </div>

        <CategoryCard />
      </div>

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
        <div className="grid w-4/5 grid-cols-1 gap-12 mx-auto mt-12 md:grid-cols-2 lg:grid-cols-3">
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
        <div className="grid w-4/5 grid-cols-1 gap-12 mx-auto mt-12 md:grid-cols-2 lg:grid-cols-3">
          <PopularCard />
          <PopularCard />
          <PopularCard />
        </div>
      </div>

      <h1 className="mt-20 text-4xl font-bold text-center text-black">
        Educational Tips{" "}
        <span className="font-bold text-green-700 ext-4xl">& Tricks</span>
      </h1>
      <EducationalTips />
      <Courses />
    </section>
  );
}
