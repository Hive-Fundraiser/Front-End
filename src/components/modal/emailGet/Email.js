import React , { useContext , useEffect , useState } from 'react';
import { createPortal } from 'react-dom';
import cancel from "../../../images/close.svg";
import { Link , useNavigate } from "react-router-dom";
import { validate } from "../../../helper/validate";
import { notify } from "../../../helper/toast";
import styles from "./Email.module.css";
import { Data2Context } from "../../../context/forgetPassContext";
import { DataContext } from "../../../helper/test";
import { SignUpContext } from "../../../context/SignUpContext";
import axios from "axios";

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
    zIndex : 89
}

const Email = ( open , closePassModal ) => {
    const navigate = useNavigate ();
    const { isPassOpen , setIsPassOpen } = useContext ( Data2Context )
    const { isOpenLogin , setIsOpenLogin } = useContext ( DataContext )
    const { isOpen , setIsOpen } = useContext ( SignUpContext );
    const [errorChecker,setErrorChecker] = useState(false)
    const [ data , setData ] = useState ( {
        email : "" ,

    } )
    const [ touch , setTouch ] = useState ( {} )
    const [ errors , setErrors ] = useState ( {} )
    useEffect ( () => {


    } , [ data , touch ] )
    const submitHandler = ( event ) => {
        event.preventDefault ();
        axios.post("https://hive.iran.liara.run/auth/users/reset_password/",data)
            .then(response => {
                setData ( {
                    email : ""

                } )
                notify("ایمیل ارسال شد." , "info")
                setErrors ( {} )
                setIsOpen ( false )
                setIsPassOpen ( false )
                setIsOpenLogin ( false )
                setErrorChecker(false)
            })
            .catch(error => {
                setErrors(error.response.data)
                setErrorChecker(true)
                if ( errorChecker ){
                    notify("ایمیل وارد شده غلط میباشد." , "error")
                    setErrorChecker(false)
                }
            })

    }
    const focusHandler = ( event ) => {

        setTouch ( { ... touch , [ event.target.name ] : true } )

    }
    const changeHandler = ( event ) => {
        setData ( { ... data , [ event.target.name ] : event.target.value } )

    }
   const closeHandler = () => {
    setIsPassOpen(false)
    setIsOpenLogin(false)
       setIsOpen(false)
       setData({
           email : ""
       })
       setErrors({})
    }
    if ( ! open ) {
        return null
    }
    return createPortal (
        <>
            <div style={ OVERLAY_STYLES } onClick={closeHandler}/>
            <div style={ MODAL_STYLES }>
                <form onSubmit={ submitHandler } className={ styles.formContainer }>
                    <div>
                        <img className={ styles.closeButton } src={ cancel } onClick={ closeHandler }
                             alt="cancel"/>
                    </div>

                    <h2 className={ styles.header }>فراموشی رمزعبور</h2>
                    <div className={ styles.formField }>
                        <p className={ styles.ParEmail }>ایمیل خود را وارد کنید</p>
                        <input type="text" name="email"
                               className={ styles.formInput }
                               onFocus={ focusHandler }
                               onChange={ changeHandler } value={ data.name } placeholder="ایمیل"/>

                    </div>

                    <div className={ styles.formButtons }>
                        <button type="submit">ارسال ایمیل</button>

                    </div>
                </form>


            </div>

        </> ,
        document.getElementById ( "portal" )
    );
};

export default Email;