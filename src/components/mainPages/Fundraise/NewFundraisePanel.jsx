import "./NewFundraisePanel.css";
import src from "./../../../images/Fundraise/Create.svg";
import { useEffect, useState } from "react";
import axios from "axios";

const NewFundraisePanel = ({ setNewFundraise }) => {
  const [data, setData] = useState({
    title: "",
    amount: 0,
    description: "",
    image: null,
  });
  useEffect(() => {}, [data]);

  const changeHandler = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
    console.log(data);
  };
  const amountHandler = (event) => {
    setData({ ...data, [event.target.name]: parseInt(event.target.value) });
  };

  const handleImageChange = (event) => {
    setData({ ...data, [event.target.name]: event.target.files[0] });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(data.description);
    console.log(data.title);
    console.log(data.image.name);

    // axios.post('https://your-api-url.com', formData)
    //     .then((response) => {
    //         console.log(response);
    //     })
    //     .catch((error) => {
    //         console.error(error);
    //     });
  };

  return (
    <div className="new-fundraise-panel">
      <div className="new-fundraise-title">
        <img alt="newFundraise" src={src} />
        <div className="the-title">ایجاد آگهی جدید</div>
      </div>
      <form className="new-fundraise-form" onSubmit={handleSubmit}>
        <div className="upload-container">
          <div className="label">تصویر:</div>
          <label className="upload" htmlFor="upload">
            <input
              type="file"
              id="upload"
              hidden
              onChange={handleImageChange}
              name="image"
            />
            بارگذاری
          </label>
        </div>
        <div className="new-fundraise-form-info">
          <div className="new-fundraise-form-info-input-container">
            <label className="label">عنوان:</label>
            <input
              type="text"
              className="new-fundraise-form-info-input"
              placeholder="عنوان"
              value={data.title}
              name="title"
              onChange={changeHandler}
            />
          </div>
          <div className="new-fundraise-form-info-input-container">
            <label className="label">مبلغ:</label>
            <input
              type="number"
              className="new-fundraise-form-info-input"
              placeholder="تومان"
              value={data.amount.toString()}
              name="amount"
              onChange={amountHandler}
            />
          </div>
          <div className="new-fundraise-form-info-input-container">
            <label className="label">گروه آگهی:</label>
            <select className="new-fundraise-form-info-input">
              <option>عام المنفعه</option>
              <option>سایر</option>
              <option>آموزشی</option>
              <option>پزشکی</option>
              <option>رقابتی</option>
              <option>سفر</option>
              <option>ایمان</option>
            </select>
          </div>
        </div>
        <div className="new-fundraise-form-info-input-container">
          <div className="label">متن آگهی:</div>
          <textarea
            className="new-fundraise-form-text-area"
            value={data.description}
            onChange={changeHandler}
            name="description"
          />
        </div>
      </form>
      <div className="button-container">
        <button
          className="button"
          onClick={() => {
            setNewFundraise(false);
          }}
        >
          انصراف
        </button>
        <button className="button" type="submit" onClick={handleSubmit}>
          ارسال
        </button>
      </div>
    </div>
  );
};
export default NewFundraisePanel;
