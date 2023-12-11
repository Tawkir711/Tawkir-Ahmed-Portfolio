import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const NavLinks = (
    <>
      <li>
        <NavLink
          to={"/"}
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "underline text-white bg-primary hover:bg-orange-300 "
              : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/"}
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "underline text-white bg-primary hover:bg-orange-300 "
              : ""
          }
        >
          About Me
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/"}
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "underline text-white bg-primary hover:bg-orange-300 "
              : ""
          }
        >
          Education
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/"}
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "underline text-white bg-primary hover:bg-orange-300 "
              : ""
          }
        >
          Services
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/"}
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "underline text-white bg-primary hover:bg-orange-300 "
              : ""
          }
        >
          Experience
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/portfolio"}
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "underline text-white bg-primary hover:bg-orange-300 "
              : ""
          }
        >
          Portfolio
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100">
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
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {NavLinks}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">Tawkir Ahmed</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-2">
          {NavLinks}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;