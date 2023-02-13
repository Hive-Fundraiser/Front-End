import React , { useEffect , useState } from 'react';
import { Link } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import styles from "./SignUp.module.css"
import { notify } from "../../helper/toast";
import { ToastContainer } from 'react-toastify';
import { validate } from "../../helper/validate";
import axios from "axios";


const SignUp = () => {
    const [ data , setData ] = useState ( {
        name : "" ,
        email : "" ,
        password : ""
    } )
    const [ touch , setTouch ] = useState ( {} )
    const [ errors , setErrors ] = useState ( {} )
    useEffect ( () => {

    } , [ data , touch ] )
    const submitHandler = async ( event ) => {
        event.preventDefault ();
        await axios.post ( "https://hive.iran.liara.run/auth/users/" , data )
            .then ( function ( response ) {
                console.log ( response )
            } )
            .catch ( function ( error ) {
                console.log ( error )
            } )
    }
    const focusHandler = ( event ) => {

        setTouch ( { [ event.target.name ] : true } )

    }
    const changeHandler = ( event ) => {
        setData ( { ... data , [ event.target.name ] : event.target.value } )

    }
    return (
        <div className={ styles.container }>
            <form onSubmit={ submitHandler } className={ styles.formContainer }>
                <h2 className={ styles.header }>ثبت نام</h2>
                <div className={ styles.formField }>

                    <input type="text" name="name"
                           className={ ( errors.name && touch.name ) ? styles.uncompleted : styles.formInput }
                           onFocus={ focusHandler }
                           onChange={ changeHandler } value={ data.name } placeholder="نام کاربری"/>
                    { errors.name && touch.name && <span>{ errors.name }</span> }

                </div>
                <div className={ styles.formField }>
                    <input type="text" name="email"
                           className={ ( errors.email && touch.email ) ? styles.uncompleted : styles.formInput }
                           onFocus={ focusHandler }
                           onChange={ changeHandler } value={ data.email } placeholder="ایمیل"/>
                    { errors.email && touch.email && <span>{ errors.email }</span> }

                </div>
                <div className={ styles.formField }>
                    <input type="password" name="password"
                           className={ ( errors.password && touch.password ) ? styles.uncompleted : styles.formInput }
                           onFocus={ focusHandler }
                           onChange={ changeHandler } value={ data.password } placeholder="رمز عبور"/>
                    { errors.password && touch.password && <span>{ errors.password }</span> }

                </div>
                <div className={ styles.formButtons }>
                    <button type="submit">ثبت نام</button>
                    <div className={ styles.listContainer }>
                        <Link to="/Login" className={ styles.lists }>
                            <span>حساب کاربری دارید؟ وارد شوید.</span>
                        </Link>
                    </div>

                </div>

            </form>
            <ToastContainer/>

        </div>
    );
}


export default SignUp;
