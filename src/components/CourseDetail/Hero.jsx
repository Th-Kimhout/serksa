export function Hero() {
  return (
    <>
      <div class="flex flex-col md:flex-row w-4/5 mx-auto gap-2.5 mt-10">
        <div class="md:w-1/2">
          <img
            class="rounded-2xl"
            src="https://www.iconwallstickers.co.uk/media/catalog/product/cache/5/image/650x/040ec09b1e35df139433887a97daa66f/W/S/WS-42854.jpg"
            alt=""
          />
        </div>

        <div class="md:w-1/2">
          <p class="text-5xl text-teal-600 font-bold">Learn Tailwind CSS in 1min</p>
          <p class="text-lg line-clamp-3 my-2">
            7 steps you can use immediately to become more productive and master
            time management
          </p>
          <span class="text-teal-600 bg-green-300 rounded px-4 me-2">Free</span>
          <span>web design, web develop</span>
          <br />
          <button class="w-full text-white bg-green-600 rounded py-2 mt-2 hover:bg-green-300 hover:text-teal-600">Get Started</button>
        </div>
      </div>
    </>
  );
}
