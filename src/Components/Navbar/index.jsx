import React from "react";
import "./styles.css";
import ImageButton from "../Image Button";

const Navbar = () => {
  return (
    <div className="navbar">
      <h1 className="navbar-title">My Website</h1>
      <div className="navbar-right">
        <ImageButton />
      </div>
    </div>
  );
};

export default Navbar;
