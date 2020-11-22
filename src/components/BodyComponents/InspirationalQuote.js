import React, { useContext, useEffect } from 'react'
import AnimationContext from "../../context/AnimationContext"

function InspirationalQuote() {
    const { animate } = useContext(AnimationContext);

    useEffect(() => {
        animate(document.querySelector('.inspirational-quote__header'), 'animate-2-up', 0);
        animate(document.querySelector('.quote-text'), 'animate-2-up', 0);
        animate(document.querySelector('.quote-writer'), 'animate-2-left', 0);
    }, []);

    return (
        <div className="inspirational-quote">
            <h1 className="inspirational-quote__header will-animate">My favourite Inspirational Quote?</h1>
            <div className="quote-text will-animate">
                <span className="quote">"</span>
                If you see something that moves you, and then snap it, you keep a moment.
                <span className="quote">"</span>
                <h3 className="quote-writer will-animate">
                    &#8212; Linda McCartney
                </h3>
            </div>
        </div>
    )
}

export default InspirationalQuote;
