import { Outlet } from "react-router-dom";
import Footer from "./footer";
import Header from "./header";

export default function Layout() {
  return (
    <>
      <header className="font-Roboto">
        <Header />
      </header>
      <main className="font-Roboto">
        <Outlet />
      </main>
      <footer className="font-Roboto">{/* <Footer /> */}</footer>
    </>
  );
}
