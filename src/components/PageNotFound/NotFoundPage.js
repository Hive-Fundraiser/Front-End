import React from 'react';
import { Link } from 'react-router-dom';
import styles from "./NotFoundPage.module.css"
const NotFoundPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.textContainer}>
                <p className={styles.text}>Page not found</p>
            </div>
            <Link to="/" className={styles.button}>
                برگشت به خانه
            </Link>
        </div>
    );
};



export default NotFoundPage;
