import React, { useContext, useEffect, useState } from "react";
import logo from "/images/TasteBites_name.png";

import { Link } from "react-router-dom";
import { FaRegUser } from "react-icons/fa";
import LoginModal from "./LoginModal";
import { navItems } from "./Helper";
import { AuthContext } from "../Contexts/AuthProvider";

const Navbar = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  const [isSticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 0) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    return () => {
      window.addEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="max-w-screen-2xl container mx-auto fixed top-0 left-0 right-0">
      <div
        className={`navbar xl:px-24 xl:py-5  bg-base-100  ${
          isSticky ? "shadow-md transition-all duration-300 ease-in-out" : ""
        }`}
      >
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
              {navItems}
            </ul>
          </div>

          <a href="/">
            <img src={logo} alt="" className="h-[3rem]" />
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navItems}</ul>
        </div>
        <div className="navbar-end">
          {/* search */}
          <button className="btn btn-ghost btn-circle hidden md:flex">
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
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
          {/* cart-items */}
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle mr-3 hidden md:flex"
          >
            <div className="indicator">
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
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span className="badge badge-sm indicator-item">8</span>
            </div>
          </div>

          {/* login */}
          <button
            className="btn bg-green rounded-full px-6 text-white items-center gap-2 "
            onClick={() => document.getElementById("login_modal").showModal()}
          >
            <FaRegUser />
            Login
          </button>
        </div>
      </div>

      <LoginModal />
    </header>
  );
};

export default Navbar;
