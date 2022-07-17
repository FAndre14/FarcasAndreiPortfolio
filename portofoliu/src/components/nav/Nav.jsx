import React from 'react';
import "./nav.css";
import { GoHome, GoPerson, GoProject } from "react-icons/go"
import { useState } from 'react';

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#home");
  return (
    <div className='container__center'>
      <nav>
        <a
        className={activeNav === "#about" ? "active" : ""}
        onClick= {() => setActiveNav("#about")}
        href='#about'>
        <GoPerson />
        </a>

        <a
        className={activeNav === "#home" ? "active" : ""}
        onClick= {() => setActiveNav("#home")}
        href='#home'>
        <GoHome />
        </a>

        <a
        className={activeNav === "#projects" ? "active" : ""}
        onClick= {() => setActiveNav("#projects")}
        href='#projects'>
        <GoProject />
        </a>
      </nav>
    </div>
  )
}

export default Nav;