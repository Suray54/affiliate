import React from "react";
import ThemeToggleButton from "@/components/button/ThemeToggleButton";

const Navbar = () => {
  return (
    // <nav className="fixed top-0 left-0 w-full navbar">
    <nav className="w-full navbar">
      <ul className="max-w-[80vw] flex flex-wrap justify-between items-center mx-auto py-7">
        <a className="logo" href="#">
          <h3 className="font-bold text-2xl">LOGO</h3>
        </a>

        <span className="menu flex">
          <li>
            <ThemeToggleButton />
          </li>

          <li>
            <a href="#">Signup</a>
          </li>
          <li>
            <a href="#">Login</a>
          </li>
        </span>
      </ul>
    </nav>
  );
};

export default Navbar;
