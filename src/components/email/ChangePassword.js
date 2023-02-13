import React , { useEffect , useState } from 'react';
import styles from "./ChangePassword.module.css"
import { Link , useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { validate } from "../../helper/validate";
import { notify } from "../../helper/toast";

const ChangePassword = () => {
    const navigate = useNavigate ();
    const [ data , setData ] = useState ( {
        password : "" ,
        confirmPassword : ""
    } )
    const [ touch , setTouch ] = useState ( {} )
    const [ errors , setErrors ] = useState ( {} )
    useEffect ( () => {

    } , [ data , touch ] )
    const submitHandler = ( event ) => {
        event.preventDefault ();

    }
    const focusHandler = ( event ) => {

        setTouch ( { ... touch , [ event.target.name ] : true } )

    }
    const changeHandler = ( event ) => {
        setData ( { ... data , [ event.target.name ] : event.target.value } )

    }
    return (
        <div className={ styles.container }>
            <form onSubmit={ submitHandler } className={ styles.formContainer }>
                <h2 className={ styles.header }>تغییر رمزعبور</h2>
                <div className={ styles.formField }>

                    <input type="password" name="password"
                           className={ ( errors.password && touch.password ) ? styles.uncompleted : styles.formInput }
                           onFocus={ focusHandler }
                           onChange={ changeHandler } value={ data.password } placeholder="رمزعبور جدید"/>

                </div>
                <div className={ styles.formField }>
                    <input type="password" name="password"
                           className={ ( errors.password && touch.password ) ? styles.uncompleted : styles.formInput }
                           onFocus={ focusHandler }
                           onChange={ changeHandler } value={ data.password } placeholder="تکرار رمزعبور"/>
                </div>
                <div className={ styles.formButtons }>
                    <button type="submit">ویرایش</button>


                </div>
            </form>
            <ToastContainer/>
        </div>
    );
};

export default ChangePassword;