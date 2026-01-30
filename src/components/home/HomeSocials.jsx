import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { MdOutlineEmail } from 'react-icons/md'
import { RiMessengerLine } from 'react-icons/ri'
import { BsWhatsapp } from 'react-icons/bs'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
function HomeSocials() {
return (
    <div className='home_socials'>
        <a href="https://www.facebook.com/noran.fawzy.923" target='_blank'><FaFacebookF /></a>
                <a href="mailto:noranfawzy05@gmail.com" target='_blank'><MdOutlineEmail /></a>
                <a href="https://m.me/NoranFawzy" target='_blank'><RiMessengerLine /></a>
                <a href="https://api.whatsapp.com/send?phone=201060822030" target='_blank'><BsWhatsapp /></a>  
                <a href="https://www.linkedin.com/in/noran-fawzy-najm" target='_blank'><FaLinkedin /></a>
                <a href="https://github.com/Noran-Fawzy" target='_blank'><FaGithub /></a>

    </div>
)
}

export default HomeSocials