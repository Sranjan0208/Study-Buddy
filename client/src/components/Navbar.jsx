import React from "react";
import "./Navbar.css";

const Navbar = ({ title }) => {
  return (
    <div className="navbar">
      <h1 className="lg:text-4xl text-xl text-center font-bold pt-10">
        Welcome to your {title}!
      </h1>
    </div>
  );
};

export default Navbar;
