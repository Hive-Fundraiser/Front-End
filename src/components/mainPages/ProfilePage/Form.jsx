import styles from "./Form.module.css";
import MyFundraisePanel from "./../Fundraise/MyFundraisePanel";
import MyInfoPanel from "./MyInfoPanel";

const Form = ({ active }) => {
  const renderTabs = () => {
    if (active === "my_info") {
      return <MyInfoPanel />;
    } else {
      return <MyFundraisePanel />;
    }
  };
  return <div className={styles.container}>{renderTabs()}</div>;
};

export default Form;
