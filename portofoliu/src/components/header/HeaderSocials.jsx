import React from 'react'
import {BsLinkedin, BsGithub, BsFacebook, BsFillArrowDownCircleFill} from "react-icons/bs";
import "./animation.css";

const HeaderSocials = () => {
  return (
    <div>
      <div className='header__socials'>
          <a href='https://linkedin.com' className='button__socials' target="_blank" rel='noopener noreferrer'><BsLinkedin /></a>
          <a href='https://github.com' className='button__socials' target="_blank" rel='noopener noreferrer'><BsGithub /></a>
          <a href='https://facebook.com' className='button__socials' target="_blank" rel='noopener noreferrer'><BsFacebook /></a>
      </div>
      <div className="header__scrolldown">
        <a href='#contact' className='scroll__down'>Scroll Down <BsFillArrowDownCircleFill className='scroll__down__icon shake-vertical' /></a>
      </div>
    </div>
    )
}

export default HeaderSocials