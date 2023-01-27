import React , { useEffect , useState } from 'react';
import { Link , useNavigate } from 'react-router-dom';

import styles from "./LogIn.module.css"
import { validate } from "../helper/validate";
import { notify } from "../helper/toast";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';



const LogIn = () => {
    const navigate = useNavigate ();
    const [ data , setData ] = useState ( {
        name : "" ,
        password : ""
    } )
    const [ touch , setTouch ] = useState ( {} )
    const [ errors , setErrors ] = useState ( {} )
    useEffect ( () => {
        setErrors ( validate ( data, "login"  ) )
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

    return (
        <div className={ styles.container }>
            <form onSubmit={ submitHandler } className={ styles.formContainer }>
                <h2 className={ styles.header }>ورود</h2>
                <div className={ styles.formField }>

                    <input type="text" name="name"
                           className={ ( errors.name && touch.name ) ? styles.uncompleted : styles.formInput }
                           onFocus={ focusHandler }
                           onChange={ changeHandler } value={ data.name } placeholder="نام کاربری/ایمیل"/>

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
                        <Link to="/ForgetPassword" className={ styles.lists } >
                            <span>رمز عبور خود را فراموش کرده ام.</span>
                        </Link>
                    </div>

                </div>
            </form>
            <ToastContainer/>
        </div>
    );
}


export default LogIn;
