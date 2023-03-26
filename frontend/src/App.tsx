import { Outlet, Route, RouterProvider, useNavigate } from "react-router";
import {
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./components/layout";
import Error from "./pages/error";
import Home from "./pages/home";
import SignUp from "./pages/signup";
import Shop from "./pages/shop";
import Login from "./pages/login";
import Cart from "./pages/user/cart";
import Orders from "./pages/user/orders";

import { useEffect, useState } from "react";
import Loader from "./components/loader";

import CreateProduct from "./pages/admin-user/createProduct";

function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    } else {
      setIsLoading(false);
    }
  }, [navigate]);

  if (isLoading === true) {
    return (
      <div>
        <Loader />
      </div>
    );
  }

  return <>{children}</>;
}

function AppRouter() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route
          path="/"
          element={
            //  <ProtectedRoute>
            <Outlet />
            //   </ProtectedRoute>
          }
          errorElement={<Error />}
        >
          <Route path="shop" element={<Layout />}>
            <Route index element={<Shop />} />
          </Route>
          <Route path="orders" element={<Layout />}>
            <Route index element={<Orders />} />
          </Route>
          <Route path="cart" element={<Layout />}>
            <Route index element={<Cart />} />
          </Route>
        </Route>
        <Route path="/create" element={<Layout />} errorElement={<Error />}>
          <Route index element={<CreateProduct />} />
        </Route>
        <Route path="/home" element={<Layout />} errorElement={<Error />}>
          <Route index element={<Home />} />
        </Route>
        <Route path="/signup" element={<SignUp />} errorElement={<Error />} />
        <Route path="/login" element={<Login />} errorElement={<Error />} />
      </>
    )
  );
  return <RouterProvider router={router} />;
}

export default function App() {
  return <AppRouter />;
}
