import { useEffect, useState } from "react";
import { Product } from "../common/types";

export default function ProductCard({ product }: { product: Product }) {
  // const [rating, setRating] = useState(0);

  // useEffect(() => {
  //   setRating(product.rating.rate);
  // }, [product.rating.rate]);

  return (
    <div className="h-auto w-full max-w-sm rounded-lg border border-gray-200 bg-white shadow dark:border-gray-700 dark:bg-gray-800">
      <span>
        <img
          className="h-60 w-full rounded-t-lg p-8"
          src={product.imagePath}
          alt="product image"
        />
      </span>
      <div className="px-5 pb-5">
        <h5 className="text-xl font-semibold  tracking-tight text-gray-900 line-clamp-1 dark:text-white">
          {product.name}
        </h5>
        {/* <div className="mt-2.5 mb-5 flex items-center">
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              aria-hidden="true"
              className={`h-5 w-5 ${
                i < rating ? "text-yellow-400" : "text-gray-400"
              }`}
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
          ))}
          <span className="mr-2 ml-3 rounded bg-blue-100 px-2.5 py-0.5 text-xs font-semibold text-blue-800 dark:bg-blue-200 dark:text-blue-800">
            {rating}
          </span>
        </div> */}
        <div className="flex items-center justify-between">
          <span className="text-3xl font-bold text-gray-900 dark:text-white">
            {product.price}$
          </span>
          <button className="rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}
