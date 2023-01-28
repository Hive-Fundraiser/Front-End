import styles from "./Header.module.css";
import Hands from "./../../../images/LandingPage/hands.svg";
const Header = () => {
  let welcomeText = (
    <p>
      {" "}
      دستی که کمک می کند،
      <br /> از دستانی که برای دعا بالا می روند
      <br /> مقدس تر است
    </p>
  );
  let start = "شروع کنید";
  return (
    <div className={styles.header_parent}>
      <div className={styles.right}>
        <div className={styles.start_parent}>
          {welcomeText}
          <button>{start}</button>
        </div>
      </div>
      <div className={styles.left}>
        <img src={Hands} alt="charity symbol" />
      </div>
    </div>
  );
};

export default Header;
