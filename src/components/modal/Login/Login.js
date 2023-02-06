import React , { useEffect , useState } from 'react';
import { Link , useNavigate } from "react-router-dom";
import { validate } from "../../../helper/validate";
import { notify } from "../../../helper/toast";
import { createPortal } from 'react-dom';
import styles from "../../deleted/LogIn.module.css";
import { ToastContainer } from "react-toastify";


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
const Login = ( { open } ) => {
    const navigate = useNavigate ();
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
    if ( ! open ) {
        return null
    }
    return createPortal (
        <>
            <div style={ OVERLAY_STYLES }/>
            <div style={ MODAL_STYLES }>
                <form onSubmit={ submitHandler } className={ styles.formContainer }>
                    <h2 className={ styles.header }>ورود</h2>
                    <div className={ styles.formField }>

                        <input type="text" name="name"
                               className={ ( errors.name && touch.name ) ? styles.uncompleted : styles.formInput }
                               onFocus={ focusHandler }
                               onChange={ changeHandler } value={ data.name } placeholder="ایمیل"/>

                    </div>
                    <div className={ styles.formField }>
                        <input type="password" name="password"
                               className={ ( errors.password && touch.password ) ? styles.uncompleted : styles.formInput }
                               onFocus={ focusHandler }
                               onChange={ changeHandler } value={ data.password } placeholder="رمز عبور"/>
                    </div>
                    <div className={ styles.formButtons }>
                        <button type="submit">ورود</button>

                        <div className={ styles.listContainer }>
                            <Link to="/ForgetPassword" className={ styles.lists }>
                                <span>رمز عبور خود را فراموش کرده ام.</span>
                            </Link>
                        </div>

                    </div>
                </form>


            </div>
        </> ,
        document.getElementById ( "portal" )
    );
};

export default Login;