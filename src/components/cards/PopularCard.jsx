import c1 from "../../assets/logo.png";
export function PopularCard() {
  return (
    <div class="max-w-sm bg-white border border-gray-200 rounded-lg cursor-pointer hover:shadow overflow-hidden">
      <a class="relative" href="#">
        <img src={c1} alt="Course Image" class="w-full h-44 object-cover" />
      </a>

      <div class="p-5 relative">
        <i class="fa-regular fa-bookmark absolute top-5 right-5 text-xl"></i>
        <h5 class="text-2xl font-bold tracking-tight text-gray-900">
          UX/UI Design Course
        </h5>
        <p class="mt-2 font-normal text-gray-700">
          A UX/UI design course teaches creating user-centered designs,
          including user research, wireframing, prototyping, and visual design.
        </p>

        <div class="mt-4 flex items-center justify-between text-gray-500">
          <div class="flex items-center">
            <i class="fa-solid fa-book-open w-5 h-5 mt-2 text-green-600"></i>
            <span class="ml-2 font-bold text-sm">10 Lectures</span>
          </div>
          <div class="flex items-center">
            <i class="fa-regular fa-clock w-5 h-5 mt-2 text-green-600"></i>
            <span class="ml-2 font-bold text-sm">1hr 30mins</span>
          </div>
        </div>
      </div>
    </div>
  );
}
