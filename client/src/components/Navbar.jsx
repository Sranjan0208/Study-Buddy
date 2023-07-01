import React from "react";

const Navbar = ({ title }) => {
  return (
    <div>
      <h1 className="text-4xl text-center font-bold pt-10">
        Welcome to your {title}!
      </h1>
    </div>
  );
};

export default Navbar;
