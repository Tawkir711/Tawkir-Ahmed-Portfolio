import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Home from "../../components/Home/Home";
import Skills from "../../components/Skills/Skills";
import Education from "../../components/Education/Education";
import Projects from "../../components/Projects/Projects";

const Main = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <Navbar></Navbar>
      <Home></Home>
      <Skills></Skills>
      <Projects></Projects>
      <Education></Education>
    </div>
  );
};

export default Main;
