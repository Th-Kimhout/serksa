import React from 'react'

export default function CoursePage() {
  return (
    <main>
      {/* Section 1 */}
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold text-green-700 mb-4">Here is Our Course Learning For Free</h1>
          <div className="max-w-2xl mx-auto">
            <div className="flex">
              <input
                type="text"
                placeholder="Course name or keywords..."
                className="flex-grow border rounded-l px-4 py-2"
              />
              <select className="border-t border-b px-4 py-2">
                <option>All categories</option>
              </select>
              <button className="bg-green-700 text-white px-6 py-2 rounded-r">Search</button>
            </div>
          </div>
          <p className="mt-4 text-gray-600">
            Unlock endless learning opportunities with our free courses, offering high-quality content,
            interactive lessons, and certifications to boost your skills—all at no cost!
          </p>
        </div>
      </section>

      {/* Section 2 */}
      <section className='ms-10 mt-10'>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 w-4/5 mx-auto">
      {/* Course Card 1 */}
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg cursor-pointer hover:shadow overflow-hidden">
        <a className="relative" href="#">
          <img
            src="../Image/pyton.png"
            alt="Course Image"
            className="w-full h-44 object-cover"
          />
        </a>
        <div className="p-5 relative">
          <i className="fa-regular fa-bookmark absolute top-5 right-5 text-xl"></i>
          <h5 className="text-2xl font-bold tracking-tight text-gray-900">
            UX/UI Design Course
          </h5>
          <p className="mt-2 font-normal text-gray-700">
            A UX/UI design course teaches creating user-centered designs,
            including user research, wireframing, prototyping, and visual design.
          </p>
          <div className="flex items-center mt-4">
            <img className="w-10 h-10 rounded-full" src="../Image/instructor.png" alt="Instructor Photo" />
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-900">Prashant Kumar Singh</p>
              <p className="text-sm text-gray-500">Software Developer</p>
            </div>
          </div>
          <div className="mt-4 flex items-center justify-between text-gray-500">
            <div className="flex items-center">
              <i className="fa-solid fa-book-open w-5 h-5 mt-2 text-green-600"></i>
              <span className="ml-2 font-bold text-sm">10 Lectures</span>
            </div>
            <div className="flex items-center">
              <i className="fa-regular fa-clock w-5 h-5 mt-2 text-green-600"></i>
              <span className="ml-2 font-bold text-sm">1hr 30mins</span>
            </div>
          </div>
        </div>
      </div>
      {/* Course Card 2 */}
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg cursor-pointer hover:shadow overflow-hidden">
        <a className="relative" href="#">
          <img
            src="../Image/php.png"
            alt="Course Image"
            className="w-full h-44 object-cover"
          />
        </a>
        <div className="p-5 relative">
          <i className="fa-regular fa-bookmark absolute top-5 right-5 text-xl"></i>
          <h5 className="text-2xl font-bold tracking-tight text-gray-900">
            Basic HTML Course
          </h5>
          <p className="mt-2 font-normal text-gray-700">
           A basic HTML courses covers structuring web pages with HTML tags, formatting text, embedding media, and creating links and forms.
          </p>
          <div className="flex items-center mt-4">
            <img className="w-10 h-10 rounded-full" src="../Image/instructor.png" alt="Instructor Photo" />
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-900">Prashant Kumar Singh</p>
              <p className="text-sm text-gray-500">Software Developer</p>
            </div>
          </div>
          <div className="mt-4 flex items-center justify-between text-gray-500">
            <div className="flex items-center">
              <i className="fa-solid fa-book-open w-5 h-5 mt-2 text-green-600"></i>
              <span className="ml-2 font-bold text-sm">10 Lectures</span>
            </div>
            <div className="flex items-center">
              <i className="fa-regular fa-clock w-5 h-5 mt-2 text-green-600"></i>
              <span className="ml-2 font-bold text-sm">1hr 30mins</span>
            </div>
          </div>
        </div>
      </div>
          {/* Course Card 3 */}
          <div className="max-w-sm bg-white border border-gray-200 rounded-lg cursor-pointer hover:shadow overflow-hidden">
        <a className="relative" href="#">
          <img
            src="../Image/php.png"
            alt="Course Image"
            className="w-full h-44 object-cover"
          />
        </a>
        <div className="p-5 relative">
          <i className="fa-regular fa-bookmark absolute top-5 right-5 text-xl"></i>
          <h5 className="text-2xl font-bold tracking-tight text-gray-900">
            Git And GitHub Course
          </h5>
          <p className="mt-2 font-normal text-gray-700">
          A GItHub course teaches version control with Git, repository management on GitHub, and collaboratve workflows.
          </p>
          <div className="flex items-center mt-4">
            <img className="w-10 h-10 rounded-full" src="../Image/instructor.png" alt="Instructor Photo" />
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-900">Prashant Kumar Singh</p>
              <p className="text-sm text-gray-500">Software Developer</p>
            </div>
          </div>
          <div className="mt-4 flex items-center justify-between text-gray-500">
            <div className="flex items-center">
              <i className="fa-solid fa-book-open w-5 h-5 mt-2 text-green-600"></i>
              <span className="ml-2 font-bold text-sm">10 Lectures</span>
            </div>
            <div className="flex items-center">
              <i className="fa-regular fa-clock w-5 h-5 mt-2 text-green-600"></i>
              <span className="ml-2 font-bold text-sm">1hr 30mins</span>
            </div>
          </div>
        </div>
      </div>
            {/* Course Card 4 */}
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg cursor-pointer hover:shadow overflow-hidden">
        <a className="relative" href="#">
          <img
            src="../Image/php.png"
            alt="Course Image"
            className="w-full h-44 object-cover"
          />
        </a>
        <div className="p-5 relative">
          <i className="fa-regular fa-bookmark absolute top-5 right-5 text-xl"></i>
          <h5 className="text-2xl font-bold tracking-tight text-gray-900">
          Tailwind CSS Course
          </h5>
          <p className="mt-2 font-normal text-gray-700">
          A Tailwind CSS course teaches how to use Tailwind CSS, a utility-first CSS framework designed to help developers quickly.
          </p>
          <div className="flex items-center mt-4">
            <img className="w-10 h-10 rounded-full" src="../Image/instructor.png" alt="Instructor Photo" />
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-900">Prashant Kumar Singh</p>
              <p className="text-sm text-gray-500">Software Developer</p>
            </div>
          </div>
          <div className="mt-4 flex items-center justify-between text-gray-500">
            <div className="flex items-center">
              <i className="fa-solid fa-book-open w-5 h-5 mt-2 text-green-600"></i>
              <span className="ml-2 font-bold text-sm">10 Lectures</span>
            </div>
            <div className="flex items-center">
              <i className="fa-regular fa-clock w-5 h-5 mt-2 text-green-600"></i>
              <span className="ml-2 font-bold text-sm">1hr 30mins</span>
            </div>
          </div>
        </div>
      </div>
            {/* Course Card 5 */}
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg cursor-pointer hover:shadow overflow-hidden">
        <a className="relative" href="#">
          <img
            src="../Image/php.png"
            alt="Course Image"
            className="w-full h-44 object-cover"
          />
        </a>
        <div className="p-5 relative">
          <i className="fa-regular fa-bookmark absolute top-5 right-5 text-xl"></i>
          <h5 className="text-2xl font-bold tracking-tight text-gray-900">
          Photoshop Course
          </h5>
          <p className="mt-2 font-normal text-gray-700">
          A Photoshop course teaches image editing, graphic design, photo retouching, and creative digital artwork skills.
          </p>
          <div className="flex items-center mt-4">
            <img className="w-10 h-10 rounded-full" src="../Image/instructor.png" alt="Instructor Photo" />
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-900">Prashant Kumar Singh</p>
              <p className="text-sm text-gray-500">Software Developer</p>
            </div>
          </div>
          <div className="mt-4 flex items-center justify-between text-gray-500">
            <div className="flex items-center">
              <i className="fa-solid fa-book-open w-5 h-5 mt-2 text-green-600"></i>
              <span className="ml-2 font-bold text-sm">10 Lectures</span>
            </div>
            <div className="flex items-center">
              <i className="fa-regular fa-clock w-5 h-5 mt-2 text-green-600"></i>
              <span className="ml-2 font-bold text-sm">1hr 30mins</span>
            </div>
          </div>
        </div>
      </div>
            {/* Course Card 6 */}
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg cursor-pointer hover:shadow overflow-hidden">
        <a className="relative" href="#">
          <img
            src="../Image/php.png"
            alt="Course Image"
            className="w-full h-44 object-cover"
          />
        </a>
        <div className="p-5 relative">
          <i className="fa-regular fa-bookmark absolute top-5 right-5 text-xl"></i>
          <h5 className="text-2xl font-bold tracking-tight text-gray-900">
          React Course
          </h5>
          <p className="mt-2 font-normal text-gray-700">
          A React course teaches building dynamic user interfaces using components, state management, and JSX in React.
          </p>
          <div className="flex items-center mt-4">
            <img className="w-10 h-10 rounded-full" src="../Image/instructor.png" alt="Instructor Photo" />
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-900">Prashant Kumar Singh</p>
              <p className="text-sm text-gray-500">Software Developer</p>
            </div>
          </div>
          <div className="mt-4 flex items-center justify-between text-gray-500">
            <div className="flex items-center">
              <i className="fa-solid fa-book-open w-5 h-5 mt-2 text-green-600"></i>
              <span className="ml-2 font-bold text-sm">10 Lectures</span>
            </div>
            <div className="flex items-center">
              <i className="fa-regular fa-clock w-5 h-5 mt-2 text-green-600"></i>
              <span className="ml-2 font-bold text-sm">1hr 30mins</span>
            </div>
          </div>
        </div>
      </div>
            {/* Course Card 7 */}
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg cursor-pointer hover:shadow overflow-hidden">
        <a className="relative" href="#">
          <img
            src="../Image/php.png"
            alt="Course Image"
            className="w-full h-44 object-cover"
          />
        </a>
        <div className="p-5 relative">
          <i className="fa-regular fa-bookmark absolute top-5 right-5 text-xl"></i>
          <h5 className="text-2xl font-bold tracking-tight text-gray-900">
          Bootstrap Course
          </h5>
          <p className="mt-2 font-normal text-gray-700">
          A Bootstrap course covers building responsive, mobile-first websites using pre-build components, grid system, and utilities.
          </p>
          <div className="flex items-center mt-4">
            <img className="w-10 h-10 rounded-full" src="../Image/instructor.png" alt="Instructor Photo" />
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-900">Prashant Kumar Singh</p>
              <p className="text-sm text-gray-500">Software Developer</p>
            </div>
          </div>
          <div className="mt-4 flex items-center justify-between text-gray-500">
            <div className="flex items-center">
              <i className="fa-solid fa-book-open w-5 h-5 mt-2 text-green-600"></i>
              <span className="ml-2 font-bold text-sm">10 Lectures</span>
            </div>
            <div className="flex items-center">
              <i className="fa-regular fa-clock w-5 h-5 mt-2 text-green-600"></i>
              <span className="ml-2 font-bold text-sm">1hr 30mins</span>
            </div>
          </div>
        </div>
      </div>
            {/* Course Card 8 */}
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg cursor-pointer hover:shadow overflow-hidden">
        <a className="relative" href="#">
          <img
            src="../Image/php.png"
            alt="Course Image"
            className="w-full h-44 object-cover"
          />
        </a>
        <div className="p-5 relative">
          <i className="fa-regular fa-bookmark absolute top-5 right-5 text-xl"></i>
          <h5 className="text-2xl font-bold tracking-tight text-gray-900">
          Responsive CSS Course
          </h5>
          <p className="mt-2 font-normal text-gray-700">
          Responsive CSS ensures web content adapts smoothly to different screen sizes and devices using flexible layouts and media queries.
          </p>
          <div className="flex items-center mt-4">
            <img className="w-10 h-10 rounded-full" src="../Image/instructor.png" alt="Instructor Photo" />
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-900">Prashant Kumar Singh</p>
              <p className="text-sm text-gray-500">Software Developer</p>
            </div>
          </div>
          <div className="mt-4 flex items-center justify-between text-gray-500">
            <div className="flex items-center">
              <i className="fa-solid fa-book-open w-5 h-5 mt-2 text-green-600"></i>
              <span className="ml-2 font-bold text-sm">10 Lectures</span>
            </div>
            <div className="flex items-center">
              <i className="fa-regular fa-clock w-5 h-5 mt-2 text-green-600"></i>
              <span className="ml-2 font-bold text-sm">1hr 30mins</span>
            </div>
          </div>
        </div>
      </div>
      {/* Course Card 9 */}
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg cursor-pointer hover:shadow overflow-hidden">
        <a className="relative" href="#">
          <img
            src="../Image/photoshop.png"
            alt="Course Image"
            className="w-full h-44 object-cover"
          />
        </a>
        <div className="p-5 relative">
          <i className="fa-regular fa-bookmark absolute top-5 right-5 text-xl"></i>
          <h5 className="text-2xl font-bold tracking-tight text-gray-900">
          PHP Course
          </h5>
          <p className="mt-2 font-normal text-gray-700">
          PHP is a sever-side scripting language used for building dynamic websites animation and web applications.
          </p>
          <div className="flex items-center mt-4">
            <img className="w-10 h-10 rounded-full" src="../Image/instructor.png" alt="Instructor Photo" />
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-900">Prashant Kumar Singh</p>
              <p className="text-sm text-gray-500">Software Developer</p>
            </div>
          </div>
          <div className="mt-4 flex items-center justify-between text-gray-500">
            <div className="flex items-center">
              <i className="fa-solid fa-book-open w-5 h-5 mt-2 text-green-600"></i>
              <span className="ml-2 font-bold text-sm">10 Lectures</span>
            </div>
            <div className="flex items-center">
              <i className="fa-regular fa-clock w-5 h-5 mt-2 text-green-600"></i>
              <span className="ml-2 font-bold text-sm">1hr 30mins</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>
    </main>

  )
}

