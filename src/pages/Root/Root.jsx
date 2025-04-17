import React, { useState } from "react";
import { Outlet } from "react-router";
import NavBar from "../../components/Header/NavBar";
import Footer from "../../components/Footer/Footer";
import { ToastContext } from "../../context/ToastContext";

const Root = () => {
  const [isExist, setIsExist] = useState(false);
  return (
    <ToastContext.Provider value={[isExist, setIsExist]}>
      <div>
        <NavBar />
        <Outlet />
        <Footer />
      </div>
    </ToastContext.Provider>
  );
};

export default Root;
