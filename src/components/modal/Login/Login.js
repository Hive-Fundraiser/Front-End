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

const Login = ( { open , closeModal , closeLoginModel } ) => {
    const navigate = useNavigate ();
    const [ isPassOpen , setIsPassOpen ] = useState ( false )
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
        if ( isPassOpen ) {
            setIsPassOpen ( false )
        } else {
            closeModal ( false )
            closeLoginModel ( false )

        }
    }
    const forgetPasswordClickHandler = () => {
        setIsPassOpen ( true );
    }
    if ( ! open ) {
        return null
    }
    return createPortal (
        <>
            <div style={ OVERLAY_STYLES }/>
            <div style={ MODAL_STYLES }>
                <form onSubmit={ submitHandler } className={ styles.formContainer }>
                    <img className={ styles.closeButton } src={ cancel }
                         onClick={ closeHandler }
                         alt="che khabar?"/>
                    { isPassOpen ? <h2 className={ styles.header }>فراموشی رمزعبور</h2> :
                        <h2 className={ styles.header }>ورود</h2> }
                    <div className={ styles.formField }>
                        <p className={ isPassOpen ? styles.ParEmail : styles.formFieldOpenForget }>ایمیل خود را وارد
                            کنید</p>
                        <input type="text" name="email"
                               className={ ( errors.email && touch.email ) ? styles.uncompleted : styles.formInput }
                               onFocus={ focusHandler }
                               onChange={ changeHandler } value={ data.email } placeholder="ایمیل"/>

                    </div>
                    <div className={ isPassOpen ? styles.formFieldOpenForget : styles.formField }>
                        <input type="password" name="password"
                               className={ ( errors.password && touch.password ) ? styles.uncompleted : styles.formInput }
                               onFocus={ focusHandler }
                               onChange={ changeHandler } value={ data.password } placeholder="رمز عبور"/>
                    </div>
                    <div className={ styles.formButtons }>
                        <button type="submit">{ isPassOpen ? forgetPass : login }</button>

                        <div className={ isPassOpen ? styles.formFieldOpenForget : styles.listContainer }>

                            <span onClick={ forgetPasswordClickHandler } className={ styles.loginP }>رمز عبور خود را فراموش کرده ام.</span>

                        </div>

                    </div>
                </form>


            </div>
        </> ,
        document.getElementById ( "portal" )
    );
};

export default Login;