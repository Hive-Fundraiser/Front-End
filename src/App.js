import React from 'react';

import { Route , Routes } from "react-router-dom";
import Landing from "./components/mainPages/LandingPage/Landing";
import PostsPage from "./components/mainPages/PostsPage/PostsPage";
import ProfilePage from './components/mainPages/ProfilePage/ProfilePage';
import Base from "./components/mainPages/PostPage/Base";
import { DataProvider } from "./helper/test";
function App () {
    return (
        <DataProvider>
        <div>

            <Routes>
                <Route path="/" element={ <Landing/> }/>
                <Route path="/page" element={ <Base/> }/>
                <Route path="/Posts" element={ <PostsPage/> }/>
            </Routes>


        </div>
        </DataProvider>
    );
}

export default App;
