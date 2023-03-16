import { useEffect, useState } from "react";
import ProductCard from "../components/productCard";
import { Product } from "../common/types";

export default function Shop() {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "test",
      price: 1,
      description: "test",
      image: "test",
      rating: 1,
    },
  ]); //

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, []);

  return (
    <div className="grid grid-cols-1 items-center gap-6 p-6 md:grid-cols-2 md:pl-4 lg:grid-cols-3 xl:grid-cols-4 xl:pl-16">
      {products.map((product) => (
        <ProductCard key={product.id} product={product as Product} />
      ))}
    </div>
  );
}
