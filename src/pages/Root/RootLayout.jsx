import React from "react";
import SideBar from "./SideBar/SideBar";
import Suggestion from "./Suggestion/Suggestion";
import { Outlet, useLocation } from "react-router-dom";
import Home from "./Home/Home";

const RootLayout = () => {
  const { pathname } = useLocation();
  console.log(pathname);
  return (
    <div className="flex">
      <SideBar />
      {pathname === "/root" && <Home />}
      <Outlet />
      <Suggestion />
    </div>
  );
};

export default RootLayout;
