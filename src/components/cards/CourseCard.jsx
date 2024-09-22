import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
}) {
  return (
    <div className="max-w-sm bg-white border dark:bg-cardDark border-gray-200 rounded-lg cursor-pointer hover:shadow overflow-hidden ">
      <a className="relative" href="#">
        <img
          src={
            thumbnail
              ? thumbnail
              : `https://i.pinimg.com/564x/2a/86/a5/2a86a560f0559704310d98fc32bd3d32.jpg`
          }
          alt="Course Image"
          className="w-full h-44 object-cover"
        />
      </a>

      <div className="p-5 relative">
        <div className="flex justify-between">
          <h5 className="text-xl font-bold tracking-tight line-clamp-1 dark:text-textDark text-textBlack">
            {title}
          </h5>
          <FontAwesomeIcon icon={farBookmark} className=" text-xl" />
        </div>

        <p className="mt-2 font-normal text-textGray dark:text-textDark line-clamp-3">
          {description}
        </p>

        <div className="flex items-center mt-4">
          <img
            className="w-10 h-10 rounded-full"
            src="../Image/profile.jpg"
            alt="Instructor Photo"
          />
          <div className="ml-3">
            <p className="text-sm font-medium text-textBlack dark:text-textDark">
              {instructorUsername}
            </p>
            <p className="text-sm text-gray-500 dark:text-textDark">Software Developer</p>
          </div>
        </div>

        <div className="mt-4 flex items-center justify-between text-gray-500">
          <div className="flex items-center">
            <FontAwesomeIcon
              icon={faBookOpen}
              className="w-5 h-5 mt-2 text-primary dark:text-primary"
            />
            <span className="ml-2 font-bold text-sm">10 Lectures</span>
          </div>
          <div className="flex items-center">
            <FontAwesomeIcon
              icon={faClock}
              className="w-5 h-5 mt-2 text-primary dark:text-primary"
            />
            <span className="ml-2 font-bold text-sm">1hr 30mins</span>
          </div>
        </div>
      </div>
    </div>
  );
}
