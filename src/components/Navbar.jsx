import { useState } from "react";
import logo from "../assets/logos/MyLogo.png";
import ThreeDots from "../assets/icons/three-dots-vertical.svg?react";
import HomeIcon from "../assets/icons/house-door.svg?react";
import AboutIcon from "../assets/icons/person.svg?react";
import SkillIcon from "../assets/icons/brush.svg?react";
import ProjectsIcon from '../assets/icons/filetype-jsx.svg?react';
import ContactIcon from '../assets/icons/telephone.svg?react';



const Navbar = () => {
    const[menuOpen, setMenuOpen] = useState(false);


  return (
    <>
    
        <div id="top"
            className='max-sm:fixed max-sm:top-0 max-sm:w-full flex flex-row items-center justify-between 
            sm:py-5.5 sm:pr-3 lg:h-[138px] lg:px-20 lg:py-5.5 bg-white shadow-shadow-grey shadow-lg'
        >
            {/* logo and name */}
            <div className=' flex flex-row items-center cursor-pointer'>
                <img src={logo} alt="Suraj" className='w-10 h-10 lg:w-18 lg:h-18'/>
                <h1 className='font-semibold text-2xl lg:text-[32px] text-primary-blue'>Suraj</h1> 
            </div>
            
            {/* Navigation links for bigger screens */}
            <div className="hidden sm:flex flex-row gap-2.5 text-primary-blue
                            lg:gap-5"
            >
                <a href="#home" 
                    className="flex items-center lg:gap-2 transition-transform
                   transform duration-200 hover:-translate-y-1
                   border-b-2 border-transparent hover:border-current
                   hover:[text-shadow:0.5px_0_0_currentColor]"
                >
                     <HomeIcon className="icons" />
                        Home
                </a>
                <a href="#aboutme" 
                    className="flex items-center lg:gap-2 transition-transform
                   transform duration-200 hover:-translate-y-1
                   border-b-2 border-transparent hover:border-current
                   hover:[text-shadow:0.5px_0_0_currentColor]"
                >
                    <AboutIcon className="icons " />About
                </a>
                <a href="#skills" 
                    className="flex items-center lg:gap-2 transition-transform
                   transform duration-200 hover:-translate-y-1
                   border-b-2 border-transparent hover:border-current
                   hover:[text-shadow:0.5px_0_0_currentColor]"
                >
                    <SkillIcon className="icons"/>Skills
                </a>
                <a href="#projects" 
                    className="flex items-center lg:gap-2 transition-transform
                   transform duration-200 hover:-translate-y-1
                   border-b-2 border-transparent hover:border-current
                   hover:[text-shadow:0.5px_0_0_currentColor]"
                >
                    <ProjectsIcon className="icons"/>Projects
                </a>
                <a href="#contact" 
                   className="flex items-center lg:gap-2 transition-transform
                   transform duration-200 hover:-translate-y-1
                   border-b-2 border-transparent hover:border-current
                   hover:[text-shadow:0.5px_0_0_currentColor]"
                >
                    <ContactIcon className="icons"/>Contact
                </a>
            </div>



            
            <div className="sm:hidden cursor-pointer" onClick={() => setMenuOpen(!menuOpen)}>
                    <ThreeDots  className={`mt-2 mr-5 hover:text-blue-400 ${menuOpen ? "hidden" : "block"}`}/>
                    <button className={`cursor-pointer mt-1 mr-6 transition-tranform hover:text-[18px] hover:text-red-500 ${menuOpen ? "block" : "hidden"}`}>x</button>
            </div>
        </div>

        {/* Options menu */}
        {menuOpen && (
            <div>
                <div 
                    className="sm:hidden fixed top-10 right-0 bg-gray-300
                            w-1/2 h-full p-6 flex flex-col gap-4 text-primary-blue z-20"
                >
                <a href="#home" 
                    className="flex items-center lg:gap-2 w-fit transition-transform
                   transform duration-200 hover:-translate-y-1
                   border-b-2 border-transparent hover:border-current
                   hover:[text-shadow:0.5px_0_0_currentColor]"
                >
                    <HomeIcon className="icons" />Home
                </a>
                <a href="#aboutme" 
                    className="flex items-center lg:gap-2 w-fit transition-transform
                   transform duration-200 hover:-translate-y-1
                   border-b-2 border-transparent hover:border-current
                   hover:[text-shadow:0.5px_0_0_currentColor]">
                    <AboutIcon className="icons " />About
                </a>
                <a href="#skills" 
                    className="flex items-center lg:gap-2 w-fit transition-transform
                   transform duration-200 hover:-translate-y-1
                   border-b-2 border-transparent hover:border-current
                   hover:[text-shadow:0.5px_0_0_currentColor]"
                >
                    <SkillIcon className="icons"/>Skills
                </a>
                <a href="#projects" className="flex items-center lg:gap-2 w-fit transition-transform
                   transform duration-200 hover:-translate-y-1
                   border-b-2 border-transparent hover:border-current
                   hover:[text-shadow:0.5px_0_0_currentColor]"
                >
                    <ProjectsIcon className="icons"/>Projects
                </a>
                <a href="#contact" 
                        className="flex items-center lg:gap-2 w-fit transition-transform
                   transform duration-200 hover:-translate-y-1
                   border-b-2 border-transparent hover:border-current
                   hover:[text-shadow:0.5px_0_0_currentColor]"
                >
                    <ContactIcon className="icons"/>Contact
                </a>
            </div>

                    
            </div>
        )}
    </>
  )
}

export default Navbar