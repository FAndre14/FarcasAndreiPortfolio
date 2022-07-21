import React from 'react';
import "./nav.css";
import { GoHome, GoPerson, GoProject, GoRepo, GoQuestion } from "react-icons/go"
import { useState } from 'react';

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#home");
  return (
    <div className='container__center'>
      <nav>
        <a
        className={activeNav === "#home" ? "active" : ""}
        onClick= {() => setActiveNav("#home")}
        href='#home'>
        <GoHome />
        </a>

        <a
        className={activeNav === "#about" ? "active" : ""}
        onClick= {() => setActiveNav("#about")}
        href='#about'>
        <GoPerson />
        </a>

        <a
        className={activeNav === "#experience" ? "active" : ""}
        onClick= {() => setActiveNav("#experience")}
        href='#experience'
        id='anchor__experience'>
        <GoRepo />
        </a>

        <a
        className={activeNav === "#portfolio" ? "active" : ""}
        onClick= {() => setActiveNav("#portfolio")}
        href='#portfolio'>
        <GoProject />
        </a>

        <a
        className={activeNav === "#contact" ? "active" : ""}
        onClick= {() => setActiveNav("#contact")}
        href='#contact'>
        <GoQuestion />
        </a>
      </nav>
    </div>
  )
}

export default Nav;