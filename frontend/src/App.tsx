import { Outlet, Route, RouterProvider } from "react-router";
import {
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./components/layout";
import Home from "./pages/home";
import Login from "./pages/login";
import Shop from "./pages/shop";
import SignUp from "./pages/signup";
import Cart from "./pages/user/cart";
import Orders from "./pages/user/orders";

function AppRouter() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Outlet />}>
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

        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
        <Route path="/signup" element={<Login />} />
        <Route path="/login" element={<SignUp />} />
      </>
    )
  );
  return <RouterProvider router={router} />;
}

export default function App() {
  return <AppRouter />;
}
