import React from 'react';

import { Route , Routes } from "react-router-dom";
import LogIn from "./components/LogIn";
import SignUp from "./components/SignUp";
import Landing from "./components/mainPages/LandingPage/Landing";
import PostsPage from './components/mainPages/PostsPage/PostsPage';

function App () {
    return (
        <div>

            <Routes>
                <Route path="/" element={ <Landing/> }/>
                <Route path="/Signup" element={ <SignUp/> }/>
                <Route path="/Login" element={ <LogIn/> }/>
                <Route path="/Post" element={ <PostsPage/> }/>
            </Routes>


        </div>
    );
}

export default App;
