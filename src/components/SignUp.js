import React , { useEffect , useState } from 'react';
import { Link } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import styles from "./SignUp.module.css"
import { notify } from "../helper/toast";
import { ToastContainer } from 'react-toastify';
import { validate } from "../helper/validate";
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
        setErrors ( validate ( data ) )
        console.log ( errors )
    } , [ data , touch ] )
    const submitHandler = async ( event ) => {
        event.preventDefault ();
        if ( ! Object.keys ( errors ).length ) {
            notify ( "ثبت نام با موفقیت انجام شد" , "success" )
            const send = {
                name:data.name,
            email:data.email ,
            password:data.password
            }
            const response = await axios.post (
                'http://127.0.0.1:8000//auth/jwt/create',
                    send,
                { headers : { 'Content-Type' : 'application/json' } }
            )
            console.log ( response.data )
        } else {
            notify ( "ورودی ها معتبر نیست! کامل وارد کنید" , "error" )
            setTouch ( {
                name : true ,
                email : true ,
                password : true
            } )
        }
    }
    const focusHandler = ( event ) => {

        setTouch ( {  [ event.target.name ] : true } )

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
