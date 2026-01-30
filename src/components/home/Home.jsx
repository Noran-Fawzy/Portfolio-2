import React from 'react'
import Me from '../../assets/me.png'
import './home.css'
import CV from '../../assets/cv.pdf'
import HomeSocials from './HomeSocials'
function Home() {
    return (
        <div className='home'>
            <div className="container home_container">
                <h4>Hello I'm</h4>
                <h1>Noran Fawzy Najm</h1>
                <h4 className='text-light'>Front-end Developer</h4>
                <div className="btns">
                <a href={CV} className='btn' download>Download CV</a>
                </div>
                <div className="me">
                    <img src={Me} alt="" />
                </div>

                <HomeSocials/>
            </div>
        </div>
    )
}
<HomeSocials /> 
export default Home