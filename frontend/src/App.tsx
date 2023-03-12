import { Outlet, Route, RouterProvider } from "react-router";
import {
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

function AppRouter() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Outlet />}>
          <Route index element={<div>A</div>} />
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
