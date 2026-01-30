import React from 'react'
import './skills.css'
import CSS from '../../assets/css3.svg'
import HTML from '../../assets/html.png'
import JS from '../../assets/javascript.svg'
import Figma from '../../assets/figma.svg'
import ReactJS from '../../assets/react.svg'
import BootStrap from '../../assets/bootstrap.png'
import Git from '../../assets/git.png'
import GitHub from '../../assets/github.png'
import TypeScript from '../../assets/typescript.png'

const SkillsData = [
    {
        id: 1,
        image: HTML,
        title: 'HTML',
        disc: "Structure"
    },
    {
        id: 2,
        image: CSS,
        title: 'CSS',
        disc: "User Interface"
    },
    {
        id: 3,
        image: JS,
        title: 'JavaScript',
        disc: "Interaction"
    },
    {
        id: 4,
        image: ReactJS,
        title: 'React',
        disc: "Frontend Framework"
    },
    {
        id: 5,
        image: TypeScript,
        title: 'TypeScript',
        disc: "Typed JS"
    },

    {
        id: 6,
        image: BootStrap,
        title: 'Bootstrap',
        disc: "CSS Framework"
    },
    {
        id: 7,
        image: Figma,
        title: 'Figma',
        disc: "Design Tool"
    },
    {
        id: 8,
        image: Git,
        title: 'Git',
        disc: "Version Control"
    },
    {
        id: 9,
        image: GitHub,
        title: 'GitHub',
        disc: "Code Hosting"
    }
]

function Skills() {
    return (
        <section className='skills' id='skills'> 
            <div className="top_section">
                <h5>What Skills I Have</h5>
                <h2>My Experience</h2>
            </div>

            <div className="container container_skills">
                {SkillsData.map(({  image, title, disc }) => ( 
                <article className='card_skill'>
                    <div className="icon">
                        <img src={image} alt="" />
                    </div>
                    <div className="content">
                            <h4>{title}</h4>
                            <p className='text-light'>{disc}</p>
                    </div>
                </article>    
            ))}
            </div>
        </section>
    )
}
export default Skills