import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../ui/navBar.jsx";

const ForumPage = () => {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
};

export default ForumPage;
