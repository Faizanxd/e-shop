import { useEffect, useState } from "react";
import ProductCard from "../components/productCard";
import { Product } from "../common/types";
import Loader from "../components/loader";
import axios from "axios";

export default function Shop() {
  const [products, setProducts] = useState([] as Product[]);
  const url = "http://localhost:8000";
  useEffect(() => {
    axios.get(`${url}/getProducts`).then((res) => {
      setProducts(res.data);
    });
  }, []);

  if (products.length === 0) {
    return <Loader />;
  }

  return (
    <>
      <div className="grid grid-cols-1 items-center gap-6 p-6 md:grid-cols-2 md:pl-4 lg:grid-cols-3 xl:grid-cols-4 xl:pl-16">
        {/* {products.map((product) => (
          <ProductCard key={product.id} product={product as Product} />
        ))} */}
      </div>
    </>
  );
}
