import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark, faBookOpen, faClock } from '@fortawesome/free-solid-svg-icons';
import { faBookmark as farBookmark } from '@fortawesome/free-regular-svg-icons';

const CourseCard = () => {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg cursor-pointer hover:shadow overflow-hidden">
      <a className="relative" href="#">
        <img
          src="src/assets/Image/pyton.png"
          alt="Course Image"
          className="w-full h-44 object-cover"
        />
      </a>

      <div className="p-5 relative">
        <FontAwesomeIcon
          icon={farBookmark}
          className="absolute top-5 right-5 text-xl"
        />
        <h5 className="text-2xl font-bold tracking-tight text-gray-900">
          UX/UI Design Course
        </h5>
        <p className="mt-2 font-normal text-gray-700">
          A UX/UI design course teaches creating user-centered designs,
          including user research, wireframing, prototyping, and visual design.
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

        <div className="mt-4 flex items-center justify-between text-gray-500">
          <div className="flex items-center">
            <FontAwesomeIcon icon={faBookOpen} className="w-5 h-5 mt-2 text-green-600" />
            <span className="ml-2 font-bold text-sm">10 Lectures</span>
          </div>
          <div className="flex items-center">
            <FontAwesomeIcon icon={faClock} className="w-5 h-5 mt-2 text-green-600" />
            <span className="ml-2 font-bold text-sm">1hr 30mins</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
