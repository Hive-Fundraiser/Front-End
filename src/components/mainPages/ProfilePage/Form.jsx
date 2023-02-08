import { useRef } from "react";
import styles from "./Form.module.css";
import Pen from "./../../../images/ProfilePage/pen.svg";
import Upload from "./../../../images/ProfilePage/upload.svg";
const Form = () => {
  const uploadPicInput = useRef();

  const submitHandler = () => {};
  const validateFileType = (e) => {
    console.log(e);
    var fileName = e.target.value;
    var idxDot = fileName.lastIndexOf(".") + 1;
    var extFile = fileName.substr(idxDot, fileName.length).toLowerCase();
    if (extFile === "jpg" || extFile === "jpeg" || extFile === "png") {
      //TO DO
      console.log("valid");
    } else {
      alert("Only jpg/jpeg and png files are allowed!");
    }
  };
  return (
    <div className={styles.container}>
      <form onSubmit={submitHandler} className={styles.formContainer}>
        <div className={styles.inner_parent}>
          <div className={styles.input_parent}>
            <label htmlFor="">نام کاربری</label>
            <input type="text" />
          </div>
          <div className={styles.input_parent}>
            <label htmlFor="">ایمیل</label>
            <input type="email" />
          </div>
          <div className={styles.profile_pic_parent}>
            <label htmlFor="">تصویر پروفایل</label>
            {/* <input type="file" /> */}
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
        </div>
        <input type="submit" value={"ذخیره"} className={styles.submit_button} />
      </form>
      <div className={styles.change_password_outer_parent}>
        <div className={styles.change_password_parent}>
          <label htmlFor="">تغییر رمز عبور</label>
          <img src={Pen} alt="" />
        </div>
      </div>

      {/* <ToastContainer/> */}
    </div>
  );
};

export default Form;
