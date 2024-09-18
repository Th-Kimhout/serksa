import React from "react";
const Courses = () => {
  return (
    <div className="bg-green-100 p-6 rounded-lg px-5 py-8 w-4/5 mx-auto">
      <h2 className="text-3xl font-bold mb-8">
        Best languages courses of SERKSA
      </h2>
      <div className="flex justify-between space-x-10">
        {/* HTML */}
        <div className="flex flex-col items-center">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
            alt="HTML"
            className="w-16 h-16"
          />
          <p className="mt-2 text-center font-bold">HTML</p>
        </div>
        {/* CSS */}
        <div className="flex flex-col items-center">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
            alt="CSS"
            className="w-16 h-16"
          />
          <p className="mt-2 text-center font-bold">CSS</p>
        </div>
        {/* JavaScript */}
        <div className="flex flex-col items-center">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
            alt="JavaScript"
            className="w-16 h-16"
          />
          <p className="mt-2 text-center font-bold">JavaScript</p>
        </div>
        {/* Tailwind CSS */}
        <div className="flex flex-col items-center">
          <img
            src="src/image/tailwind.png"
            alt="Tailwind CSS"
            className="w-16 h-16"
          />
          <p className="mt-2 text-center font-bold">Tailwind CSS</p>
        </div>
        {/* Bootstrap */}
        <div className="flex flex-col items-center">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"
            alt="Bootstrap"
            className="w-16 h-16"
          />
          <p className="mt-2 text-center font-bold">Bootstrap</p>
        </div>
      </div>
    </div>
  );
};

export default Courses;
