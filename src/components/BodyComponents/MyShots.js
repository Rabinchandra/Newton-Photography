import React, { useState, useContext, useEffect } from 'react'
import { Link } from "react-router-dom"
import photo_1 from '../../img/slide_images/3.jpg'
import photo_2 from '../../img/slide_images/2.jpg'
import photo_3 from '../../img/slide_images/5.jpg'
import photo_4 from '../../img/slide_images/6.jpg'
import AnimationContext from "../../context/AnimationContext"

function MyShots() {
    const [translateValue, setTranslateValue] = useState(0);
    const slideImage = (n) => {
        setTranslateValue(n)
    };
    const { animate } = useContext(AnimationContext);

    useEffect(() => {
        animate(document.querySelector('.my-shots__header'), 'animate-2-up', 0);
        animate(document.querySelector('.image-slider'), 'animate-2-up', 0);
        animate(document.querySelector('.slider-controler'), 'animate-2-up', 0);
        animate(document.querySelector('.see-more-shots-btn'), 'animate-2-up', 0);
    }, []);

    return (
        <div className="my-shots">
            <h2 className="my-shots__header will-animate">My Shots</h2>
            <section className="image-slider will-animate">
                <div className="image-slide" >
                    <img src={photo_1} alt="Image cannot load" style={{transform: `translateX(-${translateValue*100}%)`}}/>
                    <img src={photo_2} alt="Image cannot load" style={{transform: `translateX(-${translateValue*100}%)`}}/>
                    <img src={photo_3} alt="Image cannot load" style={{transform: `translateX(-${translateValue*100}%)`}}/>
                    <img src={photo_4} alt="Image cannot load" style={{transform: `translateX(-${translateValue*100}%)`}}/>
                </div>
            </section>
            <section className="slider-controler will-animate">
                <div onClick={() => slideImage(0)} className={translateValue === 0? "active-controler" : ""}></div>
                <div onClick={() => slideImage(1)} className={translateValue === 1? "active-controler" : ""}></div>
                <div onClick={() => slideImage(2)} className={translateValue === 2? "active-controler" : ""}></div>
                <div onClick={() => slideImage(3)} className={translateValue === 3? "active-controler" : ""}></div>
            </section>
            <Link to="/gallery" className="btn-primary will-animate see-more-shots-btn">SEE MORE SHOTS</Link>
        </div>
    )
}

export default MyShots;
