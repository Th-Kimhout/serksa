import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { fetchCourseCard, checkIfWatchLater, addToWatchLater, removeFromWatchLater } from "../../services/user/userAction";

// WatchLater component
export default function WatchLater() {
  const [course, setCourse] = useState({});
  const [isWatchLater, setIsWatchLater] = useState(false);
  
  const { id: courseId } = useParams();
  const userId = localStorage.getItem("userId");
  const accessToken = localStorage.getItem("accessToken");

  useEffect(() => {
    const loadCourseData = async () => {
      try {
        const courseData = await fetchCourseCard(courseId, accessToken);
        setCourse(courseData);
        
        const watchLaterData = await checkIfWatchLater(userId, courseId, accessToken);
        setIsWatchLater(watchLaterData.isInWatchLater);
      } catch (error) {
        console.error("Error loading course data:", error);
      }
    };

    loadCourseData();
  }, [courseId, accessToken, userId]);

  const handleAddToWatchLater = async () => {
    try {
      await addToWatchLater(userId, courseId, accessToken);
      setIsWatchLater(true);
    } catch (error) {
      console.error("Error adding to Watch Later:", error);
    }
  };

  const handleRemoveFromWatchLater = async () => {
    try {
      await removeFromWatchLater(userId, courseId, accessToken);
      setIsWatchLater(false);
    } catch (error) {
      console.error("Error removing from Watch Later:", error);
    }
  };

  return (
    <div className="dark">
      <section className="py-5 mx-10 my-10 bg-primary dark:bg-gray-900 dark:text-gray-50 rounded-xl md:mx-20 font-englishFont min-w-5">
        <div className="px-4 ">
          <small className="text-gray-50">FREE ONLINE COURSES</small>
          <h1 className="mb-4 text-lg font-bold text-white md:text-xl lg:text-2xl xl:text-3xl">
            Sharpen Your Skills With Professional Online Courses
          </h1>
          <p className="mb-4 text-sm text-gray-50 md:text-md xl:text-2xl">
            Join our free online courses and enhance your skills today!
          </p>
          <button
            as={Link}
            to="/course"
            className="px-3 py-1 text-lg font-semibold text-blue-600 bg-green-300 rounded-md shadow-md md:px-6 md:py-2"
          >
            Join Now
          </button>
        </div>
      </section>

      <section className="mx-10 md:mx-20 font-englishFont ">
      <h2 className="mb-10 text-Title font-bold md:text-2xl dark:text-gray-50">
          watching later
        </h2>
        <div className="grid md:grid-2 lg:grid-3 xl:grid-4 mt-4">
          <div>
            {/* <h2>{course.name}</h2>
            <p>{course.description}</p>
            {isWatchLater ? (
            <button onClick={handleRemoveFromWatchLater}>Remove from Watch Later</button>
            ) : (
            <button onClick={handleAddToWatchLater}>Add to Watch Later</button>
            )} */}
          </div>
        </div>
      </section>
    </div>
  );
}
