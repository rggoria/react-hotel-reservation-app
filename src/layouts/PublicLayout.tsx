import { Outlet } from "react-router";

import Navbar from "../components/public/global/Navbar";
import Footer from "../components/public/global/Footer";

function PublicLayout() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main id="home" className="flex-1">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default PublicLayout;
