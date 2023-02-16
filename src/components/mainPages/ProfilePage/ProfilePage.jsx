import styles from "./ProfilePage.module.css";
import VerticalNavbar from "./VerticalNavbar";
import Form from "./Form";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ProfilePage = () => {
  const logOutHandler = (tag) => {
    setActive(tag);
    localStorage.removeItem("token");
    navigate("/");
  };
  const tabs = [
    {
      name: "اطلاعات من",
      tag: "my_info",
      onClick: () => {
        clickHandler("my_info");
      },
    },
    {
      name: "اگهی های من",
      tag: "my_posts",
      onClick: () => {
        clickHandler("my_posts");
      },
    },
    {
      name: "پیغام ها",
      tag: "my_messages",
      onClick: () => {
        clickHandler("my_messages");
      },
    },
    {
      name: "خروج",
      tag: "exit",
      onClick: () => {
        logOutHandler("exit");
      },
    },
  ];
  const [active, setActive] = useState("my_info");
  const navigate = useNavigate();
  const clickHandler = (tag) => {
    setActive(tag);
  };

  return (
    <div className={styles.profile_page}>
      <div
        className={styles.title}
        onClick={() => {
          navigate("/");
        }}
      >
        Hive
      </div>
      <VerticalNavbar tabs={tabs} active={active} setActive={setActive} />
      <Form active={active} />
    </div>
  );
};

export default ProfilePage;
