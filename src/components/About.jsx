import React from "react";

const AboutUsSection = () => {
  return (
    <section className="container mx-auto mt-8 px-4 font-serif">
      <div className="flex flex-wrap items-center">
        {/* Left Side - Text Content */}
        <div className="w-full lg:w-1/2 pr-4">
          <h1 className="text-4xl font-bold text-blue-600 mb-4">About Us</h1>
          <h2 className="text-2xl mb-4">
            <span className="text-green-600 font-semibold font-serif">
              SERKSA
            </span>{" "}
            Providing The Best Opportunities To Get Lots Of Skill From Us.
          </h2>
          <p className="text-gray-600 mb-4 font-serif">
            Our mission is to unlock the full potential of every individual
            through the transformative power of education. We are dedicated to
            providing a beacon of hope and opportunity by offering free,
            high-quality video e-learning resources. Our platform is designed to
            enhance essential skills and drive both personal and professional
            growth, making learning accessible and impactful for everyone in
            Cambodia.
          </p>
          <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600">
            Join Us
          </button>
        </div>

        {/* Right Side - Images */}
        <div className="w-full lg:w-1/2 mt-4 lg:mt-0">
          <img
            src="./img/work.jfif"
            alt="Office Space"
            className="rounded-lg shadow-md mb-3 ml-20"
          />
          <img
            src="./img/work.jfif"
            alt="Laptop Workspace"
            className="rounded-lg shadow-md"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
