import { useEffect, useState } from "react";
import ProductCard from "../components/productCard";
import { Product } from "../common/types";
import { checkAuth, Loading } from "../common/functions";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Shop() {
  const [products, setProducts] = useState([] as Product[]);
  const navigate = useNavigate();
  const url = "http://localhost:8000";

  useEffect(() => {
    axios.get(`${url}/getProducts`).then((res) => {
      if (res.status === 200) {
        setProducts(res.data.products);
      }
      // navigate("/login");
    });
  }, []);

  console.log(products);
  return (
    <>
      <div className="grid grid-cols-1 items-center gap-6 p-6 md:grid-cols-2 md:pl-4 lg:grid-cols-3 xl:grid-cols-4 xl:pl-16">
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product as Product} />
          ))}
      </div>
    </>
  );
}
