import { Outlet } from "react-router-dom";
import Footer from "../footer";
import HeaderUser from "../header/headerUser";

export default function LayoutUser() {
  return (
    <>
      <header className="font-Roboto">
        <HeaderUser />
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
