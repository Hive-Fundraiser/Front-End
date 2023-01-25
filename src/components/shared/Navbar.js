import React from 'react';
import { Link } from 'react-router-dom';

import styles from "./Navbar.module.css"
import App from "../../App";

const Navbar = () => {
    return (
        <header className={ styles.header }>
            <div className={ styles.mainContainer }>
                <p className={ styles.hive }>Hive</p>
                <div>
                    {/*<Link to="/cart"><button>search</button> </Link>*/ }
                    <Link to="/Login" className={ styles.lists }>
                        <button className={styles.p1}>LogIn</button>
                    </Link>
                    <Link to="/Signup" className={ styles.lists }>
                        <button className={styles.p2}>SignUp</button>
                    </Link>
                </div>


            </div>
        </header>
    );
}


export default Navbar;
