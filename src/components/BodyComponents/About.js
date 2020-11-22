import React, { useContext, useEffect } from "react";
import sittingPhoto from "../../img/sitting.jpg";
import AnimationContext from "../../context/AnimationContext";
import { Link } from "react-router-dom";

function About() {
  const { animate } = useContext(AnimationContext);

  useEffect(() => {
    animate(document.querySelector(".about__header"), "animate-2-up", 0);
    animate(
      document.querySelector(".about__details .about__text"),
      "animate-2-up",
      0.3
    );
    animate(
      document.querySelector(".about__details .more-about-me"),
      "animate-2-up",
      0.4
    );
    animate(
      document.querySelector(".about__details .about__image img"),
      "animate-2-right",
      0.2
    );
  }, []);

  return (
    <div className='about'>
      <div className='about__header will-animate'>About me</div>
      <div className='about__details'>
        <div className='about__image'>
          <img
            src={sittingPhoto}
            alt='Image cannot be loaded '
            className='will-animate'
          />
        </div>
        <div className='about__text will-animate'>
          I'm Newton, a freelance photographer. My passion is taking photos of
          the most stunning architecture around the world. <br />
          <Link
            to='/about-me'
            className='btn btn-primary will-animate more-about-me'>
            MORE ABOUT ME
          </Link>
        </div>
      </div>
    </div>
  );
}

export default About;
