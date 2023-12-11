import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Home from "../../components/Home/Home";
import AboutMe from "../../components/Skills/Skills";

const Main = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <Navbar></Navbar>
      <Home></Home>
      <AboutMe></AboutMe>
    </div>
  );
};

export default Main;
