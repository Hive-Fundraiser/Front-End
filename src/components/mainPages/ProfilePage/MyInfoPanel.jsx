import Pen from "./../../../images/ProfilePage/pen.svg";
import Upload from "./../../../images/ProfilePage/upload.svg";
import { validateFileType } from "../../../helper/Utils";
import { useRef } from "react";
import styles from "./MyInfoPanel.module.css";

const MyInfoPanel = () => {
  const uploadPicInput = useRef();

  const submitHandler = () => {};
  return (
    <form onSubmit={submitHandler} className={styles.form}>
      <div className={styles.inner_parent}>
        <div className={styles.input_parent}>
          <label htmlFor="">نام نام خانوادگی</label>
          <input type="text" />
        </div>
        <div className={styles.input_parent}>
          <label htmlFor="">تاریخ تولد</label>
          <input type="text" />
        </div>
      </div>

      <div className={styles.inner_parent}>
        <div className={styles.input_parent}>
          <label htmlFor="">نام کاربری</label>
          <input type="text" />
        </div>
        <div className={styles.change_password_parent}>
          <label htmlFor="">تغییر رمز عبور</label>
          <img src={Pen} alt="" />
        </div>
      </div>
      <div className={styles.inner_parent}>
        <div className={styles.input_parent}>
          <label htmlFor="">تلفن همراه</label>
          <input type="number" />
        </div>
        <div className={styles.input_parent}>
          <label htmlFor="">ایمیل</label>
          <input type="email" />
        </div>
      </div>
      <div className={styles.inner_parent}>
        <div className={styles.input_parent}>
          <label htmlFor="">کد ملی</label>
          <input type="number" />
        </div>
        <div className={styles.input_parent}>
          <label htmlFor="">کد پستی</label>
          <input type="email" />
        </div>
      </div>
      <div className={styles.inner_parent}>
        <div className={styles.input_parent}>
          <label htmlFor="">آدرس</label>
          <input type="text" />
        </div>
      </div>
      <div className={styles.inner_parent}>
        <div className={styles.input_parent}>
          <label htmlFor="">شماره حساب</label>
          <input type="number" />
        </div>
      </div>
      <div className={styles.profile_pic_parent}>
        <label htmlFor="">تصور کارت ملی و شناسنامه</label>
        <div
          id="loadFileXml"
          value="loadXml"
          className={styles.upload_button}
          onClick={() => {
            uploadPicInput.current.click();
          }}
        >
          <span>بارگذاری</span>
          <img src={Upload} />
        </div>
        <input
          type="file"
          accept="image/png, image/jpeg"
          style={{ display: "none" }}
          id="file"
          name="file"
          ref={uploadPicInput}
          onChange={validateFileType}
        />
      </div>
      <input type="submit" value={"ذخیره"} className={styles.submit_button} />
    </form>
  );
};

export default MyInfoPanel;
