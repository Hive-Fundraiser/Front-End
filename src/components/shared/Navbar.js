import React from 'react';
import { Link } from 'react-router-dom';

import styles from "./Navbar.module.css"
import App from "../../App";

const Navbar = () => {
    return (
        <header className={styles.header}>
            <div className={styles.mainContainer}>
                <p>Hive</p>
                <div className={styles.listContainer}>
                    {/*<Link to="/cart"><button>search</button> </Link>*/}
                    <Link to="/Login"><button>LogIn</button> </Link>
                    <Link to="/Signup"><button>SignUp</button> </Link>

                </div>
            </div>
        </header>
    );
}


export default Navbar;
