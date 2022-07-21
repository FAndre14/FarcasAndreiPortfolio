import React from 'react';
import {BsLinkedin, BsGithub, BsFacebook} from "react-icons/bs";
import "./footer.css";

const Footer = () => {
  return (
    <footer>
      <ul className='permalinks'>
        <li><a href='#home'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#contact'>Contact</a></li>

      </ul>

      <div className="footer__socials">
        <a href='https://linkedin.com' className='button__socials' target="_blank" rel='noopener noreferrer'><BsLinkedin /></a>
        <a href='https://github.com' className='button__socials' target="_blank" rel='noopener noreferrer'><BsGithub /></a>
        <a href='https://facebook.com' className='button__socials' target="_blank" rel='noopener noreferrer'><BsFacebook /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Farcas Andrei Catalin. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer;