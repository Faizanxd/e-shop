import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const url = "http://localhost:8000";
  const navigate = useNavigate();

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.target as HTMLFormElement);

    axios
      .post(`${url}/login`, data, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        if (response.status === 200) {
          navigate("/shop");
        } else {
          console.log(response);
          alert("Login failed");
        }
      })
      .catch((error) => {
        console.log(error);
        alert("Login failed");
      });
  }

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="mx-auto flex flex-col items-center justify-center px-6 py-8 md:h-screen lg:py-0">
        <a href="/" className="flex items-center">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAClElEQVR4nO1bz2tTQRAeLxZULJX4N3jq3d578OfOioRHD5Vg/gYv1n9BoZ4V1HrKTo4WVGJDi4ciVOyl14pXBUHEitSV3fQlG5LmPZP3YzvZgQ/CZPa9mY9vZt/CewDBMjJB7wFJFwJBW+CdYUHFx/DOsJNY9FLnikAAnnAFVO5u6Eq93efDpwd6rtYa8LNUQKXe1hedQk3xs8tv7NoLtRZ/AiIH0hR/561dd375tcYnv6aHADlG8WwIkGMWz4IAOUHxLAiYq7VsnBl8ZgCO2h1YElCpt+20d4sftjuwJSCaEIEAzF0B+hQI2ij8cJM71DtbW6LJxkL5yeaEm83LyQQgPTLBl+59yr2fi4Kp5UgFD5Plj/TZBC+ufis98aywuPq1Q4BQX0a3gezI/8zSKx2tlZ94ZljT+uzSeoo2QH7y/4820D35P+Yj/ximpUe3gWQq/9RtgHzln6INNGv5J7eBZC7/xDZA/vIf3QZC7Zf+mFo0TM1dKzuZstC1I4crlcEgfnHgSyLlEyDot3FUXxzaRdXnh72F1cZpG3NlfSb28YhTBy4jH4xz/sGevv3sj55f2XN6Rd2HauMcCFqJfSziBG33CJDqRrrBof524LMv9RC81tcWIJrXLSuofoKg3W6g/W192yDVVbvQ/Bb0w0ufaN4CQR9B0HdA2hlax0Dxw2zY8DiJNnYdGAjQfcxl8Q6Q+25Pnu8UuffJTAGYUXJZXy/tfbIiIDrmkJH2/7TXGxeBAAwK0KEFMMwAHYZgbGEXoLANQngOIH8fhGBqnwQFbeV4Ftj0n4CiLBBAQQEQWoDCDICJhweGIaj57gKiwG/+fEHft4foQUJloGsJ8uWGQAAeowCYNhRyMPEV7oEJptj+AWbq1InNfUxIAAAAAElFTkSuQmCC"
            className="mr-2 mb-4 h-10"
          />
          <span className="self-center whitespace-nowrap text-xl font-semibold text-white">
            .Store
          </span>
        </a>
        <div className="w-full rounded-lg bg-white shadow dark:border dark:border-gray-700 dark:bg-gray-800 sm:max-w-md md:mt-0 xl:p-0">
          <div className="space-y-4 p-6 sm:p-8 md:space-y-6">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white md:text-2xl">
              Sign in to your account
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 focus:border-primary-600 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 sm:text-sm"
                  placeholder="name@company.com"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 focus:border-primary-600 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 sm:text-sm"
                  required
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-start">
                  <div className="flex h-5 items-center">
                    <input
                      id="remember"
                      aria-describedby="remember"
                      type="checkbox"
                      className="focus:ring-3 h-4 w-4 rounded border border-gray-300 bg-gray-50 focus:ring-primary-300 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                      required
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label
                      htmlFor="remember"
                      className="text-gray-500 dark:text-gray-300"
                    >
                      Remember me
                    </label>
                  </div>
                </div>
                <a
                  href="#"
                  className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Forgot password?
                </a>
              </div>
              <button
                type="submit"
                className="w-full rounded-lg bg-primary-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-primary-700 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Sign in
              </button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Don’t have an account yet?{" "}
                <a
                  href="/signup"
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Sign up
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
