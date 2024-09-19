import React from "react";

const courses = [
  {
    imgSrc: "../Image/pyton.png",
    alt: "Python Course Image",
    title: "UX/UI Design Course",
    description:
      "A UX/UI design course teaches creating user-centered designs, including user research, wireframing, prototyping, and visual design.",
    instructorImg: "../Image/profile.jpg",
    instructorName: "Prashant Kumar Singh",
    instructorRole: "Software Developer",
    lectures: 10,
    duration: "1hr 30mins",
  },
  {
    imgSrc: "../Image/php.png",
    alt: "PHP Course Image",
    title: "UX/UI Design Course",
    description:
      "A UX/UI design course teaches creating user-centered designs, including user research, wireframing, prototyping, and visual design.",
    instructorImg: "../Image/profile.jpg",
    instructorName: "Prashant Kumar Singh",
    instructorRole: "Software Developer",
    lectures: 10,
    duration: "1hr 30mins",
  },
  {
    imgSrc: "../Image/photoshop.png",
    alt: "Photoshop Course Image",
    title: "UX/UI Design Course",
    description:
      "A UX/UI design course teaches creating user-centered designs, including user research, wireframing, prototyping, and visual design.",
    instructorImg: "../Image/profile.jpg",
    instructorName: "Prashant Kumar Singh",
    instructorRole: "Software Developer",
    lectures: 10,
    duration: "1hr 30mins",
  },
];

const CourseCard = ({ course }) => {
  return (
    <div className="max-w-sm overflow-hidden bg-white border border-gray-200 rounded-lg cursor-pointer hover:shadow">
      <a className="relative" href="#">
        <img
          src={course.imgSrc}
          alt={course.alt}
          className="object-cover w-full h-44"
        />
      </a>
      <div className="relative p-5">
        <i className="absolute text-xl fa-regular fa-bookmark top-5 right-5"></i>
        <h5 className="text-2xl font-bold tracking-tight text-gray-900">
          {course.title}
        </h5>
        <p className="mt-2 font-normal text-gray-700">{course.description}</p>

        <div className="flex items-center mt-4">
          <img
            className="w-10 h-10 rounded-full"
            src={course.instructorImg}
            alt="Instructor Photo"
          />
          <div className="ml-3">
            <p className="text-sm font-medium text-gray-900">
              {course.instructorName}
            </p>
            <p className="text-sm text-gray-500">{course.instructorRole}</p>
          </div>
        </div>

        <div className="flex items-center justify-between mt-4 text-gray-500">
          <div className="flex items-center">
            <i className="w-5 h-5 mt-2 text-green-600 fa-solid fa-book-open"></i>
            <span className="ml-2 text-sm font-bold">
              {course.lectures} Lectures
            </span>
          </div>
          <div className="flex items-center">
            <i className="w-5 h-5 mt-2 text-green-600 fa-regular fa-clock"></i>
            <span className="ml-2 text-sm font-bold">{course.duration}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const CoursesGrid = () => {
  return (
    <div className="grid w-4/5 grid-cols-1 gap-12 mx-auto md:grid-cols-2 lg:grid-cols-3">
      {courses.map((course, index) => (
        <CourseCard key={index} course={course} />
      ))}
    </div>
  );
};

export default CoursesGrid;
