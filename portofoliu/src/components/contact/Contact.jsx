import React, { useRef } from 'react';
import { FiMail, FiMessageCircle } from "react-icons/fi";
import { BsLinkedin } from "react-icons/bs";
import emailjs from 'emailjs-com';
import "./contact.css";

const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm("service_lj7ww9m", "template_84zpke3", form.current, "jPF1K9KUcKQ0fUTfI");
        e.target.reset();
    }
  return (
    <section id='contact'>
        <h2>Contact me</h2>

        <div className="container contact__container">
            <div className="contact__options">
                <article className='contact__option'>
                    <FiMail />
                    <h4>Email</h4>
                    <h5>farcasandreicatalin@yahoo.com</h5>
                    <a href='mailto:farcasandreicatalin@yahoo.com'>Send me a mail</a>
                </article>
                
                <article className='contact__option'>
                    <FiMessageCircle />
                    <h4>Messenger</h4>
                    <h5>Andrei Farcas</h5>
                    <a href='https://m.me/andrei.farcas.7967'>Send me a message</a>
                </article>
                
                <article className='contact__option'>
                    <BsLinkedin />
                    <h4>Linkedin</h4>
                    <h5>Andrei Farcas</h5>
                    <a href='https://linkedin.com'>My Page</a>
                </article>
            </div>
            
            <form ref={form} onSubmit={sendEmail}>
                <input type="text" name="name" placeholder="Your Name" required />
                <input type="email" name="email" placeholder="Your Email" required />

                <textarea name='message' rows="7" placeholder="Your message here..." required></textarea>

                <button type='submit' className='btn btn-primary'>Send Message</button>
            </form>
        </div>
    </section>
  )
}

export default Contact;