import React from 'react';
import { BsAwardFill, BsPersonCircle } from "react-icons/bs";
import ME from "../../assets/AboutMe.jpg"
import "./about.css";

const About = () => {
  return (
    <section id="about">
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img className="about__me-user-image" src={ME} alt="MeImg"/>
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <BsAwardFill className='about__icon' />
              <h5>Studied CS</h5>
              <small>Since 2018</small><br/>
              <small>At University of Petrosani</small>
            </article>

            <article className='about__card'>
              <BsPersonCircle className='about__icon' />
              <h5>CS Graduate</h5>
              <small>Since 2022</small><br/>
              <small>Now an aspiring developer</small>
            </article>
            </div>

            <p>
            An ambitious person who always desires to learn new things, and does not fear facing new challenges while doing it.
            Passionate about programming, I would like to combine my passion with my future job.
            </p>

            <div className="about__contact">
              <a href='#contact' className='btn btn-primary'>Contact me!</a>
            </div>

        </div>

      </div>
    </section>
  )
}

export default About;