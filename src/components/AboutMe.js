import React, { useContext, useEffect } from "react";
import aboutMePhoto from "../img/about_me.jpg";
import ThemeContext from "../context/ThemeContext";
import "../style/AboutMe.css";

function AboutMe() {
  const { setIsWhite } = useContext(ThemeContext);

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsWhite(false);
  }, []);

  return (
    <div className='about-me'>
      <img src={aboutMePhoto} alt="Image can't be loaded" />
      <div>
        <strong>
          <span>H</span>i, I'm Newton.
        </strong>{" "}
        <br />
        I've a great passion in photography with an experience of over 1.5
        years. I haven’t put my camera down since I bought my first camera and
        now I feel so honored to be photographing other families and helping
        them document their own memories.
      </div>
    </div>
  );
}

export default AboutMe;
