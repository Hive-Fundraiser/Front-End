import React , { PureComponent , useContext } from 'react';
import './body.css';
import help from "../../../images/PostPage/help.png"
import { useParams } from "react-router-dom";
import { CharityContext } from "../../../context/CharityProvider";
function Body(props)
{
    let { id } = useParams();
    const charity = useContext(CharityContext);
    const post = charity[id -1]
    const {image,title,description,category} = post;
    return(

        <div className='div-main'>
                <h3 className='title'>{title}</h3>
                <div className='div-help'>
                    <img alt='help-img' className='help-img' src={image}/>
                </div>
                
                <div className='description-div'>
                    <div className='style'>
                        <h2>50 تومان </h2><sub>از 100 تومان هدف جمع شده است . </sub>
                        <br/>
                        <input className='range' type='range' readOnly />
                       <p className='p'>12 هزار بخش</p>
                       <div className='button-controll'>
                       <a href='#'><button className='button-1'>اشتراک گذاری</button></a>
                       <br/>
                       <a href='#'><button className='button-2'>پرداخت</button></a>
                       </div>
                
                        
                    </div>
                    <div className='description'>
                    <div className='span_parent'>
                    <span className='s1'>گروه آگهی:</span>
                    <span className='s2'>{category}</span>
                    </div>
                    <div className='span_parent'>
                    <span className='s1'>ناشر:</span>
                    <span className='s2'>عباس نورانی </span>   
                    </div>
                    
                   </div>
                </div>
            <div className='content'>
            <p>{description}</p>

            </div>
        </div>
    );
}
export default Body;