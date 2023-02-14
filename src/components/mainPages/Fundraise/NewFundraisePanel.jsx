import "./NewFundraisePanel.css";
import src from "./../../../images/Fundraise/Create.svg";
import { useState } from "react";
import axios from "axios";

const NewFundraisePanel = () => {
    const [title, setTitle] = useState('');

    const [description, setDescription] = useState('');
    const [image, setImage] = useState("");

    const handleNameChange = (event) => {
        setTitle(event.target.value);
    };



    const handleMessageChange = (event) => {
        setDescription(event.target.value);
    };

    const handleImageChange = (event) => {
        setImage(event.target.files[0]);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const formData = new FormData();
        formData.append('title', title);
        formData.append('description', description);
        formData.append('image', image);

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
                <img alt="newFundraise" src={ src }/>
                <div>ایجاد آگهی جدید</div>
            </div>
            <form className="new-fundraise-form" onSubmit={handleSubmit}>
                <div className="upload-container">
                    <div>تصویر:</div>
                    <label htmlFor="upload" className="upload">
                    <input type="file" id="upload" hidden onChange={handleImageChange}/>

                        بارگذاری
                    </label>
                </div>
                <div className="new-fundraise-form-info">
                    <div className="new-fundraise-form-info-input-container">
                        <label>عنوان:</label>
                        <input
                            type="text"
                            className="new-fundraise-form-info-input"
                            placeholder="عنوان"
                            value={ title }
                            name=''
                            onChange={handleNameChange}
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
                    <textarea className="new-fundraise-form-text-area" value={ description }
                              onChange={ handleMessageChange }/>
                </div>
            </form>
            <div className="button-container">
                <button className="button">انصراف</button>
                <button className="button" type='submit'>
                    ارسال
                </button>
            </div>
        </div>
    );
};
export default NewFundraisePanel;
