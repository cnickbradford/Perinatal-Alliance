import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

//component for the header to maintain consistency across pages
//h1- company name
//div - header container - links to other pages
const Header = () => {
  return (
    <>
      <div className="header">
        <h1 className="header-title">
          <Link to="/">PERINATAL ALLIANCE</Link>
        </h1>
        <nav className="header-nav">
          <ul className="header-list">
            <li className="header-list-item">
              <Link to="/">HOME</Link>
            </li>
            <li className="header-list-item">
              <Link to="about">ABOUT</Link>
            </li>
            <li className="header-list-item">
              <Link to="faq">FAQ</Link>
            </li>
            <li className="header-list-item">
              <Link to="contact">CONTACT</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="header-icon">icon</div>
    </>
  );
};

export default Header;

//REMEMBER TO DELETE THIS COMMENT AFTER CALLING
//2102951115 - ivan.j.sanchez4.mil@army.mil - SFC Sanchez
