export function AboutUsSection() {
  return (
    <main className="container mx-auto mt-8 px-4 font-serif">
      <div className="flex flex-wrap items-center">
        {/* Left Side - Text Content */}
        <div className="w-full lg:w-1/2 pr-4">
          <h1 className="text-4xl font-land font-bold text-blue-600 mb-4 text-center ">
            អំពីយើង
          </h1>
          <h2 className="text-2xl mb-4">
            <span className="text-green-600 font-semibold font-english">
              SERKSA
            </span>{" "}
            Providing The Best Opportunities To Get Lots Of Skill From Us.
          </h2>
          <p className="text-gray-900 mb-4 font-english text-lg">
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
            src="src/Asset/Team work.gif"
            alt="Office Space"
            // className="rounded-lg shadow-md mb-3 ml-20"
          />
          {/* <img
            src="./img/work.jfif"
            alt="Laptop Workspace"
            className="rounded-lg shadow-md"
          /> */}
        </div>
      </div>

      <section className="container mx-auto mt-16 px-4 font-english">
        <h2 className="text-3xl font-bold text-blue-600 text-center mb-8">
          បេសកម្មរបស់យើង
        </h2>
        <div className="flex flex-wrap items-center">
          {/* Left Side - Image */}
          <div className="w-full lg:w-1/2 pr-4">
            <img
              src="src/Asset/Studying (1).gif"
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
              At{" "}
              <span className="text-green-600 font-english text-lg">
                SERKSA
              </span>
              , our mission is simple yet powerful: to make high-quality
              education accessible to everyone in Cambodia—free of charge. We
              believe that learning should be a right, not a privilege, and we
              are committed to providing resources that empower individuals to
              develop new skills, advance their careers, and achieve their
              personal goals.
            </p>
          </div>
        </div>
      </section>
      {/* Benefits Section */}
      <section className="container mx-auto mt-16 px-4 font-land">
        <h2
          className="text-3xl font-bold  text-center mb-8 text-blue-600"
          data-aos="fade-up"
          data-aos-delay="30"
          data-aos-duration="10"
        >
          គុណសម្បត្តិក្នុងការចូលរូមជាមួយយើង
        </h2>
        <p className="text-xl text-center font-english mb-8">
          By Joining{" "}
          <span className="text-green-600 font-semibold font-english">
            SERKSA
          </span>
          , One Can Avail a Lot of Benefits.
        </p>
        <p className="text-gray-900 text-center mb-8 text-lg">
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
            <p className="text-gray-900">
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
            <h3 className="text-xl font-semibold font-english mb-2">
              02 Reduced Costs
            </h3>
            <p className="text-gray-900">
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
            <h3 className="text-xl font-semibold font-english mb-2">
              03 More Customization
            </h3>
            <p className="text-gray-900">
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
            <p className="text-gray-900">
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
            <p className="text-gray-900">
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
            <p className="text-gray-900">
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
        <div className="text-center font-bold font-khmer text-4xl text-green-600">
          <h3 data-aos="zoom-in-up" className="pt-4 aos-init aos-animate">
            អ្នកណែនាំរបស់យើង
          </h3>
          <section className="flex flex-wrap-reverse justify-center py-14">
            {/* Mentor 1 */}
            <div
              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-duration="10"
              className="h-[215px] w-[255px] flex justify-center items-center relative m-4 aos-init aos-animate"
            >
              <div className="absolute bottom-0 left-0 w-[50%] h-[50%] border-l-[3px] border-b-[3px] border-green-500"></div>
              <div className="h-[200px] w-[240px] relative overflow-hidden flex justify-center items-center">
                <div className="absolute inset-0 bg-blue-600 transform origin-bottom-left -z-20"></div>
                <div className="z-50 flex justify-center items-center h-full">
                  <div className="text-center">
                    <img
                      src="https://scontent.fpnh5-1.fna.fbcdn.net/v/t39.30808-6/456224722_501938739253298_1111267053604952846_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeEL06KwBmFqeIzkra4_2XXxlnJHISwZTsSWckchLBlOxDCDFdIGwj8uBb6GJ6z4Mj4iUobCBMKpMGxe1EODCbLS&_nc_ohc=SG0n5YUAdiAQ7kNvgEKKOoB&_nc_ht=scontent.fpnh5-1.fna&_nc_gid=AHFkNw1BLFx09C-htAOnD4Y&oh=00_AYD5eT4HCGXEVMx38PUBrh0nN38JVvS9KtVlbWADLZbt4A&oe=66EE41D2"
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
              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-duration="10"
              className="h-[215px] w-[255px] flex justify-center items-center relative m-4 aos-init aos-animate"
            >
              <div className="absolute top-0 right-0 w-[50%] h-[50%] border-r-[3px] border-t-[3px] border-green-500"></div>
              <div className="h-[200px] w-[240px] relative overflow-hidden flex justify-center items-center">
                <div className="absolute inset-0 bg-blue-600 transform origin-bottom-left -z-20"></div>
                <div className="z-50 flex justify-center items-center h-full">
                  <div className="text-center">
                    <img
                      src="https://scontent.fpnh5-5.fna.fbcdn.net/v/t39.30808-6/453217016_1562046851407170_8049942802020445416_n.jpg?stp=cp6_dst-jpg&_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFfNSTmuChRdWr-zAP-IAhHKVE4V6xmARcpUThXrGYBF2fy_eBkfkp0-sl1qtCENQArljIP4iT_qpmStpHP82CE&_nc_ohc=-m7EcdhzCJcQ7kNvgFP6fFg&_nc_ht=scontent.fpnh5-5.fna&_nc_gid=Az9TswoUdaTHn7O-eElNxxV&oh=00_AYBTAt4oYkrfTSzcF1ytW-MoME-MzkQlHi2h4sRDQJce9g&oe=66EE391C"
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
      
    </main>
  );
}

export default AboutUsSection;
