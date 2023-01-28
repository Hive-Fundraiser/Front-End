import Logo from "./../../images/Footer/logo.svg";
import Instagram from "./../../images/Footer/instagram.svg";
import Telegram from "./../../images/Footer/telegram.svg";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footer_parent}>
      <div className={styles.top}>
        <div className={styles.right}>
          <ul>
            <li style={{ cursor: "default" }}>جمع آوری اعانه برای</li>
            <li>پزشکی</li>
            <li>تحصیلی</li>
            <li>عام المنفعه</li>
          </ul>
        </div>
        <div className={styles.center}>
          <ul>
            <li>بیشتر بدانید</li>
            <li>چگونه کار میکند؟</li>
            <li>درباره ما</li>
          </ul>
        </div>
        <div className={styles.left}>
          <div className={styles.left_top}>
            <span>Hive</span>
            <img src={Logo} alt="brand logo" />
          </div>
          <div className={styles.left_bottom}>
            <img src={Instagram} alt="insta logo" />
            <img src={Telegram} alt="" />
          </div>
        </div>
      </div>
      <div className={styles.bottom}>© 2023 Hive</div>
    </div>
  );
};

export default Footer;
