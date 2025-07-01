import Navbar from './components/Navbar'
import Hero from './components/Hero'
import AboutMe from './components/AboutMe'
import Skills from './components/Skills'
import Projects from './components/Projects'
import ContactMe from './components/ContactMe'

function App() {

  return (
    <div className='bg-slate-100 font-inter pb-8'>
      <Navbar/>
      <Hero/>      
      <AboutMe/>
      <Skills/>
      <Projects/>
      <ContactMe/>
    </div>
  )
}

export default App
