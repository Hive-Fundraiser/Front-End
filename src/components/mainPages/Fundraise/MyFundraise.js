import Footer from "../../shared/Footer";
import Navbar from "../../shared/Navbar";
import MyFundraisePanel from "./MyFundraisePanel";
import ProfilePart from "./ProfilePart";
import "./index.css";

const MyFundraise = () => {
  return (
    <div>
        <Navbar/>
      <div className="root">
        <div className="blue" />
        <div className="white" />
        <div className="header-text">Hive</div>
        <div className="main">
          <ProfilePart />
          <MyFundraisePanel />
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default MyFundraise;
