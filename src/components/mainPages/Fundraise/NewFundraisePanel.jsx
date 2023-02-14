import "./NewFundraisePanel.css";
import src from "./../../../images/Fundraise/Create.svg";
import { useState } from "react";
const NewFundraisePanel = () => {
  const [data, setData] = useState({
    title: "",
    description: "",
    category: "",
  });
  const submitHandler = () => {};

  return (
    <div className="new-fundraise-panel">
      <div className="new-fundraise-title">
        <img alt="newFundraise" src={src} />
        <div>ایجاد آگهی جدید</div>
      </div>
      <form className="new-fundraise-form">
        <div className="upload-container">
          <div>تصویر:</div>
          <input type="file" id="upload" hidden />
          <label for="upload" className="upload">
            بارگذاری
          </label>
        </div>
        <div className="new-fundraise-form-info">
          <div className="new-fundraise-form-info-input-container">
            <label>عنوان:</label>
            <input
              type="text"
              className="new-fundraise-form-info-input"
              placeholder="تومان"
              value={data.title}
            />
          </div>
          <div className="new-fundraise-form-info-input-container">
            <label>گروه آگهی:</label>
            <select className="new-fundraise-form-info-input">
              <option>کودکان کار</option>
              <option>کودکان کار</option>
              <option>کودکان کار</option>
            </select>
          </div>
        </div>
        <div className="new-fundraise-form-info-input-container">
          <div>متن آگهی:</div>
          <textarea className="new-fundraise-form-text-area" />
        </div>
      </form>
      <div className="button-container">
        <button className="button">انصراف</button>
        <button className="button" onClick={submitHandler}>
          ارسال
        </button>
      </div>
    </div>
  );
};
export default NewFundraisePanel;
