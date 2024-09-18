import React from 'react';

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
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg cursor-pointer hover:shadow overflow-hidden">
      <a className="relative" href="#">
        <img src={course.imgSrc} alt={course.alt} className="w-full h-44 object-cover" />
      </a>
      <div className="p-5 relative">
        <i className="fa-regular fa-bookmark absolute top-5 right-5 text-xl"></i>
        <h5 className="text-2xl font-bold tracking-tight text-gray-900">
          {course.title}
        </h5>
        <p className="mt-2 font-normal text-gray-700">{course.description}</p>

        <div className="flex items-center mt-4">
          <img className="w-10 h-10 rounded-full" src={course.instructorImg} alt="Instructor Photo" />
          <div className="ml-3">
            <p className="text-sm font-medium text-gray-900">{course.instructorName}</p>
            <p className="text-sm text-gray-500">{course.instructorRole}</p>
          </div>
        </div>

        <div className="mt-4 flex items-center justify-between text-gray-500">
          <div className="flex items-center">
            <i className="fa-solid fa-book-open w-5 h-5 mt-2 text-green-600"></i>
            <span className="ml-2 font-bold text-sm">{course.lectures} Lectures</span>
          </div>
          <div className="flex items-center">
            <i className="fa-regular fa-clock w-5 h-5 mt-2 text-green-600"></i>
            <span className="ml-2 font-bold text-sm">{course.duration}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const CoursesGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 w-4/5 mx-auto">
      {courses.map((course, index) => (
        <CourseCard key={index} course={course} />
      ))}
    </div>
  );
};

export default CoursesGrid;
