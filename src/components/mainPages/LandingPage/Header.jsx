import styles from "./Header.module.css";
import Hands from "./../../../images/LandingPage/hands.svg";
import { Link } from "react-router-dom";
import SignUp from "../../modal/SignUp";
import React , { Fragment , useState } from "react";

const BUTTON_WRAPPER_STYLES = {
    position : "relative" ,
    zIndex : 1 ,
};

const Header = () => {
    const [ isOpen , setIsOpen ] = useState ( false );
    let welcomeText = (
        <p>
            { " " }
            دستی که کمک می کند،
            <br/> از دستانی که برای دعا بالا می روند
            <br/> مقدس تر است
        </p>
    );
    let start = "شروع کنید";
    return (
<>


        <div className={ styles.header_parent } >
            <div className={ styles.right }>
                <div className={ styles.start_parent } style={ BUTTON_WRAPPER_STYLES }>
                    { welcomeText }

                    <button className={ styles.buttonHeader } onClick={ () => setIsOpen ( true ) }>{ start }</button>
                    <SignUp open={ isOpen } closeModal={ () => setIsOpen ( false ) }></SignUp>

                </div>
            </div>
            <div className={ styles.left }>
                <img src={ Hands } alt="charity symbol"/>
            </div>
        </div>
</>
    );
};

export default Header;
