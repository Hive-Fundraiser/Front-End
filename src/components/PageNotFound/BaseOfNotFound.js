import React from 'react';
import Navbar from "../shared/Navbar";
import NotFoundPage from "./NotFoundPage";
import Footer from "../shared/Footer";
const BaseOfNotFound = () => {
    return (
        <div>
            <Navbar/>
            <NotFoundPage/>
            <Footer/>
        </div>
    );
};

export default BaseOfNotFound;