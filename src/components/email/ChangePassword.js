import React , { useEffect , useState } from 'react';
import styles from "./ChangePassword.module.css"
import { Link , useLocation , useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { validate } from "../../helper/validate";
import { notify } from "../../helper/toast";
import axios from "axios";
import 'react-toastify/dist/ReactToastify.css';

const ChangePassword = () => {
    const location = useLocation ();
    const navigate = useNavigate ();
    const { pathname } = location;
    const segments = pathname.split ( '/' );
    const firstSegment = segments[ 2 ];
    const secondSegment = segments[ 3 ];
    const [ data , setData ] = useState ( {
        uid : segments[ 2 ] ,
        token : segments[ 3 ] ,
        new_password : "" ,
        re_new_password : ''
    } )
    const [ touch , setTouch ] = useState ( {} )
    const [ errors , setErrors ] = useState ( {} )
    useEffect ( () => {

    } , [] )
    const submitHandler = ( event ) => {
        event.preventDefault ();
        axios.post ( "https://hive.iran.liara.run/auth/users/reset_password_confirm/" , data )
            .then ( response => {
                notify ( "رمز عبور با موفقیت عوض گردید" , "success" )
                setTimeout ( () => {
                    navigate ( "/" );
                } , 3000 );

            } )
            .catch ( error => {
                console.log ( error.response.data )
                setErrors ( error.response.data )
                if ( error.response.data.non_field_errors ) {
                    notify ( "رمز عبور ها با هم تطابق ندارند" , "error" )
                }
            } )

    }
    const focusHandler = ( event ) => {

        setTouch ( { ... touch , [ event.target.name ] : true } )

    }
    const changeHandler = ( event ) => {
        setData ( { ... data , [ event.target.name ] : event.target.value } )

    }
    // const mapErrorHandler = errors.map ( ( error , index ) => {
    //     return <span key={ index } className={ styles.errorSpan }>{ error.password }</span>
    // } )
    // const mapErrorHandler2 = errors.map ( ( error , index ) => {
    //     return <span key={ index } className={ styles.errorSpan }>{ error.confirmPassword }</span>
    // } )
    const error_margin = (error) => {
        console.log('in error margin function: ', error)
        if (error === undefined ) {
            return {marginBottom: 'calc(0.8vw + 0.1rem)'}
        }
        return null
    }
    return (
        <div className={ styles.container }>
            <form onSubmit={ submitHandler } className={ styles.formContainer }>
                <h2 className={ styles.header }>تغییر رمزعبور</h2>
                <div className={ styles.formField }>

                    <input type="password" name="new_password"
                           className={  styles.formInput }
                           style={error_margin(errors.new_password)}
                           onFocus={ focusHandler }
                           onChange={ changeHandler } value={ data.new_password } placeholder="رمزعبور جدید"/>
                    { errors.new_password && <span className={ styles.errorSpan }>{ errors.new_password }</span> }
                </div>
                <div className={ styles.formField }>
                    <input type="password" name="re_new_password"
                           className={  styles.formInput }
                           style={error_margin(errors.re_new_password)}
                           onFocus={ focusHandler }
                           onChange={ changeHandler } value={ data.re_new_password } placeholder="تکرار رمزعبور"/>
                    { errors.re_new_password && <span className={ styles.errorSpan }>{ errors.re_new_password }</span> }
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