import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSingleCourses } from "../../services/courses/getAllCourse";
import CourseDetailCard from "../../components/cards/CourseCardDetail";
import { getAllCourses } from "../../services/courses/getAllCourse";
import CourseCard from "../../components/Cards/CourseCard";

export default function CourseDetail() {
  const [course, setCourse] = useState(null); // For storing the course data
  const [error, setError] = useState(null); // For handling error
  const { id } = useParams(); // Get the course ID from URL params

  useEffect(() => {
    const fetchSingleCourse = async () => {
      try {
        const fetchedCourse = await getSingleCourses(id);
        setCourse(fetchedCourse); // Set the course data if found
      } catch (err) {
        setError(err); // Set error if the course is not found
        console.error("Error fetching course:", err);
      }
    };

    fetchSingleCourse();
  }, [id]); // Add id as a dependency
  const [courses, setCourses] = useState([]);
  console.log("course", courses);
  useEffect(() => {
    async function fetchAllCourses() {
      let content = await getAllCourses();
      console.log("course", content);
      setCourses(content);
    }
    fetchAllCourses();
  }, []);

  if (error) {
    return (
      <p>
        {error.description ? error.description : "Error fetching the course!"}
      </p>
    ); // Display the error message
  }

  if (!course) {
    return <p>Loading...</p>; // Show loading state while fetching data
  }

  return (
    <>
      <CourseDetailCard
        title={course.title}
        thumbnail={
          course.thumbnail
            ? course.thumbnail.replace("http://localhost:8080/image/", "")
            : ""
        }
        description={course.description}
        instructorUsername={course.instructorUsername}
      />
      <div className="container mx-auto mt-10 dark:">
        <p class="text-4xl text-primary font-bold mb-10">Playlist</p>
      </div>

      <section className="w-4/5 mx-auto mt-10">
        <div className="grid grid-cols-1 gap-5 mx-auto md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {courses.slice(0, 4).map((content) => (
            <CourseCard
              key={content.id}
              title={content.title}
              thumbnail={content.thumbnail.replace(
                "http://localhost:8080/image/",
                ""
              )}
              description={content.description}
              instructorUsername={content.instructorUsername}
              id={content.id}
            />
          ))}
        </div>
      </section>
    </>
  );
}
