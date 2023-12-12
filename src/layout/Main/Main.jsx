import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Home from "../../components/Home/Home";
import Projects from "../../components/Projects/Projects";
import Footer from "../../components/Footer/Footer";
import Experience from "../../components/Experience/Experience";
import { Contacts } from "../../components/Contact/Contacts";


const Main = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <Navbar></Navbar>
      <Home></Home>
      <Projects></Projects>
      <Experience></Experience>
      <Contacts></Contacts>
      <Footer></Footer>
    </div>
  );
};

export default Main;
