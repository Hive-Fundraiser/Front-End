import React from 'react';

import { Route , Routes } from "react-router-dom";
import Landing from "./components/mainPages/LandingPage/Landing";
import PostsPage from "./components/mainPages/PostsPage/PostsPage";

function App () {
    return (
        <div>

            <Routes>
                <Route path="/" element={ <Landing/> }/>
                <Route path="/Posts" element={ <PostsPage/> }/>
            </Routes>


        </div>
    );
}

export default App;
