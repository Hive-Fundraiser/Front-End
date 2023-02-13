import React, { useState } from "react";

const DakhelContext = React.createContext();

const DakhelProvider = ( { children }) => {
    const [isIn, setIsIn] = useState(false);

    return (
        <DakhelContext.Provider value={{isIn , setIsIn }}>
            {children}
        </DakhelContext.Provider>
    );
};

export { DakhelProvider, DakhelContext };