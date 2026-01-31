import React, { useRef } from 'react';
import './contact.css'
import { FaFacebookF } from "react-icons/fa";
import { MdOutlineEmail } from 'react-icons/md'
import { RiMessengerLine } from 'react-icons/ri'
import { BsWhatsapp } from 'react-icons/bs'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import emailjs from '@emailjs/browser';
const ContactData = [
{
    id: 1,
    icon: <MdOutlineEmail />,
    title: "Email",
    link: "mailto:noranfawzy05@gmail.com",
    },

{
    id: 2,
    icon: <RiMessengerLine />,
    title: "Messenger",
    link: "https://m.me/NoranFawzy",
    },

{
    id: 3,
    icon: <BsWhatsapp />,
    title: "WhatsApp",
    link: "https://api.whatsapp.com/send?phone=201060822030",
    },

    {
    id: 4,
    icon: <FaFacebookF />,
    title: "FaceBook",
    link: "https://www.facebook.com/noran.fawzy.923",
    },
    
    {
    id: 5,
    icon: <FaLinkedin />,
    title: "LinkedIn",
    link: "https://www.linkedin.com/in/noran-fawzy-najm",
    },
    
    {
    id: 6,
    icon: <FaGithub />,
    title: "GitHub",
    link: "https://github.com/Noran-Fawzy",
},
]

function Contact() {
    const form = useRef();

const sendEmail = (e) => {
e.preventDefault();

emailjs
    .sendForm('service_riqe7rk', 'template_a8db07q', form.current, 'CZePvW9hOxPi1zlvW',
    )
    e.target.reset()
};

    return (
        <section className='contact' id='contact'>  
            <div className="top_section">
                <h5>Get In Touch</h5>
                <h2>Contact Me</h2>
            </div>

<div className="container contact_container">
<div className="contact_options">

                {
    ContactData.map(({ id, icon, title, link }) => (
    <article key={id} className='contact_option'>
    {icon}
    <h4>{title}</h4>
    <a href={link} target='_blank' rel="noreferrer">Send Message</a>
    </article>
))}
</div>
<form ref={form} onSubmit={sendEmail}>
    <input type="text" placeholder='Full Name' name='name' />
    <input type="email" placeholder='Your Email' name='email' />
    <textarea rows={10} name="message" id="message" placeholder='Enter Your Message....'></textarea>
    <button className='btn btn-primary'>Send Message</button>
</form>
            </div>
            
        </section>
    )
}
export default Contact