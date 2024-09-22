const popularCourses = [
  {
    title: "UX/UI Design Course",
    description:
      "A UX/UI design course teaches creating user-centered designs, including user research, wireframing, prototyping, and visual design.",
    image: "src/assets/Image/uxui.jpg",
    lectures: "10 Lectures",
    duration: "1hr 30mins",
  },
  {
    title: "Web Development Bootcamp",
    description:
      "Learn full-stack web development from HTML, CSS, JavaScript to backend technologies and databases.",
    image: "src/assets/Image/Webdevel.png",
    lectures: "20 Lectures",
    duration: "3hrs 15mins",
  },
  {
    title: "Photography Basics",
    description:
      "This course covers the fundamental techniques of photography, including composition, lighting, and editing.",
    image: "src/assets/Image/Photograp.jpg",
    lectures: "8 Lectures",
    duration: "2hrs",
  },
  {
    title: "Basic Html Course",
    description:
      "A basic HTML course covers structuring web pages with HTML tags, formatting text, embedding media, and creating links and forms.",
    image: "src/assets/Image/Html.jpg",
    lectures: "8 Lectures",
    duration: "2hrs",
  },
];

export function PopularCard() {
  return (
    <>
      <div className="container grid grid-cols-2 gap-5 mx-auto mt-12 md:grid-cols-3 lg:grid-cols-4">
        {popularCourses.map((PCard, index) => (
          <div
            key={index}
            class="max-w-sm bg-white dark:bg-textBlack border border-gray-200 rounded-lg cursor-pointer hover:shadow overflow-hidden"
          >
            <a class="relative" href="#">
              <img
                src={PCard.image}
                alt="Course Image"
                class="w-full h-44 object-cover"
              />
            </a>

            <div class="p-5 relative">
              <i class="fa-regular fa-bookmark absolute top-5 right-5 text-xl dark:text-secondary"></i>
              <h5 class="text-2xl font-bold tracking-tight text-textBlack dark:text-textDark">
                {PCard.title}
              </h5>
              <p class="mt-2 font-normal text-gray-700 dark:text-textDark">
                {PCard.description}
              </p>

              <div class="mt-4 flex items-center justify-between text-textGray dark:text-textDark">
                <div class="flex items-center">
                  <i class="fa-solid fa-book-open w-5 h-5 mt-2 text-primary dark:text-secondary"></i>
                  <span class="ml-2 font-bold text-sm">{PCard.lectures}</span>
                </div>
                <div class="flex items-center">
                  <i class="fa-regular fa-clock w-5 h-5 mt-2 text-primary dark:text-secondary"></i>
                  <span class="ml-2 font-bold text-sm">{PCard.duration}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
