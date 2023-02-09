import styles from "./Menu.module.css";
import { Fragment, useState } from "react";

import Close from "./../../../images/PostsPage/close.svg";

const Menu = (props) => {
  const [fullMenu, setFullMenu] = useState(false);
  const closeMenu = () => {
    props.setIsMenuOpen(false);
  };
  const setFilters = (start, end) => {
    return (
      <div className={styles.inner_parent}>
        {props.types.slice(start, end).map((type) => (
          <div className={styles.type}>{type}</div>
        ))}
      </div>
    );
  };
  const renderFilters = () => {
    let result = [];
    let visibleLength = props.types.length;
    if (!fullMenu) {
      visibleLength = Math.floor(visibleLength / 2);
    }
    for (let i = 2; i < visibleLength; i = i + 3) {
      if (i + 3 < visibleLength) {
        result.push(setFilters(i, i + 3));
      } else {
        result.push(setFilters(i, visibleLength));
      }
    }
    return result;
  };
  const theMenu = () => {
    return (
      <Fragment>
        <div className={styles.menu}>
          <div className={styles.top}>
            <span className={styles.top_title}>فیلتر ها</span>
            <img src={Close} alt="close button" onClick={closeMenu} className={styles.imgTop} />
          </div>
          {/* <hr /> */}
          <div className={styles.center}>
            <h3 className={styles.center_title}>
              هدف مورد نظر برای جمع آوری اعانه
            </h3>
            <span className={styles.center_note}>
              یک یا چند مورد را انتخاب کنید
            </span>
            <div className={styles.filters}>{renderFilters()}</div>
            <span
              className={styles.see_more}
              onClick={() => {
                setFullMenu((e) => {
                  return !e;
                });
              }}
            >
              {fullMenu ? "دیدن موارد کمتر" : "دیدن موارد بیشتر"}
            </span>
          </div>
          {/* <hr /> */}
          <div className={styles.bottom}>
            <button className={styles.reset_btn}>ریست</button>
            <button className={styles.see_result_btn}>دیدن نتایج</button>
          </div>
        </div>
        <div className={styles.background} onClick={closeMenu}></div>
      </Fragment>
    );
  };
  return props.isMenuOpen ? theMenu() : null;
};

export default Menu;
