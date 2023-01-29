import React from "react";
import { Link } from "react-router-dom";

import styles from "./Navbar.module.css";
import Search from "./../../images/Navbar/search.svg";
import Logo from "./../../images/Navbar/logo.svg";

const Navbar = () => {
  return (
    <header className={styles.header}>
      <div className={styles.mainContainer}>
        <div className={styles.right}>
          {/*<Link to="/cart"><button>search</button> </Link>*/}
          <Link to="/Signup" className={styles.lists}>
            <button className={styles.p2}>ثبت نام</button>
          </Link>
          <Link to="/Login" className={styles.lists}>
            <button className={styles.p1}>ورود</button>
          </Link>

          <Link to="/Posts" className={styles.lists}>
            <img src={Search} alt="search icon" />
          </Link>
        </div>
        <div className={styles.left}>
          <span className={styles.brand_title}>Hive</span>
          <img className={styles.brand_logo} src={Logo} alt="brand logo" />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
