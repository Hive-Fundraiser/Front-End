import styles from "./ProfilePage.module.css";
import VerticalNavbar from "./VerticalNavbar";
import Form from "./Form";

const ProfilePage = () => {
  return (
    <div className={styles.profile_page}>
      <div className={styles.title}>Hive</div>
      <VerticalNavbar />
      <Form />
    </div>
  );
};

export default ProfilePage;
