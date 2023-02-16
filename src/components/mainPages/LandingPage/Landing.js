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
import { SignUpContext } from "../../../context/SignUpContext";

const Landing = () => {
    const charity = useContext ( CharityContext );
    const { isIn , setIsIn } = useContext ( DakhelContext );
    const { isOpen , setIsOpen } = useContext ( SignUpContext );
    useEffect ( () => {

    }  )
    return (
        <div onClick={()=>setIsOpen(false)}>
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