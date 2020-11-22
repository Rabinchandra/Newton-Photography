import React, { useContext, useEffect } from "react";
import aboutMePhoto from "../img/developer.jpg";
import ThemeContext from "../context/ThemeContext";
import "../style/AboutDeveloper.css";

function AboutMe() {
  const { setIsWhite } = useContext(ThemeContext);

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsWhite(false);
  }, []);

  return (
    <div className='about-developer'>
      <img src={aboutMePhoto} alt="Image can't be loaded" />
      <div>
        <strong>
          <span>H</span>i, I'm Rabin.
        </strong>{" "}
        <br />
        I'm a web developer with an experience of over 2 years. Development is
        my passion.
      </div>
      <div className='developer-contact'>
        <a href='https://www.facebook.com/yendrembam.sinh' target='__blank'>
          <i class='fab fa-facebook'></i>
        </a>
        <a href='https://www.instagram.com/rabinyen/' target='__blank'>
          <i class='fab fa-instagram-square'></i>
        </a>
      </div>
    </div>
  );
}

export default AboutMe;
