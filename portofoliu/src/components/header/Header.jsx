import React from 'react';
import CTA from "./CTA";
import ME from "../../assets/user-placeholder.png";
import HeaderSocials from './HeaderSocials';
import "./header.css";

const Header = () => {
  return (
    <header>
      <div className="container head__container">
        <h5>Hello ME Iz</h5>
        <h1>Andrei</h1>
        <div className="h5 text-light">Branza</div>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={ME} alt="MyProfilePhoto" />
        </div>

        <a href='#contact' className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header;