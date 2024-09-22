import React from "react";

export default function InstructorPage() {
  return (
    <>
      <Metadata
        title="SERKSA - Instructor"
        description="SERKSA is an free E-Learning Platform that offer a wide ranges of courses. Take your time and learn from Anywhere. SERKSA was developed by CSTAD Pre-University Scholarship Students Group 3."
        author="CSTAD"
        keywords="free, learning, free courses, khmer, online"
        thumbnail="src\assets\logo.jpg"
      />
      <div className="w-4/5 mx-auto">
        <h1 className="text-2xl font-bold text-green-800 ms-32">Instructor</h1>
        <section className="w-4/5 mx-auto mt-10">
          <div className="grid w-3/6 grid-cols-1 lg:grid-cols-2">
            <div className="w-full h-full rounded-full">
              <img src="../Image/instructor.png" alt="image" />
            </div>
            <div className="pt-10 h-72 w-96 ms-16">
              <h2 className="text-xl font-bold">Prashant Kumar singh</h2>
              <p className="font-bold text-gray-400">software Developer</p>
              <ul class="flex items-center space-x-3 md:order-3 mt-5">
                <li>
                  <a
                    href="#"
                    title=""
                    class="flex items-center justify-center text-blue-600 transition-all duration-200 bg-transparent border border-blue-600 rounded-full w-8 h-8 hover:bg-blue-600 hover:border-blue-600 hover:text-white"
                  >
                    <i class="fa-brands fa-facebook-f w-4 h-4 text-center"></i>
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    title=""
                    class="flex items-center justify-center text-blue-400 transition-all duration-200 bg-transparent border border-blue-400 rounded-full w-8 h-8 hover:bg-blue-400 hover:border-blue-400 hover:text-white"
                  >
                    <i class="fa-brands fa-twitter w-4 h-4 text-center"></i>
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    title=""
                    class="flex items-center justify-center text-red-600 transition-all duration-200 bg-transparent border border-red-600 rounded-full w-8 h-8 hover:bg-red-600 hover:border-red-600 hover:text-white"
                  >
                    <i class="fa-brands fa-youtube w-5 h-4 text-center"></i>
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    title=""
                    class="flex items-center justify-center text-pink-600 transition-all duration-200 bg-transparent border border-pink-600 rounded-full w-8 h-8 hover:bg-pink-600 hover:border-pink-600 hover:text-white"
                  >
                    <i class="fa-brands fa-invision w-4 h-4 text-center"></i>
                  </a>
                </li>
              </ul>
              <div className="mt-5">
                <button
                  type="button"
                  class="text-blue-700 bg-blue-200 border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-s-lg text-sm px-5 py-2.5  mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                >
                  Course
                </button>
                <button
                  type="button"
                  class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-e-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                >
                  10
                </button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-3/5 mt-10 ms-32">
          <p>
            Sharing is who I am, and teaching is where I am at my best, because
            I've been on both sides of that equation, and getting to deliver
            useful training is my meaningful way to be a part of the creative
            community.
          </p>
          <br />
          <p>
            I've spent a long time watching others learn, and teach, to refine
            how I work with you to be efficient, useful and, most importantly,
            memorable. I want you to carry what I've shown you into a bright
            future.
          </p>
          <br />
          <p>
            I have a wife (a lovely Irish girl) and kids. I have lived and
            worked in many places (as Kiwis tend to do) – but most of my 14+
            years of creating and teaching has had one overriding theme:
            bringing others along for the ride as we all try to change the world
            with our stories, our labours of love and our art.
          </p>
          <br />
          <p>
            I'm a certified Adobe instructor (ACI) in Ireland. I'm also an Adobe
            Certified Expert (ACE) and have completed the Adobe Certified
            Associate training (ACA). And I don't just do Adobe. Remember, media
            is a very broad term – digital blew out the borders, so we are all
            constantly learning.
          </p>
        </section>
        <h2 className="mt-10 text-3xl font-bold text-green-600 ms-32">
          More Course by Prashant Kumar singh
        </h2>
        <section className="mt-10">
          <div className="grid w-4/5 grid-cols-1 gap-12 mx-auto md:grid-cols-2 lg:grid-cols-3">
            {/* Course Card 1 */}
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

            {/* Course Card 2 */}
            <div className="max-w-sm overflow-hidden bg-white border border-gray-200 rounded-lg cursor-pointer hover:shadow">
              <a className="relative" href="#">
                <img
                  src="../Image/php.png"
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

            {/* Course Card 3 */}
            <div className="max-w-sm overflow-hidden bg-white border border-gray-200 rounded-lg cursor-pointer hover:shadow">
              <a className="relative" href="#">
                <img
                  src="../Image/photoshop.png"
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
      </div>
    </>
  );
}
