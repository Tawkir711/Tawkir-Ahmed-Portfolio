import React from "react";
import { HashLink } from "react-router-hash-link";

const Navbar = () => {
  const NavLinks = (
    <>
      <li className="font-semibold">
        <HashLink
          to={"#home"}
        >
          Home
        </HashLink>
      </li>
      <li className="font-semibold">
        <HashLink
          to={"#skill"} spy={true} smooth={true} offset={50} duration={500}
        >
          Skills
        </HashLink>
      </li>
      <li className="font-semibold">
        <HashLink
          to={"#projects"} spy={true} smooth={true} offset={50} duration={500}
        >
          Projects
        </HashLink>
      </li>
      <li className="font-semibold">
        <HashLink
          to={"#experience"} spy={true} smooth={true} offset={50} duration={500}
        >
          Experience / Education
        </HashLink>
      </li>
      <li className="font-semibold">
        <HashLink
          to={"#contact"} spy={true} smooth={true} offset={50} duration={500}
        >
          Contact
        </HashLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100 sticky top-0 z-10 ">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 gap-2"
          >
            {NavLinks}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">Portfolio</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-2">{NavLinks}</ul>
      </div>
    </div>
  );
};

export default Navbar;
