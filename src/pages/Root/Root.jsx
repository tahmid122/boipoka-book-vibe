import React from "react";
import { Outlet } from "react-router";
import NavBar from "../../components/Header/NavBar";
import Footer from "../../components/Footer/Footer";

const Root = () => {
  return (
    <div>
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;
