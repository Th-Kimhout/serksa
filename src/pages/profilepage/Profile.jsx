import React from "react";
import { Link } from "react-router-dom";

export default function Profile() {
  return (
    <>
      <div class="w-[80%] mx-auto min-w-min">
        <section class="mt-10 mb-10">
          <div class="flex flex-col lg:flex-row lg:justify-center w-[100%]">
            <div class="lg:w-[30%] w-[100%] mr-5 h-fit py-10 px-10 bg-slate-50 rounded-lg leading-relaxed shadow-lg">
              <p class="text-customBlue cursor-pointer text-md">Profile</p>
              <p class="hover:text-customBlue cursor-pointer">Settings</p>
              <hr class="mb-3 border-t-2 border-gray-300" />
              <p class="hover:text-customBlue cursor-pointer">Logout</p>
            </div>
            <div class="py-10 px-10 h-fit w-[100%] grid justify-center bg-slate-50 rounded-lg shadow-lg mt-10 lg:mt-0">
              <div class="flex flex-col items-center">
                <img
                  src="src/assets/Image/instructor.png"
                  alt="Profile Picture"
                  class="rounded-full border-4 border-green-600 w-44 h-44 object-cover mb-4"
                />
              </div>
              <form class="my-5 px-5 mt-5 grid justify-center">
                <h2 class="block text-xl text-gray-700 font-bold">
                  Your Profile
                </h2>
                <div class="mt-3">
                  <label class="block text-sm font-medium text-gray-700">
                    Name
                  </label>
                  <p class="mt-1 block w-[500px]  h-fit text-wrap border border-gray-300 rounded-md shadow-sm p-2">
                    Jonh Orstin
                  </p>
                </div>
                <div class="mt-3">
                  <label class="block text-sm font-medium text-gray-700">
                    Username
                  </label>
                  <p class="mt-1 block w-full h-fit text-wrap border border-gray-300 rounded-md shadow-sm p-2">
                    @UserName
                  </p>
                </div>
                <div class="mt-3">
                  <label class="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <p class="mt-1 block w-full h-fit text-wrap border border-gray-300 rounded-md shadow-sm p-2">
                    yourEmail@gmail.com
                  </p>
                </div>
                <div class="mt-3">
                  <label class="block text-sm font-medium text-gray-700">
                    Bio
                  </label>
                  <p class="mt-1 block w-full h-fit text-wrap border border-gray-300 rounded-md shadow-sm p-2">
                    Bio...
                  </p>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
