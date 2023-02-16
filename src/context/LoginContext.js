import React , { useState ,  createContext } from "react";

const LoginModalContext = createContext();

const LoginModalProvider = ( { children }) => {
    const [ isOpenLogin , setIsOpenLogin ] = useState ( false );

    return (
        <LoginModalContext.Provider value={{ isOpenLogin, setIsOpenLogin }}>
            {children}
        </LoginModalContext.Provider>
    );
};

export { LoginModalProvider, LoginModalContext };