// import React, { useState } from "react";
// import { Link, useParams } from "react-router-dom";

// const mockCourses = [
//   { title: "UX/UI Design Course", category: "Design", imgSrc: "/img/uiux.png" },
//   { title: "Basic HTML Course", category: "Development", imgSrc: "/img/html.png" },
//   { title: "Git And GitHub Course", category: "Development", imgSrc: "/img/git.png" },
//   { title: "React Course", category: "Development", imgSrc: "/img/react.png" },
//   { title: "PHP Course", category: "Development", imgSrc: "/img/php.png" },
//   { title: "Python Course", category: "Programming", imgSrc: "/img/python.png" },
//   { title: "Digital Marketing Course", category: "Marketing", imgSrc: "/img/marketing.png" },
// ];

// const CoursesPage = () => {
//   const { category } = useParams();
//   const [search, setSearch] = useState("");

//   const filteredCourses = mockCourses.filter(
//     (course) =>
//       course.title.toLowerCase().includes(search.toLowerCase()) &&
//       (category ? course.category === category : true)
//   );

//   return (
//     <div>
//       <header className="bg-green-700 text-white p-6 text-center">
//         <h1>Here is Our Course Learning For Free</h1>
//         <form className="mt-4">
//           <input
//             type="text"
//             placeholder="Course name or keywords..."
//             className="p-2 rounded"
//             value={search}
//             onChange={(e) => setSearch(e.target.value)}
//           />
//           <select className="ml-2 p-2 rounded">
//             <option value="">All categories</option>
//             <option value="Development">Development</option>
//             <option value="Design">Design</option>
//             <option value="Programming">Programming</option>
//             <option value="Marketing">Marketing</option>
//           </select>
//           <button className="bg-white text-green-700 ml-2 p-2 rounded">Search</button>
//         </form>
//       </header>

//       <main className="p-6 grid grid-cols-1 md:grid-cols-3 gap-4">
//         {filteredCourses.map((course, index) => (
//           <div key={index} className="border rounded p-4 shadow hover:shadow-lg">
//             <img src={course.imgSrc} alt={course.title} className="w-full h-32 object-cover" />
//             <h2 className="mt-4 text-xl font-bold">{course.title}</h2>
//             <Link to={`/category/${course.category}`} className="text-green-700">
//               {course.category}
//             </Link>
//           </div>
//         ))}
//       </main>
//     </div>
//   );
// };

// export default CoursesPage;
