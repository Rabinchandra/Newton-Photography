import React, { createContext } from 'react'

export const AnimationContext = createContext();

export function AnimationContextProvider(props) {
    const animate = (element, type, delay = 1) => {
        window.addEventListener('scroll', () => {
            const elementHeight = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight/1.08;
            
            element.style.animationDelay = delay + 's';

            if(elementHeight < windowHeight) {
                element.classList.add(type);
                element.style.opacity = "1";
            }
        })
    }

    

    return (
        <AnimationContext.Provider value={{ animate }}>
            { props.children }
        </AnimationContext.Provider>
    )
}

export default AnimationContext;
