import React, { PureComponent } from 'react';
import './footer.css';
import title from "../../../images/PostPage/title.jpg"
import telegram from "../../../images/PostPage/telegram.png"
import instagram from "../../../images/PostPage/instagram.png"
function Footer()
{
    return(

        <div className='footer'>
            <div className='controll1'>
            <a href='#'>جمع آوری اعانه برای</a>
            
            <a href='#'>پزشکی</a>
            <a href='#'>اورژانسی</a>
            <a href='#'>تحصیلی</a>
            <a href='#'>عام المنفعه</a>
            </div>
            <div className='controll2'>
            <a href='#'>بیشتر بدانید</a>
            <a href='#'>چگونه کار میکند</a>
            <a href='#'>درباره ما</a>
            </div>
            <div className='controll3'>
            <img src={title}/>
            <a href='#'><img className='img1' src={telegram}/></a>
            <a href='#'><img className='img' src={instagram}/></a>
            </div>
        </div>
    );
   
}
export default Footer;