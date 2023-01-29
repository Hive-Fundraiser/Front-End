import React , { useEffect , useState } from 'react';
import { Link , useNavigate } from 'react-router-dom';

import styles from "./ForgetPassword.module.css"
import { validate } from "../helper/validate";
import { notify } from "../helper/toast";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

const ResetPage = () => {
    return (
        <p>salam rest password</p>
    )
}

export default ResetPage;