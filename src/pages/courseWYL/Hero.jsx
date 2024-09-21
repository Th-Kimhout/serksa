import { Link } from "react-router-dom";
export function Hero() {
  return (
    <>
      <div class="flex flex-col md:flex-row w-4/5 mx-auto gap-2.5 mt-10">
        <div class="md:w-1/2">
          <img
            class="rounded-2xl"
            src="https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/file-uploads/themes/2152651580/settings_images/a415f77-addc-558f-c62e-76470d70ecc_Tailwind_CSS_Course.jpg"
            alt=""
          />
        </div>

        <div class="md:w-1/2">
          <p class="text-5xl text-primary font-bold">
            Learn Tailwind CSS in 1min
          </p>
          <p class="text-lg line-clamp-3 my-2">
            7 steps you can use immediately to become more productive and master
            time management
          </p>
          <span class="text-primary bg-green-200 rounded px-4 me-2 text-lg">
            Free
          </span>
          <a href="#" class="text-lg hover:text-secondary ">
            Web Design
          </a>
          <br />
          <p class="text-lg inline my-2">Instructor: </p>
          <a href="#" class="text-lg inline my-2 hover:text-secondary">
            Mr David
          </a>
        <Link to="/Started">
        <button class="w-full text-white bg-primary rounded py-2 mt-2 hover:bg-primaryHover hover:text-gray-400">
            Get Started
          </button></Link>
        </div>
      </div>
    </>
  );
}
