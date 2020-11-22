import React, { useContext, useEffect } from 'react'
import skillsPhoto from "../../img/skills.jpg"
import AnimationContext from "../../context/AnimationContext"

function Skills() {
    const { animate } = useContext(AnimationContext)

    useEffect(() => {
        const skillNames = Array.from(document.querySelectorAll('.skill-name'));
        const progressContainers = Array.from(document.querySelectorAll('.progress-container'))
        const progressDivs = Array.from(document.querySelectorAll('.progress-container div'));
        const progressValues = [70, 90, 85]
        
        animate(document.querySelector('.skills__details__header'), 'animate-2-up', 0);
        animate(document.querySelector('.skills__img img'), 'animate-2-left', .5);

        skillNames.forEach((skill, index) => {
            animate(skill, 'animate-2-up', 0);
            animate(progressContainers[index], 'animate-2-up', 0.1);
            animate(progressDivs[index], `animate-progress-${progressValues[index]}`, 0);
        });


    }, [])

    return (
        <div className="skills">
                <div className="skills__details">
                    <h4 className="skills__details__header will-animate">My Skills</h4>
                    <div className="skill-name will-animate">
                        <div>Photo Editing</div>
                        <div>70%</div>
                    </div>
                    <div className="progress-container will-animate">
                        <div className="will-animate"></div>
                    </div>

                    <div className="skill-name will-animate ">
                        <div>Potrait Photography</div>
                        <div>90%</div>
                    </div>
                    <div className="progress-container will-animate">
                        <div className="will-animate"></div>
                    </div>
                    
                    <div className="skill-name will-animate">
                        <div>Event Photography</div>
                        <div>85%</div>
                    </div>
                    <div className="progress-container will-animate">
                        <div className="will-animate"></div>
                    </div>
                </div>
            <div className="skills__img">
                <img src={skillsPhoto} alt="Image cannot load" className="will-animate"/>
            </div>
        </div>
    )
}

export default Skills
