import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function HeaderUser() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  function headerOpen() {
    setIsOpen(!isOpen);
    document.getElementById("mobile-menu-2")?.classList.toggle("hidden");
  }
  // const countIf = count > 0 ? count : null;
  const countIf = 0;
  return (
    <header>
      <nav className="border-b border-gray-500 bg-gray-800 px-4 py-2.5 lg:px-6 ">
        <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between">
          <a href="/home" className="flex items-center">
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAClElEQVR4nO1bz2tTQRAeLxZULJX4N3jq3d578OfOioRHD5Vg/gYv1n9BoZ4V1HrKTo4WVGJDi4ciVOyl14pXBUHEitSV3fQlG5LmPZP3YzvZgQ/CZPa9mY9vZt/CewDBMjJB7wFJFwJBW+CdYUHFx/DOsJNY9FLnikAAnnAFVO5u6Eq93efDpwd6rtYa8LNUQKXe1hedQk3xs8tv7NoLtRZ/AiIH0hR/561dd375tcYnv6aHADlG8WwIkGMWz4IAOUHxLAiYq7VsnBl8ZgCO2h1YElCpt+20d4sftjuwJSCaEIEAzF0B+hQI2ij8cJM71DtbW6LJxkL5yeaEm83LyQQgPTLBl+59yr2fi4Kp5UgFD5Plj/TZBC+ufis98aywuPq1Q4BQX0a3gezI/8zSKx2tlZ94ZljT+uzSeoo2QH7y/4820D35P+Yj/ximpUe3gWQq/9RtgHzln6INNGv5J7eBZC7/xDZA/vIf3QZC7Zf+mFo0TM1dKzuZstC1I4crlcEgfnHgSyLlEyDot3FUXxzaRdXnh72F1cZpG3NlfSb28YhTBy4jH4xz/sGevv3sj55f2XN6Rd2HauMcCFqJfSziBG33CJDqRrrBof524LMv9RC81tcWIJrXLSuofoKg3W6g/W192yDVVbvQ/Bb0w0ufaN4CQR9B0HdA2hlax0Dxw2zY8DiJNnYdGAjQfcxl8Q6Q+25Pnu8UuffJTAGYUXJZXy/tfbIiIDrmkJH2/7TXGxeBAAwK0KEFMMwAHYZgbGEXoLANQngOIH8fhGBqnwQFbeV4Ftj0n4CiLBBAQQEQWoDCDICJhweGIaj57gKiwG/+fEHft4foQUJloGsJ8uWGQAAeowCYNhRyMPEV7oEJptj+AWbq1InNfUxIAAAAAElFTkSuQmCC"
              className="mr-2 mb-2 h-10"
            />
            <span className="self-center whitespace-nowrap text-xl font-semibold text-white">
              .Store
            </span>
          </a>
          <div className="flex items-center lg:order-2">
            <button
              data-collapse-toggle="mobile-menu-2"
              onClick={headerOpen}
              type="button"
              className="ml-1 inline-flex items-center rounded-lg p-2 text-sm  text-gray-400 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600 lg:hidden"
              aria-controls="mobile-menu-2"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <svg
                className="hidden h-6 w-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div
            className="hidden w-full items-center justify-between lg:order-2 lg:flex lg:w-auto"
            id="mobile-menu-2"
          >
            <ul className="mt-4 flex flex-col font-medium lg:mt-0 lg:flex-row lg:space-x-8">
              <li>
                <a
                  href="/shop"
                  className="mt-2 block rounded  py-2 pr-4 pl-3 text-white hover:text-primary-600 lg:bg-transparent lg:p-0  "
                >
                  Shop
                </a>
              </li>
              <li>
                <a
                  href="/orders"
                  className="mt-2 block rounded  py-2 pr-4 pl-3 text-white hover:text-primary-600 lg:bg-transparent lg:p-0"
                >
                  Orders
                </a>
              </li>

              <li>
                <a
                  href="/support"
                  className="mt-2 block rounded  py-2 pr-4 pl-3 text-white hover:text-primary-600 lg:bg-transparent lg:p-0"
                >
                  Support
                </a>
              </li>
              <li>
                <button
                  className={` inline-flex flex-wrap items-center rounded border border-gray-500	 py-1 px-3 text-base hover:text-primary-600 focus:outline-none  lg:bg-transparent   ${
                    countIf ? "bg-white font-extrabold text-indigo-500" : ""
                  }`}
                  onClick={() => navigate("/cart")}
                >
                  {countIf ?? "Cart"}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="ml-1 h-4 w-4"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                    />
                  </svg>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
