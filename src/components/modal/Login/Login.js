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
    const [ inIn , isInIn ] = useState ( false )
    const [ data , setData ] = useState ( {
        email : "" ,
        password : ""
    } )
    const [ touch , setTouch ] = useState ( {} )
    const [ errors , setErrors ] = useState ( {} )
    const [ output , setOutPut ] = useState ( {
        first_name : "محمد" ,
        last_name : "nas" ,
        account_number : "62738" ,
        birth_date : "1999-03-24" ,
        identity_card_number : "0590403338"

    } )
    useEffect ( () => {
        if ( inIn ) {

            setTimeout ( () => {
                window.location.reload ();
                isInIn ( true )

            } , 3000 );
        }
    } , [ inIn ] )
    const submitHandler = async ( event ) => {
        event.preventDefault ();
        await axios.post ( "https://hive.iran.liara.run/auth/jwt/create/" , data )
            .then ( async response => {
                await localStorage.setItem ( "token" , response.data.access )
                const token = localStorage.getItem ( "token" )

                // const authorizationHeader = `JWT ${ token }`
                // const headers = {
                //     'Authorization' : authorizationHeader ,
                //     'Content-Type' : 'application/json'
                // };
                // console.log ( token )
                // console.log ( authorizationHeader )
                // console.log ( data.email )
               // await axios ( {
               //      method : 'get' ,
               //      url : 'https://hive.iran.liara.run/auth/users/me' ,
               //      headers : {
               //          'Authorization' : 'JWT ' + token ,
               //          'Content-Type' : 'application/json'
               //      }
               //  } )
               //      .then ( function ( response ) {
               //          console.log ( response.data );
               //      } )
               //      .catch ( function ( error ) {
               //          console.log ( error );
               //      } )
                setData ( {
                    email : "" ,
                    password : ""
                } )
                notify ( "ورود موفقیت آمیز بود" , "success" )
                setErrors ( {} )
                setIsOpen ( false )
                setIsPassOpen ( false )
                setIsOpenLogin ( false )
                isInIn ( true )


            } )

            .catch ( error => {
                setErrors ( error.response.data )
                if ( isPassOpen === false ) {
                    notify ( "ایمیل یا رمزعبور غلط میباشد" , "error" )
                }

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
                               className={ styles.formInput }
                               onFocus={ focusHandler }
                               onChange={ changeHandler } value={ data.email } placeholder="ایمیل"/>

                    </div>
                    <div className={ styles.formField }>
                        <input type="password" name="password"
                               className={ styles.formInput }
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