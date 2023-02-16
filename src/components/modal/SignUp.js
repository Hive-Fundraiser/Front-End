import React , { useContext , useEffect , useState } from 'react';
import { createPortal } from 'react-dom';
import styles from "../../components/modal/SignUp.module.css";
import axios from "axios";
import Login from "./Login/Login";
import cancel from "../../images/modal/close.svg"
import { LoginModalContext } from "../../context/LoginContext";
import { SignUpContext } from "../../context/SignUpContext";
import { DakhelContext } from "../../context/DakhelContext";
import { ForgetModalContext } from "../../context/forgetPassContext";


const SignUp = ( { open,closeModal  } ) => {
    // CONTEXTS
    const { setIsOpen } = useContext ( SignUpContext );
    const { isOpenLogin , setIsOpenLogin } = useContext ( LoginModalContext )
    const { setIsIn } = useContext ( DakhelContext );
    const { setIsPassOpen } = useContext ( ForgetModalContext )
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


                setIsOpen ( false )
                setIsIn ( true )
                setData ( {
                    username : "" ,
                    email : "" ,
                    password : ""
                } )
                setErrors ( {} )
            } )
            .catch ( error => {
                console.log ( 'the errorrr:' , error )
                setErrors ( error.response.data )
            } )


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
        setErrors ( {} )
        setIsOpen ( false )
        setIsOpenLogin ( false )
        setIsPassOpen ( false )
        closeModal(false)

    }
    const cancelImageHandler = () => {
        setIsOpen ( false )
        setIsOpenLogin ( false )
        setIsPassOpen ( false )
        setData ( {
            username : "" ,
            email : "" ,
            password : ""
        } )
        setErrors ( {} )
        closeModal(false)
    }
    const error_margin = ( error ) => {
        console.log ( 'in error margin function: ' , error )
        if ( error === undefined ) {
            return { marginBottom : 'calc(0.8vw + 0.1rem)' }
        }
        return null
    }
    if ( ! open ) {
        return null
    }
    return createPortal (
        <>


            <div
                onClick={ overlayHandler }
                className={ isOpenLogin ? styles.OVERLAY_STYLE_LOGIN_CLICKED : styles.OVERLAY_STYLES }/>
            <div className={ isOpenLogin ? styles.MODAL_STYLES_HIDDEN : styles.MODAL_STYLES }>
                <form onSubmit={ submitHandler } className={ styles.formContainer }>

                    <img className={ styles.closeButton } src={ cancel }
                         onClick={ cancelImageHandler } alt="cancel"/>

                    <h2 className={ styles.header }>ثبت نام</h2>
                    <div className={ styles.formField }>

                        <input type="text" name="username"
                               className={ styles.formInput }
                               style={ error_margin ( errors.username ) }
                               onFocus={ focusHandler }
                               onChange={ changeHandler } value={ data.username } placeholder="نام کاربری"/>
                        { errors.username && <span>{ errors.username }</span> }

                    </div>
                    <div className={ styles.formField } style={ error_margin ( errors.email ) }>
                        <input type="email" name="email"
                               className={ styles.formInput }
                               onFocus={ focusHandler }
                               onChange={ changeHandler } value={ data.email } placeholder="ایمیل"/>
                        { errors.email && <span>{ errors.email }</span> }

                    </div>

                    <div className={ styles.formField }>
                        <input type="password" name="password"
                               className={ styles.formInput }
                               style={ error_margin ( errors.password ) }
                               onFocus={ focusHandler }
                               onChange={ changeHandler } value={ data.password } placeholder="رمز عبور"/>
                        { errors.password && <span>{ errors.password }</span> }

                    </div>
                    <div className={ styles.formButtons }>
                        <button type="submit">ثبت نام</button>
                        <div className={ styles.listContainer }>



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