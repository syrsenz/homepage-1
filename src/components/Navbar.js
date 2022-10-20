import "./NavbarStyled.css";

import React, { useState } from "react";
import { Link } from "react-router-dom";

import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [click, onClick] = useState(false);
  const handleClick = () => onClick(!click);

  const [color, onColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 100) {
      onColor(true);
    } else {
      onColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  return (
    <div className={color ? "header header-bg" : "header"}>
      <Link to="/">
        <h1>Logo</h1>
      </Link>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li>
          <Link to="/">Beranda</Link>
        </li>
        <li>
          <Link to="/profil">Profil</Link>
        </li>
        <li>
          <Link to="/berita">Berita</Link>
        </li>
        <li>
          <Link to="/prestasi">Prestasi</Link>
        </li>
        <li>
          <Link to="/galeri">Galeri</Link>
        </li>
      </ul>
      <div className="hamburger" onClick={handleClick}>
        {click ? <FaTimes size={20} style={{ color: "#f8f3f2" }} /> : <FaBars size={20} style={{ color: "#f8f3f2" }} />}
      </div>
    </div>
  );
};

export default Navbar;
