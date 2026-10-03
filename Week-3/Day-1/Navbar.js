// src/components/Navbar.js
import React from "react";

function Navbar() {
  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <h1 className="brand">My Personal Blog</h1>
        <nav className="nav-links">
          <a href="#home">Home</a>
          <a href="#posts">Posts</a>
          <a href="#about">About</a>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
