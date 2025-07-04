import React from 'react'
import ProfileImg from '../assets/photos/profile.jpg';
import ScrollImg from '../assets/icons/arrow-down-square.svg?react';

const Hero = () => {
  return (
    <div id='home' className='flex flex-col items-center max-sm:mt-10'>
        <div className='flex flex-col items-center mt-3.5 mx-5 px-2 sm:px-16 sm:pt-6.5 
                        lg:flex-row-reverse lg:justify-center lg:p-0 lg:gap-17 lg:mt-10' 
        >
            <div className='w-44 h-48 relative sm:w-89 sm:h-107 lg:w-145  lg:h-167'>
                <div  
                    data-aos="fade-right"
                    data-aos-duration="1000"
                    className='w-[166px] absolute top-3 right-[7px] h-[170px] bg-secondary-blue/80
                                     -rotate-5  rounded-bl-[100px] sm:rounded-bl-[200px] 
                                    sm:w-74 sm:h-100 sm:top-4 sm:right-9
                                    lg:w-126 lg:h-157 lg:top-6.5'
                >

                </div>
                <img 
                    data-aos="fade-left"
                    data-aos-duration="1000"
                    src={ProfileImg} alt="profile image"  
                    className='bg-secondary-blue absolute top-0 right-0 w-[150px] h-[188px] rounded-bl-[120px]
                    sm:w-80 sm:h-100 sm:rounded-bl-[200px] lg:w-126 lg:h-157'
                />
            </div>
            <div className='flex flex-col gap-2.5 sm:py-2.5 sm:gap-5 lg:w-112.5 lg:gap-10' >
                <h1 className='text-primary-black sm:text-2xl typing-animation whitespace-nowrap'>
                    Welcome to My Page
                </h1>
                <h2 className='text-2xl font-bold sm:text-[40px] leading-8'>
                    Hi, I am Suraj Khatri
                    <br/> <span className='font-medium text-[20px] sm:text-3xl'>-Web Developer</span>
                </h2>
                <p className='text-dark-blue sm:text-2xl sm:font-normal'>
                    I am a dedicated web developer, I build responsive, user-friendly websites and 
                    application from front-end interfaces to back-end logic and databases.
                </p>
                <div className='flex flex-col items-start gap-2.5 sm:flex-row sm:gap-5
                                lg:flex-col lg:w-74 lg:h-50 lg:ml-20 lg:relative cursor-pointer'
                
                >
                    <a
                        href="/Personal-Portfolio/SurajKhatriCV.docx" 
                        download
                        className='buttons lg:absolute lg:top-0 lg:left-0 hover:-translate-y-3 
                            flex justify-center items-center'
                        data-aos="fade-right"
                        data-aos-duration="1000"
                    >
                        Download Resume
                    </a>  
                                            
                    <a data-aos="fade-right" data-aos-duration="1500"
                        href='projects'
                        className='buttons hover:-translate-y-3 lg:absolute lg:top-1/2 lg:left-1/2 lg:-translate-x-1/2 
                        lg:-translate-y-1/2 lg:hover:-translate-y-2/3 flex justify-center items-center'>
                            See My Projects
                    </a>
                    <button data-aos="fade-right" data-aos-duration="2000"
                        className='hirebutton sm:w-[123px] lg:absolute lg:bottom-0 lg:right-0'>
                            Hire Me!
                    </button>
                </div>
            </div>
        </div>
        
        <a data-aos="zoom-in-down" 
            href="#aboutme" 
            className="hidden lg:flex items-center justify-center gap-2.5 text-white
                     bg-black w-41.5 h-12 rounded-3xl hover:bg-white hover:text-black"
        >
            Scroll Down <ScrollImg /> 
        </a>
    </div>
  )
}

export default Hero