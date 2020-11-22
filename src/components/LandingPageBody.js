import React, { useContext, useEffect } from "react";
import Showcase from "./BodyComponents/Showcase";
import About from "./BodyComponents/About";
import Skills from "./BodyComponents/Skills";
import "../style/Body.css";
import InspirationalQuote from "./BodyComponents/InspirationalQuote";
import MyShots from "./BodyComponents/MyShots";
import ThemeContext from "../context/ThemeContext";

function LandingPageBody() {
  const { setIsWhite } = useContext(ThemeContext);

  useEffect(() => {
    setIsWhite(true);
  }, []);

  return (
    <div className='main'>
      <Showcase />
      <About />
      <Skills />
      <InspirationalQuote />
      <MyShots />
    </div>
  );
}

export default LandingPageBody;
