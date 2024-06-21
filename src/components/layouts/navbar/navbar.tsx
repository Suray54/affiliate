import React from "react";
import ThemeToggleButton from "@/components/button/ThemeToggleButton";

const Navbar = () => {
  return (
    // <nav className="fixed top-0 left-0 w-full navbar">
    <nav className="w-full navbar">
      <ul className="max-w-[90vw] flex flex-wrap justify-between items-center relative mx-auto py-8">
        <a className="logo" href="#">
          <h3 className="font-bold text-2xl">LOGO</h3>
        </a>
        <input type="checkbox" id="check" />

        <span className="menu flex">
          <li>
            <ThemeToggleButton />
          </li>

          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Projects</a>
          </li>
          <li>
            <a href="#">Resources</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>

          <label htmlFor="check" className="close-menu">
            X
          </label>
        </span>

        <label htmlFor="check" className="open-menu">
          Menu
        </label>
      </ul>
    </nav>
  );
};

export default Navbar;
