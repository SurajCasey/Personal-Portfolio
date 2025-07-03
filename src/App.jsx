import AOS from 'aos';
import "aos/dist/aos.css";
import { useEffect } from 'react';

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import AboutMe from './components/AboutMe'
import Skills from './components/Skills'
import Projects from './components/Projects'
import ContactMe from './components/ContactMe'
import Footer from './components/Footer'

function App() {
  useEffect(()=>{
    AOS.init({
      offset:100, //start animation 100px before element appears
      duration: 700, //animation duration
      easing:"ease-in-out", //easing function
      delay: 100, //delay before animation starts
      
    });

    // 🔁 Refresh after all components and layout are painted
    setTimeout(() => {
      AOS.refresh();
    }, 500); // delay may vary depending on how long your layout takes
  }, []);

  return (
    <div className='bg-slate-100 font-inter pb-5'>
      <Navbar/>
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
