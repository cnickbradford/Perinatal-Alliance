import React, { useState, useRef, useEffect } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import Icon from "@material-ui/core/Icon";

//component for the header to maintain consistency across pages
//h1- company name
//div - header container - links to other pages
const Header = () => {
  const [loginMenu, setLoginMenu] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setLoginMenu(false);
    }
  };


  function handleLoginMenu() {
    setLoginMenu(!loginMenu);
  }

  return (
    <>
      <div className="header">
        <h1 className="header-title">
          <Link to="/" className="title-link">
            PERINATAL ALLIANCE
          </Link>
        </h1>
        <nav className="header-nav">
          <ul className="header-list">
            <li className="header-list-item">
              <Link to="/" className="home-link">
                HOME
              </Link>
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
      <div className="header-icon">
        <i
          className="material-icons"
          style={{ color: "#4e85ce" }}
          onClick={handleLoginMenu}
        >
          account_circle
        </i>
        {loginMenu ? (
          <div ref={menuRef} className="login-menu">
            <ul className="login-menu-list">
              <li className="login-menu-list-item">
                <span>
                  <Link
                    to="/login"
                    onClick={(event) => {
                      handleLoginMenu();
                    }}
                  >
                    Sign In
                  </Link>
                </span>
              </li>

              <li className="login-menu-list-item">
                <span>
                  <Link
                    to="/create-account"
                    onClick={(event) => {
                      handleLoginMenu();
                    }}
                  >
                    Create Account
                  </Link>
                </span>
              </li>
            </ul>
          </div>
        ) : null}
      </div>
    </>
  );
};

export default Header;


