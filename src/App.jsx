import Navbar from './components/Navbar'
import Hero from './components/Hero'
import AboutMe from './components/AboutMe'
import Skills from './components/Skills'
import Projects from './components/Projects'
import ContactMe from './components/ContactMe'
import Footer from './components/Footer'

function App() {

  return (
    <div className='bg-slate-100 font-inter pb-5'>
      <Navbar className=""/>
      <Hero/>      
      <AboutMe/>
      <Skills/>
      <Projects/>
      <ContactMe/>
      <Footer/>
    </div>
  )
}

export default App
