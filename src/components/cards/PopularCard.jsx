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
];

export function PopularCard() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-12 w-4/5 mx-auto">
        {popularCourses.map((PCard, index) => (
          <div key={index} class="max-w-sm bg-white border border-gray-200 rounded-lg cursor-pointer hover:shadow overflow-hidden">
            <a class="relative" href="#">
              <img src={PCard.image} alt="Course Image" class="w-full h-44 object-cover" />
            </a>

            <div class="p-5 relative">
              <i class="fa-regular fa-bookmark absolute top-5 right-5 text-xl"></i>
              <h5 class="text-2xl font-bold tracking-tight text-textBlack">
                {PCard.title}
              </h5>
              <p class="mt-2 font-normal text-gray-700">
                {PCard.description}
              </p>

              <div class="mt-4 flex items-center justify-between text-textGray">
                <div class="flex items-center">
                  <i class="fa-solid fa-book-open w-5 h-5 mt-2 text-primary"></i>
                  <span class="ml-2 font-bold text-sm">{PCard.lectures}</span>
                </div>
                <div class="flex items-center">
                  <i class="fa-regular fa-clock w-5 h-5 mt-2 text-primary"></i>
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
