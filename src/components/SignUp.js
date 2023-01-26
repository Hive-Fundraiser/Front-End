import React , { useEffect , useState } from 'react';
import { Link } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import styles from "./SignUp.module.css"
import { notify } from "../helper/toast";
import { ToastContainer } from 'react-toastify';
import { validate } from "../helper/validate";


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
    const submitHandler = ( event ) => {
        event.preventDefault ();
        if ( ! Object.keys ( event ).length ) {
            notify ( "you signed up successfully" , "success" )
        } else {
            notify ( "invalid data!" , "error" )
            setTouch ( {
                name : true ,
                email : true ,
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
                <h2 className={ styles.header }>Sign Up</h2>
                <div className={ styles.formField }>

                    <input type="text" name="name" className={ styles.formInput } onFocus={ focusHandler }
                           onChange={ changeHandler } value={ data.name } placeholder="name"/>
                    { errors.name && touch.name && <span>{ errors.name }</span> }

                </div>
                <div className={ styles.formField }>
                    <input type="text" name="email" className={ styles.formInput } onFocus={ focusHandler }
                           onChange={ changeHandler } value={ data.email } placeholder="email"/>
                    { errors.email && touch.email && <span>{ errors.email }</span> }

                </div>
                <div className={ styles.formField }>
                    <input type="password" name="password" className={ styles.formInput } onFocus={ focusHandler }
                           onChange={ changeHandler } value={ data.password } placeholder="password"/>
                    { errors.password && touch.password && <span>{ errors.password }</span> }

                </div>
                <div className={ styles.formButtons }>
                    <Link to="/">
                        <button type="submit">Sign Up</button>
                    </Link>

                    <div className={ styles.listContainer }>

                    </div>
                    <Link to="/Login" className={ styles.lists }>
                        <span>Do you have an account? Log In</span>
                    </Link>
                </div>

            </form>
            <ToastContainer/>

        </div>
    );
}


export default SignUp;
