import React from 'react';
import styles from "./Base.module.css";

import Body from "./body";
import Navbar from "../../shared/Navbar";
import Footer from "../../shared/Footer";
const Base = () => {
    return (
        <div className={styles.App}>
            <Navbar/>
            <Body/>
            <Footer/>
        </div>
    );
};

export default Base;