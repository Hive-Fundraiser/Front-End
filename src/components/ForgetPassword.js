import React , { useEffect , useState } from 'react';
import { Link , useNavigate } from 'react-router-dom';

import styles from "./ForgetPassword.module.css"
import { validate } from "../helper/validate";
import { notify } from "../helper/toast";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';


const ForgetPassword = () => {
    const navigate = useNavigate ();
    const [ data , setData ] = useState ( {
        name : "" ,
        password : ""
    } )
    const [ touch , setTouch ] = useState ( {} )
    const [ errors , setErrors ] = useState ( {} )
    useEffect ( () => {
        setErrors ( validate ( data , "signup" ) )
        console.log ( errors )
    } , [ data , touch ] )
    const submitHandler = ( event ) => {
        event.preventDefault ();
        if ( ! Object.keys ( errors ).length ) {
            notify ( "ایمیل ارسال شد." , "info" )
            setTimeout ( () => {
                navigate ( "/" );
            } , 2000 );

        } else {
            notify ( "ایمیل غلط میبایشد" , "error" )
            setTouch ( {
                email : true ,
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
    return (
        <div className={ styles.container }>
            <form onSubmit={ submitHandler } className={ styles.formContainer }>
                <h2 className={ styles.header }>فراموشی رمز عبور</h2>
                <div className={ styles.formField }>
                    <p>ایمیل خود را وارد کنید</p>
                    <input type="text" name="email"
                           className={ ( errors.email && touch.email ) ? styles.uncompleted : styles.formInput }
                           onFocus={ focusHandler }
                           onChange={ changeHandler } value={ data.email } placeholder="ایمیل"/>
                            { errors.email && touch.email && <span>{ errors.email }</span> }

                </div>
            </form>
            <ToastContainer/>
        </div>
    )
}

export default ForgetPassword;