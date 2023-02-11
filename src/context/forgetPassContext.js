import React, { useState } from "react";

const Data2Context = React.createContext();

const Data2Provider = ( { children }) => {
    const [ isPassOpen , setIsPassOpen ] = useState ( false );

    return (
        <Data2Context.Provider value={{isPassOpen , setIsPassOpen }}>
            {children}
        </Data2Context.Provider>
    );
};

export { Data2Provider, Data2Context };