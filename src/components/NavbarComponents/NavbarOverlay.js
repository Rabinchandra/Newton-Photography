import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function NavbarOverlay({ overlayClosed, menuHandler, user, logout }) {
  const [overlayClass, setOverlayClass] = useState("");

  useEffect(() => {
    if (overlayClosed) {
      setOverlayClass("overlay-closed");
    } else {
      setOverlayClass("overlay-open");
    }
  }, [overlayClosed]);

  return (
    <div className={`navbar-overlay ${overlayClass}`}>
      <section className='navbar-overlay__close'>
        <i className='fas fa-times' onClick={menuHandler}></i>
      </section>
      <section className='navbar-overlay__links'>
        <div>
          <Link to='/' onClick={menuHandler}>
            <i className='fas fa-home'></i> Home
          </Link>
        </div>
        <div>
          <Link to='/gallery' onClick={menuHandler}>
            <i className='fas fa-camera-retro'></i> Gallery
          </Link>
        </div>
        <div>
          <a href='#contact' onClick={menuHandler}>
            <i className='fas fa-id-badge'></i> Contact
          </a>
        </div>
        <div>
          {user ? (
            <a onClick={logout}>
              <i className='fas fa-sign-out-alt'></i> Log out
            </a>
          ) : (
            <Link to='/login' onClick={menuHandler}>
              <i className='fas fa-sign-in-alt'></i> Login
            </Link>
          )}
        </div>
      </section>
    </div>
  );
}

export default NavbarOverlay;
