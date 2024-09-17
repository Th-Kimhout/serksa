import React from "react";
export function MissionSection () {
  return (
    <section className="container mx-auto mt-16 px-4 font-english">
      <h2 className="text-3xl font-bold text-blue-600 text-center mb-8">
        បេសកម្មរបស់យើង
      </h2>
      <div className="flex flex-wrap items-center">
        {/* Left Side - Image */}
        <div className="w-full lg:w-1/2 pr-4">
          <img
            src="src/assets/Studying (1).gif"
            alt="Educational Concept"
            className="rounded-lg shadow-md"
            data-aos="fade-right"
            data-aos-duration="1000"
          />
        </div>

        {/* Right Side - Text Content */}
        <div className="w-full lg:w-1/2 mt-4 lg:mt-0">
          <p
            className="text-gray-900"
            data-aos="fade-down-left"
            data-aos-duration="1000"
          >
            At <span className="text-green-600 font-english text-lg">SERKSA</span>, our
            mission is simple yet powerful: to make high-quality education
            accessible to everyone in Cambodia—free of charge. We believe that
            learning should be a right, not a privilege, and we are committed to
            providing resources that empower individuals to develop new skills,
            advance their careers, and achieve their personal goals.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
