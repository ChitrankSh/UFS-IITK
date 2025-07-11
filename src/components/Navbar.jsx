import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="https://ufs-iitk.github.io/website/images/logos/logo.jpg" alt="logo" />
        <h1>Ultimate Frisbee | IIT Kanpur</h1>
        <img className="rotation"  src="https://tse1.mm.bing.net/th/id/OIP.vHnVm2zthwxDhVpz0VekAgHaHa?rs=1&pid=ImgDetMain&o=7&rm=3" alt="Frisbee Logo" />
      </div>
      <div className="navbar-links">
        <a href="#about">About</a>
        <a href="#leaders">Leaders</a>
        <a href="#gallery">Gallery</a>
        <div className="dropdown">
          <button className="dropbtn">Secretaries</button>
          <div className="dropdown-content">
            <a href="#sec1">Sec 1</a>
            <a href="#sec2">Sec 2</a>
            <a href="#sec3">Sec 3</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
