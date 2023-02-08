import React from 'react';

import { Route , Routes } from "react-router-dom";
import LogIn from "./components/LogIn";
import SignUp from "./components/SignUp";
import Navbar from "./components/shared/Navbar";
import Landing from "./components/mainPages/LandingPage/Landing";
import PostsPage from "./components/mainPages/PostsPage/PostsPage";
import ProfilePage from './components/mainPages/ProfilePage/ProfilePage';

function App () {
    return (
        <div>

            <Routes>
                <Route path="/" element={ <Landing/> }/>
                <Route path="/profile" element={ <ProfilePage/> }/>
                <Route path="/Signup" element={ <SignUp/> }/>
                <Route path="/Login" element={ <LogIn/> }/>
                <Route path="/Posts" element={ <PostsPage/> }/>
            </Routes>


        </div>
    );
}

export default App;
