import "./MyFundraisePanel.css";
import src from "../../../images/LandingPage/SelectedPosts/post_3.svg";
import editImage from "../../../images/Fundraise/Edit.svg";
import { useNavigate } from "react-router-dom";
import { Fragment, useState } from "react";
import NewFundraisePanel from "./NewFundraisePanel";

const MyFundraisePanel = () => {
  const navigation = useNavigate();
  const [newFundraise, setNewFundraise] = useState(false);
  const myFundraises = (
    <Fragment>
      <div className="my-fundraise-panel">
        <div>
          <button
            className="create-new-fundraise"
            onClick={() => {
              setNewFundraise(true);
            }}
          >
            ایجاد آگهی جدید
          </button>
        </div>
        <div className="fundraise-panel-items">
          {Array(8)
            .fill(null)
            .map((_, index) => (
              <div key={index} className="fundraise-panel-item">
                <div>
                  <img
                    className="image-src"
                    alt="FundraisePanelItems"
                    src={src}
                  />
                </div>
                <div className="fundraise-panel-item-info">
                  <div className="fundraise-panel-item-title">کودکان کار</div>
                  <div className="fundraise-panel-item-text">
                    مروز، همه در کنار هم روزهای سختی را سپری می‌کنیم. شیوع
                    بیماری کرونا شرایط سخت و پیچیده‌ای را به جهان و کشور عزیزمان
                    تحمیل نموده است. این شرایط برای کادر درمانی و حمایتی و
                    خانواده‌های بیماران پیچیدگی و سختی چند برابر ایجاد نموده
                    است. نگرانی بیماران و خانواده‌های آنها از یک سو و فشار کاری
                    حاکم بر مراکز درمانی و فعالیت بی وقفه و شبانه روزی کادر
                    درمانی و حمایتی از سوی دیگر و افزون بر همه آنها نگرانی
                    فزاینده
                  </div>
                </div>
                <div className="edit-button-container">
                  <img src={editImage} alt="edit" className="edit-button" />
                </div>
              </div>
            ))}
        </div>
      </div>
    </Fragment>
  );
  return newFundraise ? (
    <NewFundraisePanel setNewFundraise={setNewFundraise} />
  ) : (
    myFundraises
  );
};
export default MyFundraisePanel;
