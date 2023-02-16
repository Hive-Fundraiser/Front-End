import React , { useEffect } from 'react';

import { Route , Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import PostsPage from "./pages/PostsPage";
import { LoginModalProvider } from "./context/LoginContext";
import { ForgetModalProvider } from "./context/forgetPassContext";
import CharityProvider from "./context/CharityProvider"
import { SigunUpProvider } from "./context/SignUpContext"
import { DakhelProvider } from "./context/DakhelContext";
import { SearchProvider } from "./context/SearchContext";
import ProfilePage from './pages/ProfilePage';
import PostPage from './pages/PostPage';
import NotFoundPage from './pages/NotFoundPage';
import EmailConfigurationPage from './pages/EmailConfigurationPage';
import ChangePasswordPage from './pages/ChangePasswordPage';

function App () {
    useEffect(()=>{
        document.title = "Hive";

    },[])
    return (
        <CharityProvider>


            <div>
                <SigunUpProvider>
                    <DakhelProvider>


                        <LoginModalProvider>
                            <ForgetModalProvider>
                                <SearchProvider>


                                    <Routes>
                                        <Route path="/" element={ <LandingPage/> }/>
                                        <Route path="/page/:id" element={ <PostPage/> }/>
                                        <Route path="/profile" element={ <ProfilePage/> }/>
                                        <Route path="/Posts" element={ <PostsPage/> }/>
                                        <Route path="/activation/*" element={ <EmailConfigurationPage/> }/>
                                        <Route path="/reset_password/*" element={ <ChangePasswordPage/> }/>
                                        <Route path="/*" element={ <NotFoundPage/> }/>
                                    </Routes>
                                </SearchProvider>
                            </ForgetModalProvider>
                        </LoginModalProvider>
                    </DakhelProvider>
                </SigunUpProvider>
            </div>
        </CharityProvider>
    );
}

export default App;
