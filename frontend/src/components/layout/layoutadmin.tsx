import { Outlet } from "react-router-dom";
import Footer from "../footer";
import HeaderAdmin from "../header/headerAdmin";

export function LayoutAdmin() {
  return (
    <>
      <header className="font-Roboto">
        <HeaderAdmin />
      </header>
      <main className="font-Roboto ">
        <Outlet />
      </main>
      <footer className="font-Roboto ">
        {" "}
        <Footer />{" "}
      </footer>
    </>
  );
}
