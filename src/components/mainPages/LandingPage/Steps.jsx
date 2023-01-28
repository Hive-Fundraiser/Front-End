import styles from "./Steps.module.css";
import StepsShape from "./../../../images/LandingPage/steps.png";

const Steps = () => {
  return (
    <div className={styles.steps_parent}>
      <div className={styles.top}>
        <h5>چه اتفاقی می افتد؟</h5>
        <h2>جمع آوری اعانه در هایو فقط چند دقیقه زمان می برد</h2>
      </div>
      <div className={styles.bottom}>
        <img className={styles.steps_numbers} src={StepsShape} alt="" />
        <div className={styles.steps}>
          <div className={styles.step}>با چیز های پایه شروع کنید</div>
          <div className={styles.step}>داستان خود را تعریف کنید</div>
          <div className={styles.step}>با دوستان خود به اشتراک بگذارید</div>
        </div>
      </div>
    </div>
  );
};

export default Steps;
