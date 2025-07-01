import KidImg from '../assets/photos/ChatGPT Image Jun 22, 2025, 12_33_50 AM.png'
import ScrollImg from '../assets/icons/arrow-down-square.svg?react'

const AboutMe = () => {
  return (
      <div className="px-5 mt-8 flex flex-col items-start gap-4 
                      sm:px-16 sm:gap-5 lg:items-center lg:gap-10 lg:mt-30"
      >
        <h2
          id='aboutme' 
          className="font-semibold text-2xl lg:text-[32px] text-primary-blue">
          About Me
        </h2>

        <div className='flex flex-col gap-6 lg:flex-row justify-between'>
          <div className="w-full flex justify-center lg:items-center">
            <img 
              src={KidImg} alt="image of kid studying" 
              className="rounded-full w-38 h-auto sm:w-87 sm:h-87 lg:w-[578px] lg:h-[578px]" 
            />
          </div>

          <div className='lg:flex lg:flex-col lg:items-center lg:gap-20'>
            <p 
              className="text-dark-blue font-medium text-sm leading-5 tracking-[0.02em] 
                          sm:text-[20px] sm:leading-8 sm:tracking-[0.8] lg:w-107"
            >
              I’m a web developer with a focus on front-end development, 
              but I also enjoy exploring full-stack projects. 
              I use technologies like React, JavaScript, Node.js, and 
              MongoDB to create responsive, efficient, and scalable applications.
              <br />
              <br />
              Currently, I’m sharpening my skills through hands-on projects on 
              Frontend Mentor and collaborating with teams using GitHub. 
              My goal is to grow into a full-time developer role where 
              I can contribute to meaningful applications and continue learning.
            </p>

            <a
              href='#skills' 
              className="hidden lg:flex items-center justify-center gap-2.5 text-white
                                bg-black w-61 h-13 rounded-3xl"
            >
            Tools and Tech I use 
            <ScrollImg /> 
            </a>
          </div>
        </div>
      </div>
  )
}

export default AboutMe