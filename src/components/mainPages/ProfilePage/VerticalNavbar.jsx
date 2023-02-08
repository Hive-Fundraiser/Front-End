import styles from "./VerticalNavbar.module.css";
import SampleProfile from "./../../../images/ProfilePage/sample_profile.png";
import { useState } from "react";
const VerticalNavbar = () => {
  const [active, setActive] = useState("my_info");
  const checkActive = (tag) => {
    return active === tag ? styles.active : "";
  };
  const clickHandler = (tag) => {
    setActive(tag);
  };
  return (
    <div className={styles.vertical_navbar}>
      <div className={styles.inner_parent}>
        <img src={SampleProfile} alt="profile" className={styles.profile} />
        <ul>
          <li className={styles.list + " " + styles.title}>صفحه کاربری</li>
          <li
            className={styles.list + " " + checkActive("my_info")}
            onClick={() => {
              clickHandler("my_info");
            }}
          >
            اطلاعات من
          </li>
          <li
            className={styles.list + " " + checkActive("my_posts")}
            onClick={() => {
              clickHandler("my_posts");
            }}
          >
            اگهی های من
          </li>
          <li
            className={styles.list + " " + checkActive("my_messages")}
            onClick={() => {
              clickHandler("my_messages");
            }}
          >
            پیغام ها
          </li>
          <li
            className={styles.list + " " + checkActive("exit")}
            onClick={() => {
              clickHandler("exit");
            }}
          >
            خروج{" "}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default VerticalNavbar;
