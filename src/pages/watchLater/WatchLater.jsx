import React from "react";
import { Link } from "react-router-dom";

export default function MyLearning() {
  return (
    <>
      <section className="py-5 mx-10 my-10 bg-teal-600 rounded-xl md:mx-20">
        <div className="px-4 ">
          <small className="text-gray-50 ">FREE ONLINE COURSES </small>
          <h1 className="mb-4 text-lg font-bold text-white md:text-xl lg:text-2xl xl:text-3xl">
            Sharpen Your Skills With Professional Online Courses
          </h1>
          <p className="mb-4 text-sm text-gray-50 md:text-md xl:text-2xl">
            Join our free online courses and enhance your skills today!
          </p>
          <a as={Link} to="#">
            <button className="px-3 py-1 text-lg font-semibold text-blue-600 bg-green-300 rounded-md shadow-md md:px-6 md:py-2">
              Join Now
            </button>
          </a>
        </div>
      </section>

      {/* watch later */}
      <section className="mx-10 md:mx-20 ">
        <h2 className="mb-10 text-xl font-bold md:text-2xl dark:text-gray-50">
          watching later
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {/* card1 */}
          <div className="max-w-sm overflow-hidden bg-white border border-gray-200 rounded-lg cursor-pointer hover:shadow">
            <a className="relative" href="#">
              <img
                src="../Image/pyton.png"
                alt="Course Image"
                className="object-cover w-full h-44"
              />
            </a>
            <div className="relative p-5">
              <i className="absolute text-xl fa-regular fa-bookmark top-5 right-5"></i>
              <h5 className="text-2xl font-bold tracking-tight text-gray-900">
                UX/UI Design Course
              </h5>
              <p className="mt-2 font-normal text-gray-700">
                A UX/UI design course teaches creating user-centered designs,
                including user research, wireframing, prototyping, and visual
                design.
              </p>
              <div className="flex items-center mt-4">
                <img
                  className="w-10 h-10 rounded-full"
                  src="../Image/profile.jpg"
                  alt="Instructor Photo"
                />
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-900">
                    Prashant Kumar Singh
                  </p>
                  <p className="text-sm text-gray-500">Software Developer</p>
                </div>
              </div>
              <div className="flex items-center justify-between mt-4 text-gray-500">
                <div className="flex items-center">
                  <i className="w-5 h-5 mt-2 text-green-600 fa-solid fa-book-open"></i>
                  <span className="ml-2 text-sm font-bold">10 Lectures</span>
                </div>
                <div className="flex items-center">
                  <i className="w-5 h-5 mt-2 text-green-600 fa-regular fa-clock"></i>
                  <span className="ml-2 text-sm font-bold">1hr 30mins</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
