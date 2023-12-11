import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Home from "../../components/Home/Home";
import AboutMe from "../../components/Skills/Skills";
import Education from "../../components/Education/Education";

const Main = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <Navbar></Navbar>
      <Home></Home>
      <AboutMe></AboutMe>
      <Education></Education>
    </div>
  );
};

export default Main;
