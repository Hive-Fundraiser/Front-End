import React, { useState } from "react";

const DataContext = React.createContext();

const DataProvider = ({ children }) => {
    const [ isOpenLogin , setIsOpenLogin ] = useState ( false );

    return (
        <DataContext.Provider value={{ isOpenLogin, setIsOpenLogin }}>
            {children}
        </DataContext.Provider>
    );
};

export { DataProvider, DataContext };
