import Footer from "../../shared/Footer";
import Navbar from "../../shared/Navbar";
import MyFundraisePanel from "./MyFundraisePanel";
import ProfilePart from "./ProfilePart";
import "./index.css";
import { Link } from "react-router-dom";

const MyFundraise = () => {
  return (
    <div>

      <div className="root">
        <div className="blue" />
        <div className="white" />
          <Link to="/">
              <div className="header-text">Hive</div>
          </Link>
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
