import Footer from "../../shared/Footer";
import Navbar from "../../shared/Navbar";
import NewFundraisePanel from "./NewFundraisePanel";
import ProfilePart from "./ProfilePart";
import "./index.css";
import { Link } from "react-router-dom";

const NewFundraise = () => {
    return (
        <div>

            <div className="root">
                <div className="blue"/>
                <div className="white"/>
                

                <div className="header-text"><Link to="/">Hive</Link></div>
                   
                <div className="main">
                    <ProfilePart/>
                    <NewFundraisePanel/>
                </div>
            </div>
            <Footer/>
        </div>
    );
};
export default NewFundraise;
