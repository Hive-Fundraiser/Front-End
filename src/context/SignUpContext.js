import React, { useState } from "react";

const SignUpContext = React.createContext();

const SigunUpProvider = ( { children }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <SignUpContext.Provider value={{isOpen , setIsOpen }}>
            {children}
        </SignUpContext.Provider>
    );
};

export { SigunUpProvider, SignUpContext };