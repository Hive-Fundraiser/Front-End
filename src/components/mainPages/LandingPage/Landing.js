import React , { useContext , useEffect } from "react";
import Footer from "../../shared/Footer";
import Navbar from "./../../shared/Navbar";
import Header from "./Header";
import SelectedPosts from "./SelectedPosts";
import Steps from "./Steps";
import Trust from './Trust';
import { CharityContext } from "../../../context/CharityProvider";

const Landing = () => {
    const charity = useContext(CharityContext);
    useEffect(()=>{

    },[])
    return (
        <div>
            <Navbar/>
            <Header/>
            <Steps/>
            <Trust/>
            <SelectedPosts/>
            <Footer/>
        </div>
    )
}

export default Landing;