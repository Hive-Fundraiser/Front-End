import React from 'react';

import {Route,Routes} from "react-router-dom";
import LogIn from "./components/LogIn";
import SignUp from "./components/SignUp";
import Navbar from "./components/shared/Navbar";


function App () {
    return (
        <div>

            <Routes>
                <Route path="/" element={<Navbar/>}/>
                <Route path="/Signup" element={<SignUp/>}/>
                <Route path="/Login" element={<LogIn/>}/>
            </Routes>



        </div>
    );
}

export default App;
