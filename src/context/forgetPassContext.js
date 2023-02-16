import React, { useState } from "react";

const ForgetModalContext = React.createContext();

const ForgetModalProvider = ( { children }) => {
    const [ isPassOpen , setIsPassOpen ] = useState ( false );

    return (
        <ForgetModalContext.Provider value={{isPassOpen , setIsPassOpen }}>
            {children}
        </ForgetModalContext.Provider>
    );
};

export { ForgetModalProvider, ForgetModalContext };