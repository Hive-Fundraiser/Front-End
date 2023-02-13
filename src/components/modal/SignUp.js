import React , { useContext , useEffect , useState } from 'react';
import ReactDOM from "react-dom/client";
import { createPortal } from 'react-dom';
import styles from "../../components/modal/SignUp.module.css";
import { Link } from "react-router-dom";
import { validate } from "../../helper/validate";
import { notify } from "../../helper/toast";
import axios from "axios";
import { ToastContainer } from "react-toastify";
import Login from "./Login/Login";
import cancel from "../../images/close.svg"
import { DataContext } from "../../helper/test";
import { DataProvider } from "../../helper/test";
import { SignUpContext } from "../../context/SignUpContext";

import { DakhelContext } from "../../context/DakhelContext";
import { Data2Context } from "../../context/forgetPassContext";

const MODAL_STYLES = {
    position : "fixed" ,
    top : "50%" ,
    left : "50%" ,
    bottom : "50%" ,
    transform : "translate(-50%, 50%)" ,
    backgroundColor : "#FFF" ,
    zIndex : 10000 ,
    display : "flex" ,
    alignItems : "center" ,
    justifyContent : "center" ,

}
const MODAL_STYLES_HIDDEN = {
    display : "none"
}
const OVERLAY_STYLES = {
    position : "fixed" ,
    top : 0 ,
    left : 0 ,
    right : 0 ,
    bottom : 0 ,
    backgroundColor : "rgba(0,0,0,.7)" ,
    zIndex : 10000
}
const OVERLAY_STYLE_LOGIN_CLICKED = {
    position : "fixed" ,
    top : 0 ,
    left : 0 ,
    right : 0 ,
    bottom : 0 ,
    backgroundColor : "transparent" ,
    zIndex : 10000
}
const BUTTON_WRAPPER_LOGIN_STYLES = {
    position : "relative" ,
    zIndex : 1
}
const SignUp = ( { open , closeModal } ) => {
    const { isOpen , setIsOpen } = useContext ( SignUpContext );
    const { isOpenLogin , setIsOpenLogin } = useContext ( DataContext )
    const { isIn , setIsIn } = useContext ( DakhelContext );
    const { isPassOpen , setIsPassOpen } = useContext ( Data2Context )
    // MAIN DATA
    const [ data , setData ] = useState ( {
        username : "" ,
        email : "" ,
        password : ""
    } )
    const [ touch , setTouch ] = useState ( {} )
    const [ errors , setErrors ] = useState ( {} )
    useEffect ( () => {
        console.log ( data )
    } , [ data , touch ] )
    const submitHandler = async ( event ) => {
        event.preventDefault ();
        console.log ( data )
        await axios.post ( "https://hive.iran.liara.run/auth/users/" , data )
            .then ( response => {
                console.log ( response )
                console.log ( response.status )
                localStorage.setItem ( "username" , response.data.username )
                localStorage.setItem ( "id" , response.data.id )
                setIsOpen ( false )
                setIsIn ( true )
                setData ( {
                    username : "" ,
                    email : "" ,
                    password : ""
                } )
                setErrors({})
            } )
            .catch ( error => setErrors ( error.response.data ) )


    }
    const focusHandler = ( event ) => {

        setTouch ( { [ event.target.name ] : true } )

    }
    const changeHandler = ( event ) => {
        setData ( { ... data , [ event.target.name ] : event.target.value } )

    }
    const loginClickHandler = () => {
        setIsOpenLogin ( true );
    }
    const overlayHandler = () => {
        setData ( {
            username : "" ,
            email : "" ,
            password : ""
        } )
        setErrors({})
        setIsOpen(false)
        setIsOpenLogin(false)
        setIsPassOpen(false)

    }
   const cancelImageHandler = ()=>{
        setIsOpen(false)
       setIsOpenLogin(false)
       setIsPassOpen(false)
       setData ( {
           username : "" ,
           email : "" ,
           password : ""
       } )
       setErrors({})
    }
    if ( ! open ) {
        return null
    }
    return createPortal (
        <>


            <div style={ isOpenLogin ? OVERLAY_STYLE_LOGIN_CLICKED : OVERLAY_STYLES }
                 onClick={ overlayHandler }/>
            <div style={ isOpenLogin ? MODAL_STYLES_HIDDEN : MODAL_STYLES }>
                <form onSubmit={ submitHandler } className={ styles.formContainer }>

                    <img className={ styles.closeButton } src={ cancel }
                         onClick={ cancelImageHandler } alt="cancel"/>

                    <h2 className={ styles.header }>ثبت نام</h2>
                    <div className={ styles.formField }>

                        <input type="text" name="username"
                               className={ ( errors.username && touch.username ) ? styles.uncompleted : styles.formInput }
                               onFocus={ focusHandler }
                               onChange={ changeHandler } value={ data.username } placeholder="نام کاربری"/>
                        { errors.username && <span>{ errors.username }</span> }

                    </div>
                    <div className={ styles.formField }>
                        <input type="email" name="email"
                               className={ ( errors.email && touch.email ) ? styles.uncompleted : styles.formInput }
                               onFocus={ focusHandler }
                               onChange={ changeHandler } value={ data.email } placeholder="ایمیل"/>
                        { errors.email && <span>{ errors.email }</span> }

                    </div>

                    <div className={ styles.formField }>
                        <input type="password" name="password"
                               className={ ( errors.password && touch.password ) ? styles.uncompleted : styles.formInput }
                               onFocus={ focusHandler }
                               onChange={ changeHandler } value={ data.password } placeholder="رمز عبور"/>
                        { errors.password && <span>{ errors.password }</span> }

                    </div>
                    <div className={ styles.formButtons }>
                        <button type="submit">ثبت نام</button>
                        <div className={ styles.listContainer } style={ BUTTON_WRAPPER_LOGIN_STYLES }>



                            <span
                                onClick={ loginClickHandler }
                                className={ styles.loginP }>حساب کاربری دارید؟ وارد شوید.</span>

                            <Login open={ isOpenLogin } closeLoginModel={ () => setIsOpenLogin ( false ) }>

                            </Login>

                        </div>

                    </div>

                </form>

            </div>

        </> ,
        document.getElementById ( "portal" )
    );
}

export default SignUp;