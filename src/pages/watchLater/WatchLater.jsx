import React from 'react'
import { Link } from 'react-router-dom';

export default function MyLearning() {
  return (
    <>
     <section className="bg-secondary py-5 rounded-xl mx-10 md:mx-20 my-10">
  <div className=" px-4 ">
    <small className="text-gray-50 " >FREE ONLINE COURSES </small>
    <h1 className="text-white text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold mb-4">
      Sharpen Your Skills With Professional Online Courses
    </h1>
    <p className="text-gray-50 text-sm md:text-md xl:text-2xl mb-4">
      Join our free online courses and enhance your skills today!
    </p>
    <a as={Link} to="#" >
      <button className="bg-green-300 text-blueLight px-3 md:px-6 py-1 md:py-2 rounded-md shadow-md font-semibold text-lg" >Join Now</button> 
    </a>
  </div>
</section>

{/* watch later */}
<section className="mx-10 md:mx-20 ">
<h2 className="text-xl md:text-2xl font-bold mb-10 dark:text-gray-50">watching later</h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
  {/* card1 */}
<div className="max-w-sm bg-white border border-gray-200 dark:bg-cardDark rounded-lg cursor-pointer hover:shadow overflow-hidden">
        <a className="relative" href="#">
          <img
            src="src/assets/Image/uxui.jpg "
            alt="Course Image"
            className="w-full h-44 object-cover"
          />
        </a>
        <div className="p-5 relative">
          <i className="fa-regular fa-bookmark absolute top-5 right-5 text-xl dark:text-primary"></i>
          <h5 className="text-2xl font-bold tracking-tight text-textBlack dark:text-textDark">
            UX/UI Design Course
          </h5>
          <p className="mt-2 font-normal text-textGray dark:text-textDark">
            A UX/UI design course teaches creating user-centered designs,
            including user research, wireframing, prototyping, and visual design.
          </p>
          <div className="flex items-center mt-4">
            <img className="w-10 h-10 rounded-full" src="../Image/profile.jpg" alt="Instructor Photo" />
            <div className="ml-3">
              <p className="text-sm font-medium text-textBlack dark:text-textDark">Prashant Kumar Singh</p>
              <p className="text-sm text-gray-500 dark:text-textDark">Software Developer</p>
            </div>
          </div>
          <div className="mt-4 flex items-center justify-between text-gray-500">
            <div className="flex items-center">
              <i className="fa-solid fa-book-open w-5 h-5 mt-2 text-primary dark:text-primary"></i>
              <span className="ml-2 font-bold text-sm">10 Lectures</span>
            </div>
            <div className="flex items-center">
              <i className="fa-regular fa-clock w-5 h-5 mt-2 text-primary dark:text-primary"></i>
              <span className="ml-2 font-bold text-sm">1hr 30mins</span>
            </div>
          </div>
        </div>
      </div>
</div>
</section>
    </>
  );
  };