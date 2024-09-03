import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../ui/navBar.jsx";
import About from "../../layouts/about.jsx";

const HomePage = () => {
  return (
    <>
      <NavBar />
      <About />
    </>
  );
};

export default HomePage;
