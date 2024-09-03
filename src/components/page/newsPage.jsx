import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../ui/navBar.jsx";

const HewsPage = () => {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
};

export default HewsPage;
