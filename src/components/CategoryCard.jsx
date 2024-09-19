export function CategoryCard() {
  
    return (
      <div
        class="max-w-sm cursor-pointer hover:shadow bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700"
      >
        <a href="#">
          <img
            class="rounded-t-lg h-44 w-full object-cover"
            src="src/image/Webdevel.png"
            alt=""
          />
        </a>
        <div class="p-5">
          <a href="#">
            <h5
              class="mb-2 text-center text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
            >
              Web Development
            </h5>
          </a>
          <p class="text-center font-normal text-gray-700 dark:text-gray-400">
            7 courses
          </p>
        </div>
      </div>
    );
}
