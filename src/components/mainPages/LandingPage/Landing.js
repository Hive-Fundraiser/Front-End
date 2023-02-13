import React , { useContext , useEffect } from "react";
import Footer from "../../shared/Footer";
import Navbar from "./../../shared/Navbar";
import Header from "./Header";
import SelectedPosts from "./SelectedPosts";
import Steps from "./Steps";
import Trust from './Trust';
import { CharityContext } from "../../../context/CharityProvider";
import { DakhelContext } from "../../../context/DakhelContext";
import { notify } from "../../../helper/toast";
import { ToastContainer } from "react-toastify";

const Landing = () => {
    const charity = useContext ( CharityContext );
    const { isIn , setIsIn } = useContext ( DakhelContext );
    useEffect ( () => {

    }  )
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