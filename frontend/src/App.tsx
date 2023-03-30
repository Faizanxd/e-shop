import { Outlet, Route, RouterProvider, useNavigate } from "react-router";
import {
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./components/layout/layout";
import Error from "./pages/error";
import Home from "./pages/home";
import SignUp from "./pages/signup";
import Shop from "./pages/shop";
import Login from "./pages/login";
import Cart from "./pages/user/cart";
import Orders from "./pages/user/orders";
import { useEffect, useState } from "react";
import Loader from "./components/loader";
import Dashboard from "./pages/admin-user/dashboard";
import LayoutUser from "./components/layout/layoutUser";
import { LayoutAdmin } from "./components/layout/layoutadmin";

import { checkAuth, Loading } from "./common/functions";

function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [auth, setAuth] = useState(false);
  let isAuth = checkAuth();

  useEffect(() => {
    if (isAuth === true) {
      setAuth(true);
    } else {
      setAuth(false);
    }
  }, [isAuth]);

  useEffect(() => {
    if (auth === false) {
      setIsLoading(true);
      navigate("/login");
    } else {
      setIsLoading(false);
      navigate("/shop");
    }
  }, [auth]);

  return <>{children}</>;
}

function AppRouter() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route
          path="/"
          element={
            // <ProtectedRoute>
            <Outlet />
            //</ProtectedRoute>
          }
          errorElement={<Error />}
        >
          <Route path="shop" element={<LayoutUser />}>
            <Route index element={<Shop />} />
          </Route>
          <Route path="orders" element={<LayoutUser />}>
            <Route index element={<Orders />} />
          </Route>
          <Route path="cart" element={<LayoutUser />}>
            <Route index element={<Cart />} />
          </Route>
        </Route>
        <Route
          path="/dashboard"
          element={<LayoutAdmin />}
          errorElement={<Error />}
        >
          <Route index element={<Dashboard />} />
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
