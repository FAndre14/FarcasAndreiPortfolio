import React from 'react';
import CTA from "./CTA";
import ME from "../../assets/user-placeholder.png";
// import ME from "../../assets/User.png"
import HeaderSocials from './HeaderSocials';
import Typewriter from "typewriter-effect";
import "./header.css";

const Header = () => {
  return (
    <header id='home'>
      <div className="container header__container">

        <div className="me">
          <img src={ME} alt="MyProfilePhoto" />
        </div>

        <div className="container header__details">
          <h5>Hi there, I'm</h5>
          <h1 className='myName'>Andrei Farcas</h1>
          <div className="h5 text-light text__animated">
            <Typewriter
            onInit={(typewriter) => {
              typewriter.typeString("Front End Developer")
              .pauseFor(1000)
              .deleteAll()
              .typeString("Back End Developer")
              .pauseFor(1000)
              .deleteAll()
              .typeString("Web Developer")
              .pauseFor(1000)
              .start()}}
            />
          </div>
          <CTA />
          <HeaderSocials />
        </div>

      </div>
    </header>
  )
}

export default Header;