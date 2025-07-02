import projects from "../data/projects.json";
import LinkImg from "../assets/icons/box-arrow-up-right.svg?react";
import ScrollImg from '../assets/icons/arrow-down-square.svg?react';

const imageMap = import.meta.glob('../assets/apps/*.png', {
  eager: true,
  import: 'default',
});

const Projects = () => {
  return (
    <div className="px-5 mt-8 flex flex-col gap-5 sm:px-16 lg:px-32"> 
      <h2 id="projects" className='font-semibold text-2xl lg:text-[32px] text-primary-blue'>
        Projects Highlights
      </h2>
      
      <div className="flex flex-col gap-4.5 items-center sm:items-start lg:grid bigscreen:grid-cols-2 lg:gap-10">
        {projects.map(project => (
          <div key={project.id} className="flex flex-col items-center sm:flex-row sm:gap-5 sm:border-2 sm:border-primary-blue sm:min-w-[542px] sm:max-w-[615px] sm:bg-white sm:rounded-3xl overflow-hidden sm:w-full">
            <div>
              <img
                src={imageMap[`../assets/apps/${project.img}`]}
                alt={project.name}
                className="w-37.5 h-22.5 rounded-2xl sm:w-63 sm:h-37"
              />
            </div>
            <div className="flex flex-col sm:gap-5">
              <h1 className="text-center mb-1 sm:text-left sm:text-2xl sm:font-medium">
                {project.name}
              </h1>
              <div className="hidden sm:flex sm:gap-3">
                {project.tools.map((tool, index) => (
                  <p key={index} className="border border-bg-skills rounded-2xl px-3 sm:font-medium">
                    {tool}
                  </p>
                ))}
              </div>
              <div className="flex gap-4 sm:text-[20px]">
                <a href={project.site.liveSite} className="flex items-center gap-1">
                  Live Site <LinkImg />
                </a>
                <a href={project.site.viewCode} className="flex items-center gap-1">
                  View Code <LinkImg />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center">
        <a 
          href="#contact"
          className="hidden lg:flex items-center justify-center gap-2.5 text-white bg-black w-61 h-13 rounded-3xl"
        >
          Let's Connect 
          <ScrollImg /> 
        </a>
      </div>
    </div>
  );
};

export default Projects;
