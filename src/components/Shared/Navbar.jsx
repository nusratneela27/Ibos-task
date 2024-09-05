import React from "react";
import Container from "./Container";
import logo from "../../assets/Logo.png";
import { IoBagOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const navOptions = (
    <>
      <NavLink to={"/"}>
        <li>Home</li>
      </NavLink>
      <li>Products</li>
      <li>Categories</li>
      <li>Custom</li>
      <li>Blog</li>
    </>
  );

  return (
    <Container>
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
              className="menu menu-compact dropdown-content mt-3 shadow bg-base-100 rounded-box w-52 space-y-4 p-3"
            >
              {navOptions}
            </ul>
          </div>
          <img src={logo} alt="" />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-5 font-semibold">
            {navOptions}
          </ul>
        </div>
        <div className="navbar-end gap-10">
          <IoBagOutline />
          <NavLink to={"login"}>
            <button className="btn btn-neutral">Login</button>
          </NavLink>
        </div>
      </div>
    </Container>
  );
};

export default Navbar;
