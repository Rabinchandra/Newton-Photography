import React, { useContext } from "react";
import { Link } from "react-router-dom";
import ThemeContext from "../context/ThemeContext";
import "../style/Navbar.css";
import darkLogo from "../img/transparent_logo_dark.png";
import whiteLogo from "../img/transparent_logo_white.png";

function Navbar({ menuHandler, user, logout }) {
  const { isWhite } = useContext(ThemeContext);

  return (
    <div
      className={`navbar-components ${isWhite ? "nav__white" : "nav__dark"}`}>
      <nav>
        <img
          src={isWhite ? whiteLogo : darkLogo}
          alt=''
          className='nav__logo'
        />
        <div className='nav__links'>
          <Link to='/'>Home</Link>
          <Link to='/gallery'>Gallery</Link>
          <a href='#contact'>Contact</a>
          {user ? (
            <a onClick={() => logout()}>
              <i className='fas fa-sign-out-alt'></i> Log out
            </a>
          ) : (
            <Link to='/login'>
              <i className='fas fa-sign-in-alt'></i> Login
            </Link>
          )}
        </div>
        <div className='navbar-menu' onClick={menuHandler}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
