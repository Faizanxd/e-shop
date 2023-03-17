import shopImage from "/code/e-shop/frontend/src/assets/homeShopVector.jpg";

export default function Home() {
  return (
    <section className="pt-[250px] pb-[230px] md:pb-[195px] md:pt-[150px]  ">
      <div className="mx-auto grid max-w-screen-xl px-4 py-8 lg:grid-cols-12 lg:gap-8 lg:py-16 xl:gap-0">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="mb-4 max-w-2xl text-4xl font-extrabold leading-none tracking-tight dark:text-white md:text-5xl xl:text-6xl">
            One Stop Shop
          </h1>
          <p className="mb-6 max-w-2xl font-light tracking-wider text-gray-500 dark:text-gray-400 md:text-lg lg:mb-8 lg:text-xl">
            From grociers to tech, everyone around the world use .Store to sell
            their products.
          </p>
          <a
            href="/login"
            className="mr-3 inline-flex items-center justify-center rounded-lg bg-primary-700 px-5 py-3 text-center text-base font-medium text-white hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
          >
            Get started
            <svg
              className="ml-2 -mr-1 h-5 w-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </a>
        </div>
        <div className="hidden lg:col-span-5 lg:mt-0 lg:flex ">
          <img src={shopImage} alt="mockup" className="lg:rounded-lg" />
        </div>
      </div>
    </section>
  );
}
