import React from "react";
import { Link } from "react-router-dom";
import fbLogo from "../img/fb.png";
import instaLogo from "../img/insta.png";
import "../style/Footer.css";
import logo from "../img/transparent_logo_dark.png";

function Footer() {
  return (
    <footer className='footer'>
      <section className='footer__links'>
        <div className='footer__logo'>
          <img src={logo} alt='Logo cannot load' />
        </div>
        <div className='footer__link'>
          <h4>CATEGORIES</h4>
          <ul>
            <li>Life Style</li>
            <li>Photography</li>
            <li>Journal</li>
            <li>Works</li>
          </ul>
        </div>
        <div className='footer__link'>
          <h4>LEARN MORE</h4>
          <ul>
            <li>
              <Link to='/about-me'>About me</Link>
            </li>
            <li>
              <Link to='/gallery'>Projects</Link>
            </li>
            <li>
              <Link to='/developer'>Developer</Link>
            </li>
          </ul>
          <h4>ELSEWHERE</h4>
          <section className='footer__social-links'>
            <div>
              <a
                href='https://www.facebook.com/newton.newtonkshetrimayum'
                target='__blank'>
                <img src={fbLogo} alt='Logo cannot load' />
              </a>
            </div>
            <div>
              <a
                href='https://www.instagram.com/newtonkshetri/'
                target='__blank'>
                <img src={instaLogo} alt='Logo cannot load' />
              </a>
            </div>
          </section>
        </div>
        <div className='footer__link get-in-touch' id='contact'>
          <h4>GET IN TOUCH</h4>
          <ul>
            <li>
              <i className='fas fa-address-book'></i>{" "}
              <a href='https://www.google.co.in/maps/dir//24.494539,93.9781913/@24.4936569,93.9772219,18.04z'>
                Kakching Turel Wangma
              </a>
            </li>
            <li>
              <i className='fas fa-phone'></i>{" "}
              <a href='tel:+917005768480'>+917005768480</a>
            </li>
            <li>
              <i className='fas fa-envelope'></i>{" "}
              <a href='mailto:newtonkshetri@gmail.com'>
                newtonkshetria@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </section>
      <section className='footer__rights'>
        &copy; Newton Photography. All rights reserved. <br /> Web Designed by
        Rabin
      </section>
    </footer>
  );
}

export default Footer;
