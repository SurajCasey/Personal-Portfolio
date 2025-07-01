import React from 'react'
import skills from '../data/skills.json';
import ScrollImg from '../assets/icons/arrow-down-square.svg?react'

const Skills = () => {
  return (
    <div className='flex flex-col  items-center gap-11'>
      <div className='mt-11 px-5 flex flex-col gap-6 sm:px-16 lg:px-[170px] lg:mt-28'>
        <h2 
          id='skills'
          className='font-semibold text-2xl lg:text-[32px] text-primary-blue'>
          Skills
        </h2>

        <div className='border-2 border-primary-blue/50 bg-bg-teal p-2.5 lg:p-8
                        '
        >
          <div>
            <h3 className='font-medium text-2xl'>
              The powerful tools I use include:
            </h3>
            <br />
            <p
              className='font-medium text-dark-blue'
            >
              Front-end technologies like HTML, CSS, JavaScript, React, 
              and SCSS — along with back-end tools such as Node.js, Express, and MongoDB. 
              I also work with Git & GitHub for version control, and I use EJS, Tailwind, 
              and REST APIs to bring functionality and structure to my projects. 
            </p>
          </div>
        </div>
        <div className='grid grid-cols-1 gap-2.5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-y-16 '>
              {skills.map(skill =>(
                <div key={skill.id} className='flex flex-row gap-10 items-center'>
                  <div className='w-10 sm:w-12.5 h-10 sm:h-12.5  bg-bg-skills flex justify-center items-center'>
                    <img src={skill.icon} alt={skill.name} className='w-6 h-6 sm:w-7.5 sm:h-7.5'/>
                  </div>
                  <div>
                    <h3 className='font-medium text-[20px] sm:text-2xl'>
                      {skill.name}
                    </h3>
                    <p className='font-medium text-sm text-dark-blue text-[18px]'>
                      {skill.description}
                    </p>
                  </div>

                </div>
              ))}
          </div>
        </div>
        <a
          href='#projects' 
          className="hidden lg:flex items-center justify-center text-[18px]
                              gap-2.5 text-white bg-black w-52 h-13 rounded-3xl "
        >
          My Projects
          <ScrollImg /> 
        </a>
    </div>
   
  )
}

export default Skills