import React from 'react'
import './projects.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.jpg'
import IMG6 from '../../assets/portfolio6.jpg'
import IMG7 from '../../assets/portfolio7.jpg'
import IMG8 from '../../assets/portfolio8.jpg'
import IMG9 from '../../assets/portfolio9.jpg'
import IMG10 from '../../assets/portfolio10.jpg'
import IMG11 from '../../assets/portfolio11.jpg'

const portfolioData = [
    {
        id: 1,
        image: IMG1,
        title: 'Browser Extension Manager',
        disc: 'Fully responsive web landing page using HTML, CSS, and basic JavaScript animations. A sleek interface to manage, organize, and explore your favorite browser extensions.',
        github: 'https://github.com/Noran-Fawzy/Extension-Lists',
        demo: 'https://noran-fawzy.github.io/Extension-Lists/ '
    },

    {
        id: 2,
        image: IMG2,
        title: 'Interactive Website',
        disc: ' An interactive website that allows users to manage browser extensions with ease, offering dynamic filtering, instant previews, and smooth user experience.',
        github: 'https://github.com/Noran-Fawzy/Interactive-Website',
        demo: 'https://noran-fawzy.github.io/Interactive-Website/ '
    },

    {
        id: 3,
        image: IMG3,
        title: 'Bird Hunt',
        disc: 'A simple and fun flying bird game where you tap to avoid obstacles and beat your high score. ',
        github: 'https://github.com/Noran-Fawzy/Graduation-project-ITI',
        demo: ' https://noran-fawzy.github.io/Graduation-project-ITI/'
    },

    {
        id: 4,
        image: IMG4,
        title: 'List to do',
        disc: ' An interactive task manager that helps you stay organized, focused, and productive, one task at a time.',
        github: 'https://github.com/Noran-Fawzy/List-to-do',
        demo: ' https://noran-fawzy.github.io/List-to-do/'
    },

    {
        id: 5,
        image: IMG5,
        title: 'Login Page',
        disc: ' A clean and responsive login interface that ensures safe and smooth user authentication.',
        github: 'https://github.com/Noran-Fawzy/Login-page',
        demo: 'https://noran-fawzy.github.io/Login-page/ '
    },

    {
        id: 6,
        image: IMG6,
        title: 'User Login secure access',
        disc: ' An interactive website that allows users to manage browser extensions with ease, offering dynamic filtering, instant previews, and smooth user experience.',
        github: 'https://github.com/Noran-Fawzy/User-Login-Secure-Access',
        demo: 'https://noran-fawzy.github.io/User-Login-Secure-Access/ '
    },

    {
        id: 7,
        image: IMG7,
        title: 'Dessert Shop',
        disc: 'A responsive sweets ordering page that allows users to browse dessert cards, add items to their cart, and confirm their order with a detailed summary popup. Built using HTML, CSS, and JavaScript with a focus on clean UI and smooth user experience. ',
        github: 'https://github.com/Noran-Fawzy/Desserts-Shop',
        demo: 'https://noran-fawzy.github.io/Desserts-Shop/ '
    },

    {
        id: 8,
        image: IMG8,
        title: 'Ticket Generator',
        disc: ' This project is a responsive Coding Conf ticket generator web page. Users can enter their personal details (name, email, GitHub username, and profile picture) to generate a personalized event ticket. The design adapts to different screen sizes using CSS media queries, ensuring a smooth and accessible experience on both desktop and mobile devices.',
        github: 'https://github.com/Noran-Fawzy/Ticket-Generator',
        demo: 'https://noran-fawzy.github.io/Ticket-Generator/ '
    },

    {
        id: 9,
        image: IMG9,
        title: 'Bondi Modern Business Website Template',
        disc: ' A responsive website template built with HTML, CSS, and Bootstrap to showcase services, portfolio, team members, and blog posts. It features a clean modern design, smooth user experience, and uses Font Awesome icons with customizable Bootstrap components.',
        github: 'https://github.com/Noran-Fawzy/Bondi-bootstrap',
        demo: ' https://noran-fawzy.github.io/Bondi-bootstrap/'
    },

    {
        id: 10,
        image: IMG10,
        title: 'Problem Solving Game',
        disc: ' A logic-based problem-solving game designed to challenge the players thinking skills. The game presents random questions or tasks that require focus, quick decision-making, and analytical thinking.Developed using HTML, CSS, and JavaScript with dynamic rendering, score tracking, and responsive design. The goal is to help players improve their logical reasoning through fun, interactive challenges.',
        github: 'https://github.com/enghenzoo/Pyramind.git',
        demo: 'https://pyramind.vercel.app/ '
    },

    {
        id: 11,
        image: IMG11,
        title: 'Coffee Shop',
        disc: ' Grand Coffee is a static coffee shop website built with HTML & CSS only. It showcases the café’s layout, menu, and contact info with a clean, perfect for demonstrating front-end web design skills.',
        github: 'https://github.com/Noran-Fawzy/Grand-Coffee',
        demo: 'https://noran-fawzy.github.io/Grand-Coffee/ '
    }

]
function Projects() {
    return (
        <section className='projects' id='projects'>
            <div className="top_section">
                <h5>My Recent Work</h5>
                <h2>Projects</h2>
            </div>
            <div className="container projects_container">

                {portfolioData.map(({ id, image, title, disc, github, demo }) => (
                    <article key={id} className='portfolio_item'>
                    <div className="portfolio_item_img">
                    <img src={image} alt="" /> 
                    </div>
                        <h3>{title}</h3>
                        <h4>{disc}</h4>
                    <div className="portfolio_item_btns">
                        <a href={github} target='_blank' className='btn'>GitHub</a>
                        <a href={demo}target='_blank'  className='btn btn-primary'>Live Demo</a>
                    </div>
                </article>
                ))}
            </div>

        </section>
    )
}
export default Projects