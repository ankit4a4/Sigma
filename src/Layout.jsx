import React from "react";
import Header from "./components/Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";

const Layout = () => {
  return (
    <div className="flex bg-gray-200 flex-col min-h-screen">
      {/* <ToastContainer /> */}
      <div className="top-0">
        <Header />
      </div>

      {/* <Sidebar /> */}
      <div className="flex-auto overflow-hidden  ">
        <Outlet />
      </div>

      {/* <MusicPlayer />*/}

      <Footer />
    </div>
  );
};

export default Layout;
