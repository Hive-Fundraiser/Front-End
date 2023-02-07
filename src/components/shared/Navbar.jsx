import React , { useState } from "react";
import { Link } from "react-router-dom";

import styles from "./Navbar.module.css";
import Search from "./../../images/Navbar/search.svg";
import Logo from "./../../images/Navbar/logo.svg";
import SignUp from "../modal/SignUp";
import Login from "../modal/Login/Login";

const BUTTON_WRAPPER_STYLES = {
    position : "relative" ,
    zIndex : 1
}
const BUTTON_WRAPPER_LOGIN_STYLES = {
    position : "relative" ,
    zIndex : 1
}

const Navbar = () => {
    const [ isOpen , setIsOpen ] = useState ( false )
    const [ isOpenLogin , setIsOpenLogin ] = useState ( false )
    return (
        <header className={ styles.header }>
            <div className={ styles.mainContainer }>
                <div className={ styles.right }>
                    {/*<Link to="/cart"><button>search</button> </Link>*/ }
                    <div style={ BUTTON_WRAPPER_STYLES } className={ styles.lists }>
                        <button className={ styles.p2 } onClick={ () => setIsOpen ( true ) }>ثبت نام</button>
                        <SignUp open={ isOpen } closeModal={()=>setIsOpen(false)}>

                        </SignUp>
                    </div>

                    <div style={ BUTTON_WRAPPER_LOGIN_STYLES } className={ styles.lists }>
                        <button className={ styles.p1 } onClick={ () => setIsOpenLogin ( true ) }>ورود</button>
                        <Login open={ isOpenLogin }>

                        </Login>
                    </div>

                    <Link to="/Posts" className={ styles.lists }>
                        <img src={ Search } alt="search icon"/>
                    </Link>
                </div>
                <div className={ styles.left }>
                    <span className={ styles.brand_title }>Hive</span>
                    <img className={ styles.brand_logo } src={ Logo } alt="brand logo"/>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
