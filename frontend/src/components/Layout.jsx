import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import { ToastContainer } from "react-toastify";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div className="bg-gray-50">
      <ToastContainer position="bottom-right"/>
      <Navbar />
      <Outlet />
      <Footer/>
    </div>
  );
};

export default Layout;
