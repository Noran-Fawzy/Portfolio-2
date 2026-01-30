import React from 'react'
import './about.css'
import ImageMe from '../../assets/me.png'
import { FaAward } from "react-icons/fa6";
import { FiUsers } from "react-icons/fi";
import { LuFolders } from "react-icons/lu";
function About() {
    return (
            <section className="about" id="about">
            <div className="top_section">
                <h5>Get To Know</h5>
                <h2>About Me</h2>
            </div> 
            <div className="container about_container">
                <div className="about_me">
                    <div className="about_me_image">
                    <img src={ImageMe} alt="" />
            </div>
                </div>
                <div className="about_content">
                    <div className="about_cards">
                        <div className="about_card">

                            <FaAward className='about_icon'/>
                            <h5>Experience</h5>
                            <small>3+ years </small>
                        </div>

                        <div className="about_card">
                            <FiUsers className='about_icon'/>
                            <h5>Clients</h5>
                            <small>5+ worldwide</small>
                        </div>

                        <div className="about_card">
                            <LuFolders className='about_icon'/>
                            <h5>Projects</h5>
                            <small>10+ completed</small>
                        </div>
                    </div>
                    <p>My name is Noran Fawzy Najm, a third-year Computer Science student majoring in Medical Informatics at Zagazig National University. <br/>
                        I have a deep passion for technology, especially where it intersects with healthcare. <br />
                        I believe in the power of innovation to improve lives and streamline medical systems, and that belief is what drives me to keep learning, building, and exploring. <br />
                        I'm also interested in using version control tools like Git and platforms like GitHub to collaborate and manage code efficiently. <br />
                        I love working on practical projects where I can apply what I learn in real-world scenarios one of my main goals is to build smart systems that help both doctors and patients. <br />
                        In addition to my technical skills, I value creativity, problem-solving, and continuous learning. <br />
                        I enjoy taking online courses, participating in challenges, and experimenting with new ideas.
                        Looking ahead, I hope to take part in impactful projects, internships, or research opportunities where I can grow as a developer and contribute to building digital health solutions that truly make a difference.</p>
                </div>
            </div>
            </section>
    )
}
export default About