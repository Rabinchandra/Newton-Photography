import React from 'react'
import standingPhoto from "../../img/main.png"

function Showcase() {
    return (
        <div className="showcase">
            <div className="showcase__image">
                <img 
                    src={standingPhoto} 
                    alt="Image cannot load"
                    style={{ animationDelay: '1.6s'}}
                    className="animate-1-up"
                /> 
                <div className="circle animate-1-right" style={{animationDelay: '1s'}}></div>
            </div>
            <div className="showcase__text">
                <div className="showcase__main-text animate-1-left" style={{animationDelay: '2.5s'}}>
                    <span className="capital-letter">H</span>ello, <span className="capital-letter">I</span>'m  <span className="orange-color"><span className="capital-letter">N</span>ewton</span>
                </div>
                <div className="showcase__secondary-text animate-1-up" style={{animationDelay: '3s'}}>
                    I'm a freelance Photographer
                </div>
            </div>
        </div>
    )
}

export default Showcase
