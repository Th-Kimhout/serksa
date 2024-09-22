import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import {
  faBookmark,
  faBookOpen,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import { faBookmark as farBookmark } from "@fortawesome/free-regular-svg-icons";

export default function CourseCard({
  thumbnail,
  title,
  description,
  instructorUsername,
  id,
}) {
  return (
    <div className="max-w-sm overflow-hidden bg-white border border-gray-200 rounded-lg cursor-pointer hover:shadow ">
      <Link to={`/course-detail/${id}`} className="relative">
        <img
          src={
            thumbnail
              ? thumbnail
              : "https://i.pinimg.com/564x/2a/86/a5/2a86a560f0559704310d98fc32bd3d32.jpg"
          }
          alt="Course Image"
          className="object-cover w-full h-44"
        />
      </Link>

      <div className="relative p-5">
        <div className="flex justify-between">
          <h5 className="text-xl font-bold tracking-tight text-gray-900">
            {title}
          </h5>
          <FontAwesomeIcon icon={farBookmark} className="text-xl " />
        </div>

        <p className="mt-2 font-normal text-gray-700 line-clamp-3">
          {description}
        </p>

        <div className="items-center mt-4">
          <Link to="/instructorPage" className="flex ">
            <img
              className="w-10 h-10 rounded-full"
              src="../Image/profile.jpg"
              alt="Instructor Photo"
            />
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-900">
                {instructorUsername}
              </p>
              <p className="text-sm text-gray-500">Software Developer</p>
            </div>
          </Link>
        </div>

        <div className="flex items-center justify-between mt-4 text-gray-500">
          <div className="flex items-center">
            <FontAwesomeIcon
              icon={faBookOpen}
              className="w-5 h-5 mt-2 text-green-600"
            />
            <span className="ml-2 text-sm font-bold">10 Lectures</span>
          </div>
          <div className="flex items-center">
            <FontAwesomeIcon
              icon={faClock}
              className="w-5 h-5 mt-2 text-green-600"
            />
            <span className="ml-2 text-sm font-bold">1hr 30mins</span>
          </div>
        </div>
      </div>
    </div>
  );
}
