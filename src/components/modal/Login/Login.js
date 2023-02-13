import React , { useContext , useEffect , useState } from 'react';
import { Link , useNavigate } from "react-router-dom";
import { validate } from "../../../helper/validate";
import { notify } from "../../../helper/toast";
import { createPortal } from 'react-dom';
import styles from "../Login/Login.module.css";
import { ToastContainer } from "react-toastify";
import cancel from "../../../images/close.svg";
import Email from "../emailGet/Email";
import { DataContext } from "../../../helper/test";
import { Data2Context } from "../../../context/forgetPassContext"
import axios from "axios";
import 'react-toastify/dist/ReactToastify.css';
import { SignUpContext } from "../../../context/SignUpContext";

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
const OVERLAY_STYLES = {
    position : "fixed" ,
    top : 0 ,
    left : 0 ,
    right : 0 ,
    bottom : 0 ,
    backgroundColor : "rgba(0,0,0,.2)" ,
    zIndex : 10000
}
const OVERLAY_FORGET_PASSWORD_CLICKED = {
    position : "fixed" ,
    top : 0 ,
    left : 0 ,
    right : 0 ,
    bottom : 0 ,
    backgroundColor : "rgba(0,0,0,.3)" ,
    zIndex : 89
}
const BUTTON_WRAPPER_FORGET_PASSWORD_STYLES = {
    position : "relative" ,
    zIndex : 1
}
const MODAL_STYLES_HIDDEN = {
    display : "none"
}

const Login = ( { open , closeModal , closeLoginModel } ) => {
    const navigate = useNavigate ();
    const { isPassOpen , setIsPassOpen } = useContext ( Data2Context )
    const { isOpenLogin , setIsOpenLogin } = useContext ( DataContext )
    const { isOpen , setIsOpen } = useContext ( SignUpContext );
    let login = "ورود"

    const [ data , setData ] = useState ( {
        email : "" ,
        password : ""
    } )
    const [ touch , setTouch ] = useState ( {} )
    const [ errors , setErrors ] = useState ( {} )
    useEffect ( () => {

    } , [ data , touch ] )
    const submitHandler = async ( event ) => {
        event.preventDefault ();
        await axios.post ( "https://hive.iran.liara.run/auth/jwt/create/" , data )
            .then ( response => {
                localStorage.setItem ( "token" , response.data.access )
                setData ( {
                    email : "" ,
                    password : ""
                } )
                notify("ورود موفقیت آمیز بود" , "success")
                setErrors ( {} )
                setIsOpen ( false )
                setIsPassOpen ( false )
                setIsOpenLogin ( false )
                window.location.reload();
            } )

            .catch ( error => {
                setErrors ( error.response.data )
                notify ( "ایمیل یا رمزعبور غلط میباشد" , "error" )
            } )

    }
    const focusHandler = ( event ) => {
        setTouch ( { ... touch , [ event.target.name ] : true } )

    }
    const changeHandler = ( event ) => {
        setData ( { ... data , [ event.target.name ] : event.target.value } )
        console.log ( data.name )
    }
    const closeHandler = () => {
        setData ( {
            email : "" ,
            password : ""
        } )
        setErrors ( {} )
        setIsOpen ( false )
        setIsPassOpen ( false )
        setIsOpenLogin ( false )


    }
    const forgetPasswordClickHandler = () => {
        setIsPassOpen ( true );
    }
    const cancelImageHandler = () => {
        setIsOpen ( false )
        setIsOpenLogin ( false )
        setIsPassOpen ( false )
        setData ( {
            email : "" ,
            password : ""
        } )
        setErrors ( {} )
    }
    if ( ! open ) {
        return null
    }
    return createPortal (
        <>
            <div style={ isPassOpen ? OVERLAY_FORGET_PASSWORD_CLICKED : OVERLAY_STYLES } onClick={ closeHandler }/>
            <div style={ isPassOpen ? MODAL_STYLES_HIDDEN : MODAL_STYLES }>
                <form onSubmit={ submitHandler } className={ styles.formContainer }>
                    <img className={ styles.closeButton } src={ cancel }
                         onClick={ cancelImageHandler }
                         alt="cancel"/>
                    <h2 className={ styles.header }>ورود</h2>
                    <div className={ styles.formField }>

                        <input type="text" name="email"
                               className={ ( errors.email && touch.email ) ? styles.uncompleted : styles.formInput }
                               onFocus={ focusHandler }
                               onChange={ changeHandler } value={ data.email } placeholder="ایمیل"/>

                    </div>
                    <div className={ styles.formField }>
                        <input type="password" name="password"
                               className={ ( errors.password && touch.password ) ? styles.uncompleted : styles.formInput }
                               onFocus={ focusHandler }
                               onChange={ changeHandler } value={ data.password } placeholder="رمز عبور"/>
                    </div>
                    <div className={ styles.formButtons }>
                        <button type="submit">{ login }</button>

                        <div className={ styles.listContainer }>

                            <span onClick={ forgetPasswordClickHandler } className={ styles.loginP }
                                  style={ BUTTON_WRAPPER_FORGET_PASSWORD_STYLES }>رمز عبور خود را فراموش کرده ام.</span>
                            <Email open={ isPassOpen } closePassModal={ () => setIsPassOpen ( false ) }>

                            </Email>
                        </div>

                    </div>
                </form>


            </div>

        </> ,
        document.getElementById ( "portal" )
    );
};

export default Login;