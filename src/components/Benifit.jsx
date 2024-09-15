import React from "react";

const BenefitsSection = () => {
  return (
    <>
      {/* Benefits Section */}
      <section className="container mx-auto mt-16 px-4 font-serif">
        <h2 className="text-3xl font-bold text-center mb-8">Our Benefits</h2>
        <p className="text-xl text-center mb-8">
          By Joining{" "}
          <span className="text-green-600 font-semibold">SERKSA</span>, One Can
          Avail a Lot of Benefits.
        </p>
        <p className="text-gray-600 text-center mb-8">
          Access a wide range of video e-learning materials designed to empower
          learners in Cambodia. Our platform offers diverse skills, from
          technical to creative, ensuring that all learners can grow.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            className="bg-blue-100 p-6 rounded-lg"
            data-aos="fade-up"
            data-aos-duration="10"
          >
            <h3 className="text-xl font-semibold mb-2">01 Standardization</h3>
            <p className="text-gray-600">
              We ensure high-quality learning experiences across all our
              courses. Whether you're...
            </p>
            <a href="#" className="text-blue-600 hover:underline">
              Read More
            </a>
          </div>
          <div
            className="bg-blue-100 p-6 rounded-lg"
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="10"
          >
            <h3 className="text-xl font-semibold mb-2">02 Reduced Costs</h3>
            <p className="text-gray-600">
              Our platform is free of charge, making skill acquisition
              accessible for everyone. With us...
            </p>
            <a href="#" className="text-blue-600 hover:underline">
              Read More
            </a>
          </div>
          <div
            className="bg-blue-100 p-6 rounded-lg"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="10"
          >
            <h3 className="text-xl font-semibold mb-2">
              03 More Customization
            </h3>
            <p className="text-gray-600">
              Learning isn't one-size-fits-all. Our platform allows you to
              select...
            </p>
            <a href="#" className="text-blue-600 hover:underline">
              Read More
            </a>
          </div>
          <div
            className="p-6 bg-blue-100 rounded-lg"
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-duration="10"
          >
            <h3 className="text-xl font-semibold mb-2">
              04 Affordable Pricing
            </h3>
            <p className="text-gray-600">
              No hidden costs! The platform remains completely free, with a
              focus on providing education for all Cambodians...
            </p>
            <a href="#" className="text-green-600 hover:underline">
              Read More
            </a>
          </div>
          <div
            className="bg-blue-100 p-6 rounded-lg"
            data-aos="fade-up"
            data-aos-delay="400"
            data-aos-duration="10"
          >
            <h3 className="text-xl font-semibold mb-2">
              05 Learner Satisfaction
            </h3>
            <p className="text-gray-600">
              We aim for high satisfaction by offering a broad spectrum of
              courses and constantly...
            </p>
            <a href="#" className="text-blue-600 hover:underline">
              Read More
            </a>
          </div>
          <div
            className="bg-blue-100 p-6 rounded-lg"
            data-aos="fade-up"
            data-aos-delay="500"
            data-aos-duration="10"
          >
            <h3 className="text-xl font-semibold mb-2">
              06 Multimedia Materials
            </h3>
            <p className="text-gray-600">
              Our platform includes video tutorials, interactive learning, and
              downloadable...
            </p>
            <a href="#" className="text-green-600 hover:underline">
              Read More
            </a>
          </div>
        </div>
      </section>

      {/* Mentor Section */}
      <section
        className="relative bg-cover h-full w-full border-none -z-50 font-body"
        style={{ backgroundImage: `url(#)` }}
      >
        <div className="text-center font-bold text-4xl text-green-600">
          <h3 data-aos="zoom-in-up" className="pt-4 aos-init aos-animate">
            អ្នកណែនាំរបស់យើង
          </h3>
          <section className="flex flex-wrap-reverse justify-center py-14">
            {/* Mentor 1 */}
            <div
              data-aos="fade-right"
              className="h-[215px] w-[255px] flex justify-center items-center relative m-4 aos-init aos-animate"
            >
              <div className="absolute bottom-0 left-0 w-[50%] h-[50%] border-l-[3px] border-b-[3px] border-green-500"></div>
              <div className="h-[200px] w-[240px] relative overflow-hidden flex justify-center items-center">
                <div className="absolute inset-0 bg-blue-600 transform origin-bottom-left -z-20"></div>
                <div className="z-50 flex justify-center items-center h-full">
                  <div className="text-center">
                    <img
                      src="./img/♡TAEHYUNG♡.jfif"
                      alt=""
                      className="h-[120px] w-[120px] object-cover rounded-full border-4 border-white mx-auto"
                    />
                    <h4 className="text-[#172554] text-[18px] font-bold">
                      អ្នកគ្រូ មុំ រស្មី
                    </h4>
                  </div>
                </div>
                <div className="absolute w-[700px] inset-0 bg-gray-50 transform rotate-[30deg] mt-5 origin-top-left -z-10"></div>
              </div>
            </div>

            {/* Mentor 2 */}
            <div
              data-aos="fade-left"
              className="h-[215px] w-[255px] flex justify-center items-center relative m-4 aos-init aos-animate"
            >
              <div className="absolute top-0 right-0 w-[50%] h-[50%] border-r-[3px] border-t-[3px] border-green-500"></div>
              <div className="h-[200px] w-[240px] relative overflow-hidden flex justify-center items-center">
                <div className="absolute inset-0 bg-blue-600 transform origin-bottom-left -z-20"></div>
                <div className="z-50 flex justify-center items-center h-full">
                  <div className="text-center">
                    <img
                      src="./img/♡TAEHYUNG♡.jfif"
                      alt=""
                      className="h-[120px] w-[120px] object-cover rounded-full border-4 border-white mx-auto"
                    />
                    <h4 className="text-[#172554] text-[18px] font-bold">
                      អ្នកគ្រូ​ សុិន ស្រីភា
                    </h4>
                  </div>
                </div>
                <div className="absolute w-[700px] inset-0 bg-gray-50 transform rotate-[30deg] mt-5 origin-top-left -z-10"></div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default BenefitsSection;
