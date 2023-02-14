import React from 'react';

import { Route , Routes } from "react-router-dom";
import Landing from "./components/mainPages/LandingPage/Landing";
import PostsPage from "./components/mainPages/PostsPage/PostsPage";
import ProfilePage from './components/mainPages/ProfilePage/ProfilePage';
import Base from "./components/mainPages/PostPage/Base";
import { DataProvider } from "./helper/test";
import { Data2Provider } from "./context/forgetPassContext";
import BaseOfNotFound from "./components/PageNotFound/BaseOfNotFound";
import CharityProvider from "./context/CharityProvider"
import { SigunUpProvider } from "./context/SignUpContext"
import { DakhelProvider } from "./context/DakhelContext";
import MyFundraise from "./components/mainPages/Fundraise/MyFundraise";
import NewFundraise from "./components/mainPages/Fundraise/NewFundraise";
import EmailConfiguration from "./components/email/EmailConfiguration"
import ChangePassword from "./components/email/ChangePassword";
import { SearchProvider } from "./context/SearchContext";

function App () {
    return (
        <CharityProvider>


            <div>
                <SigunUpProvider>
                    <DakhelProvider>


                        <DataProvider>
                            <Data2Provider>
                                <SearchProvider>


                                    <Routes>
                                        <Route path="/" element={ <Landing/> }/>
                                        <Route path="/page/:id" element={ <Base/> }/>
                                        <Route path="/Myfundraise" element={ <MyFundraise/> }/>
                                        <Route path="/profile" element={ <ProfilePage/> }/>
                                        <Route path="NewFundraise" element={ <NewFundraise/> }/>
                                        <Route path="/Posts" element={ <PostsPage/> }/>
                                        <Route path="/activation/*" element={ <EmailConfiguration/> }/>
                                        <Route path="/reset_password/*" element={ <ChangePassword/> }/>
                                        <Route path="/*" element={ <BaseOfNotFound/> }/>
                                    </Routes>
                                </SearchProvider>
                            </Data2Provider>
                        </DataProvider>
                    </DakhelProvider>
                </SigunUpProvider>
            </div>
        </CharityProvider>
    );
}

export default App;
