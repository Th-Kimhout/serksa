import React from "react";

const TeamSection = () => {
  const teamMembers = [
    { name: "ធៀប គីមហួត", role: "ប្រធានក្រុម", image: "./img/♡TAEHYUNG♡.jfif" },
    { name: "ហ៊ុល មករា", role: "សមាជិកក្រុម", image: "./img/♡TAEHYUNG♡.jfif" },
    {
      name: "គង់ ស៊ីសុវណ្ណដារ៉ា",
      role: "សមាជិកក្រុម",
      image: "./img/♡TAEHYUNG♡.jfif",
    },
    {
      name: "យ៉េន ម៉ារ៉ា",
      role: "សមាជិកក្រុម",
      image: "./img/♡TAEHYUNG♡.jfif",
    },
    {
      name: "សំ សុគន្ធស្រីពេជ្រ",
      role: "សមាជិកក្រុម",
      image: "./img/♡TAEHYUNG♡.jfif",
    },
    { name: "បុល សុខហេង", role: "សមាជិកក្រុម", image: "./img/♡TAEHYUNG♡.jfif" },
    {
      name: "អ៊ឹង គីមចេង",
      role: "សមាជិកក្រុម",
      image: "./img/♡TAEHYUNG♡.jfif",
    },
    {
      name: "លឹម សុផាណារ៉ាត",
      role: "សមាជិកក្រុម",
      image: "./img/♡TAEHYUNG♡.jfif",
    },
  ];

  return (
    <div>
      <div className="relative text-center font-bold text-4xl text-green-500">
        <h3 data-aos="zoom-in" className="pt-14">
          ក្រុមរបស់ពួកយើង
        </h3>
      </div>
      <div className="relative z-[5] w-11/12 mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 justify-center py-20">
          {teamMembers.map((member, index) => (
            <section key={index} className="flex justify-center">
              <div className="h-[230px] w-[205px] flex justify-center items-center relative">
                <div className="absolute bottom-0 left-0 w-[50%] h-[50%] border-l-[3px] border-b-[3px] border-green-500"></div>
                <div
                  data-aos="zoom-in"
                  className="h-[218px] w-[193px] relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-blue-600 transform origin-bottom-left -z-20"></div>
                  <div className="z-50 flex justify-center items-center h-full">
                    <div className="text-center">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="h-[120px] w-[120px] object-cover rounded-full border-4"
                      />
                      <h4 className="font-bold text-lg mt-2">{member.name}</h4>
                      <p className="text-base my-1">{member.role}</p>
                      <div className="flex justify-center text-base gap-2">
                        <a
                          href="#"
                          className="fa-brands fa-github"
                          target="_blank"
                          aria-label="GitHub"
                        ></a>
                        <a
                          href="#"
                          className="fa-brands fa-facebook"
                          target="_blank"
                          aria-label="Facebook"
                        ></a>
                        <a
                          href="#"
                          className="fa-brands fa-telegram"
                          target="_blank"
                          aria-label="Telegram"
                        ></a>
                      </div>
                    </div>
                  </div>
                  <div className="absolute w-[700px] inset-0 bg-gray-50 transform rotate-[30deg] mt-5 origin-top-left -z-10"></div>
                </div>
              </div>
            </section>
          ))}
        </div>
        <div className="text-center text-blue-600 max-w-[780px] mx-auto pb-14 px-4 md:px-8 font-body font-semibold">
          <p data-aos="zoom-in" className="text-base lg:text-lg xl:text-xl">
            ពួកយើងគឺជាស្ថាបនិកនៃ សិក្សា
            ហើយយើងប្រឹងប្រែងអស់ពីសមត្ថភាពដើម្បីបំពេញតម្រូវការរបស់អតិថិជនរបស់យើង
            ដើម្បីជួយសម្រួលដល់ការស្វែងរកទិន្នន័យ និងព័ត៌មានផ្សេងៗអំពីការសិក្សា។
          </p>
        </div>
      </div>
    </div>
  );
};

export default TeamSection;
