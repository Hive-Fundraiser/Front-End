import { useRef } from "react";
import styles from "./VerticalNavbar.module.css";
import SampleProfile from "./../../../images/ProfilePage/sample_profile.png";
import Pen from "./../../../images/ProfilePage/pen.svg";
import { useState } from "react";
import { validateFileType } from "../../../helper/Utils";
import { useNavigate } from "react-router-dom";
const VerticalNavbar = ({ tabs, active }) => {
  const uploadProfilePicInput = useRef();

  const checkActive = (tag) => {
    return active === tag ? styles.active : "";
  };

  return (
    <div className={styles.vertical_navbar}>
      <div className={styles.inner_parent}>
        <div className={styles.profile_parent}>
          <img src={SampleProfile} alt="profile" className={styles.profile} />
          <div className={styles.change_profile_pic_parent}>
            <div
              id="loadFileXml"
              value="loadXml"
              className={styles.upload_btn}
              onClick={() => {
                uploadProfilePicInput.current.click();
              }}
            >
              <img src={Pen} />
            </div>
            <input
              type="file"
              accept="image/png, image/jpeg"
              style={{ display: "none" }}
              id="file"
              name="file"
              ref={uploadProfilePicInput}
              onChange={validateFileType}
            />
          </div>
        </div>

        <ul>
          <li className={styles.list + " " + styles.title}>صفحه کاربری</li>
          {tabs.map((tab) => (
            <li
              className={styles.list + " " + checkActive(tab.tag)}
              onClick={() => {
                tab.onClick();
              }}
            >
              {tab.name}
            </li>
          ))}
          {/* <li
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
              logOutHandler();
            }}
          >
            خروج{" "}
          </li> */}
        </ul>
      </div>
    </div>
  );
};

export default VerticalNavbar;
