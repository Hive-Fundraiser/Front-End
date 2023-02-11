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
    backgroundColor : "rgba(0,0,0,.7)" ,
    zIndex : 10000
}
const OVERLAY_FORGET_PASSWORD_CLICKED = {
    position : "fixed" ,
    top : 0 ,
    left : 0 ,
    right : 0 ,
    bottom : 0 ,
    backgroundColor : "transparent" ,
    zIndex : 10000
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
    let login = "ورود"
    let forgetPass = "ارسال کد"
    const [ data , setData ] = useState ( {
        name : "" ,
        password : ""
    } )
    const [ touch , setTouch ] = useState ( {} )
    const [ errors , setErrors ] = useState ( {} )
    useEffect ( () => {
        setErrors ( validate ( data , "login" ) )
        console.log ( errors )
    } , [ data , touch ] )
    const submitHandler = ( event ) => {
        event.preventDefault ();
        if ( ! Object.keys ( errors ).length ) {
            notify ( "ورود با موفقیت انجام شد!" , "success" )
            setTimeout ( () => {
                navigate ( "/" );
            } , 2000 );

        } else {
            notify ( "نام کاربری یا رمز عبور غلط میباشد." , "error" )
            setTouch ( {
                name : true ,
                password : true
            } )
        }
    }
    const focusHandler = ( event ) => {
        console.log ( event )
        setTouch ( { ... touch , [ event.target.name ] : true } )

    }
    const changeHandler = ( event ) => {
        setData ( { ... data , [ event.target.name ] : event.target.value } )
        console.log ( data.name )
    }
    const closeHandler = () => {

        closeModal ( false )
        closeLoginModel ( false )

    }
    const forgetPasswordClickHandler = () => {
        setIsPassOpen ( true );
    }
    if ( ! open ) {
        return null
    }
    return createPortal (
        <>
            <div style={ isPassOpen ? OVERLAY_FORGET_PASSWORD_CLICKED : OVERLAY_STYLES }/>
            <div style={ isPassOpen ? MODAL_STYLES_HIDDEN : MODAL_STYLES }>
                <form onSubmit={ submitHandler } className={ styles.formContainer }>
                    <img className={ styles.closeButton } src={ cancel }
                         onClick={ closeHandler }
                         alt="che khabar?"/>
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