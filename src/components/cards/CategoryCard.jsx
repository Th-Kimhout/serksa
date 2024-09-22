const tips = [
  {
    title: "Web development",
    description: "7 Courses",
    image: "src/assets/image/Webdevel.png",
  },
  {
    title: "Photography",
    description: "2 Courses",
    image: "src/assets/image/Photograp.jpg",
  },
  {
    title: "Marketing",
    description: "2 Courses",
    image: "src/assets/image/Marketing.png",
  },
  {
    title: "Programming languages",
    description: "10 Courses",
    image: "src/assets/image/program.png",
  },
  {
    title: "Financial",
    description: "3 Courses",
    image: "src/assets/image/finace.jpg",
  },
  {
    title: "Engineering drawing",
    description: "2 Courses",
    image: "src/assets/image/Engineer.png",
  },
];

export function CategoryCard() {
  return (
    <div className="container mx-auto">
      <div className="mt-20 text-center">
        <h1 className="text-4xl font-bold text-primary dark:text-primary">
          All Categories
        </h1>
        <p className="mt-2 text-textGray text-Description dark:text-textDark">
          Gain comprehensive knowledge and skills through our expertly designed
          courses, tailored to enhance your learning experience.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-12 mt-20 md:grid-cols-2 lg:grid-cols-3">
        {tips.map((tip, index) => (
          <div
            key={index}
            className="max-w-sm bg-white border border-gray-200 rounded-lg cursor-pointer hover:shadow dark:bg-textBlack dark:border-gray-700"
          >
            <a href="#">
              <img
                className="object-cover w-full rounded-t-lg h-44"
                src={tip.image}
                alt={tip.title}
              />
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 font-bold tracking-tight text-center text-Title text-textBlack dark:text-textDark">
                  {tip.title}
                </h5>
              </a>
              <p className="font-normal text-center text-gray-700 dark:text-gray-400">
                {tip.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
