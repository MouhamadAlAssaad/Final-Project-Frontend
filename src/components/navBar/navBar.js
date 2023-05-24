import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navBar.css";
import logo from '../images/logo.svg'
import whitelogo from "../images/whitelogo.svg"

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <header className="main-header">
      <div className="main-header-logo">
        <img src={whitelogo} width='100%' height='100%' />
      </div>
      <nav className="navbar">
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
          <a
              href="#home"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Home <i className="fas fa-caret-down" />
            </a>
          </li>
          <li className="nav-item">
          <a
              href="#our-services"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Services <i className="fas fa-caret-down" />
            </a>
          </li>
          <li className="nav-item">
          <a
              href="#tips"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Tips <i className="fas fa-caret-down" />
            </a>
          </li>
          <li className="nav-item">
            <Link
              to="/"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
