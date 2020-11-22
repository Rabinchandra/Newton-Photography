import React, { createContext, useState } from 'react'

export const ThemeContext = createContext();

export const ThemeContextProvider = (props) => {
    const [isWhite, setIsWhite] = useState(true);

    return (
        <ThemeContext.Provider value={ {  isWhite: isWhite, setIsWhite: setIsWhite} }>
            { props.children }
        </ThemeContext.Provider>
    )
}

export default ThemeContext;
