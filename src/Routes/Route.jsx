import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main/Main";
import AboutMe from "../components/Skills/Skills";
import Skills from "../components/Skills/Skills";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
  },
  {
    path: "skill",
    element: <Skills></Skills>
  },
]);

export default router;
