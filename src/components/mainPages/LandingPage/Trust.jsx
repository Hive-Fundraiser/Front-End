import styles from "./Trust.module.css";
import Tick from "./../../../images/LandingPage/tick.svg";

const Trust = () => {
  return (
    <div className={styles.trust}>
      <div className={styles.head}>
        <img src={Tick} alt="" />
        <span>اعتماد و امنیت</span>
      </div>
      <h2 className={styles.title}>ما هواتون رو داریم!</h2>
      <p className={styles.text}>
        {" "}
        تیم ما شخصا افرادی که اعانه جمع آوری میکنند را بررسی میکند
        <br /> و بر فرآیند کمک رسانی نظارت میکند.
        <br /> نگران هیچ چیز نباشید، ما حواسمان به همه چیز هست.
      </p>
    </div>
  );
};

export default Trust;
