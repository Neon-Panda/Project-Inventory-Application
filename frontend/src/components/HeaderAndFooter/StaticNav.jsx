import Header from "./Header/Header.jsx";
import Footer from "./Footer/Footer.jsx";
import { Outlet } from "react-router-dom";

export default function StaticNav() {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
