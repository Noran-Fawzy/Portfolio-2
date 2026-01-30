import Nav from './components/nav/Nav'
import Home from './components/home/Home'
import About from './components/about/About'
import Projects from './components/projects/Projects'
import Skills from './components/skills/Skills'
import Services from './components/services/Services'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

function App() {
    return (
        <>
            <Nav/>
            <Home/>
            <About />
            <Projects />
            <Skills />
            <Services/>
            <Contact/>
            <Footer/>
        </>
    )
}

export default App