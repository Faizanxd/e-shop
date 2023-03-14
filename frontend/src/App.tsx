import { Outlet, Route, RouterProvider } from "react-router";
import {
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./components/layout";
import Home from "./pages/home";
import Shop from "./pages/shop";

function AppRouter() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Outlet />}>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
          </Route>
          <Route path="cart" element={<div>About</div>}>
            <Route index element={<div>About Index</div>} />
          </Route>
        </Route>
        <Route path="/signup" element={<div>Home</div>} />
        <Route path="/login" element={<div>Home</div>} />
      </>
    )
  );
  return <RouterProvider router={router} />;
}

export default function App() {
  return <AppRouter />;
}
