import React from 'react'
import {BsLinkedin, BsGithub, BsFacebook} from "react-icons/bs";

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href='https://linkedin.com' className='button__socials' target="_blank" rel='noopener noreferrer'><BsLinkedin /></a>
        <a href='https://github.com' className='button__socials' target="_blank" rel='noopener noreferrer'><BsGithub /></a>
        <a href='https://facebook.com' className='button__socials' target="_blank" rel='noopener noreferrer'><BsFacebook /></a>
    </div>
    )
}

export default HeaderSocials