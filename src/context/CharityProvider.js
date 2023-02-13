import React , { useEffect , useState,createContext } from "react";
import { getCharity } from "../services/api";

export const CharityContext = createContext ();

const CharityProvider = ( { children } ) => {
    const [ charity , setCharity ] = useState ( [] );
    useEffect ( () => {
        const fetchAPI = async () => {
            setCharity ( await getCharity () );
        }
        fetchAPI ();
    } , [] )

    return (
        <CharityContext.Provider value={ charity }>
            { children }
        </CharityContext.Provider>
    );
};

export default CharityProvider;