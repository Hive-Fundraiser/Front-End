import React, { PureComponent } from 'react';
import './header.css';
import title from "../../../images/PostPage/title.jpg"
import miniProfile from "../../../images/PostPage/mini profile.jpg"
import searchIcon from "../../../images/PostPage/searchicon.png"

function Header()
{
    return(
        <div className='header'>
         <img className='header-img' alt='tilt image' src={title}/>
         <div className='div-profile-img'>
            <img alt='profile image' className='profile-img'  src={miniProfile}/>
         </div>
      <p className='title-description' >عباس نورانی</p>
        <img alt='search icon' className='search-icon' id='search-icon'  src={searchIcon}/>
        
        </div>
    );
}
  export default Header;