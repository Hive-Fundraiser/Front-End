import React, { useState } from "react";

const SearchContext = React.createContext();

const SearchProvider = ( { children }) => {
    const [search,setSearch]=useState("")

    return (
        <SearchContext.Provider value={{search , setSearch }}>
            {children}
        </SearchContext.Provider>
    );
};

export { SearchProvider, SearchContext };