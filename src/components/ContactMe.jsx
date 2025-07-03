import LinkedIcon from '../assets/icons/linkedin.svg?react'
import InstagramIcon from '../assets/icons/instagram.svg?react'
import GithubIcon from '../assets/logos/github-icon.svg?react'
import PhoneIcon from '../assets/icons/telephone.svg?react'
import FrontEndMentorIcon from '../assets/icons/iduaR-iy4z_1750645987709.svg?react'
import GmailIcon from '../assets/icons/icons8-gmail.svg?react'
import NavTopIcon from '../assets/icons/arrow-up-circle-fill.svg?react'

const ContactMe = () => {
  return (
    <div className='py-10 bigscreen:flex bigscreen:flex-row bigscreen:px-[170px]'>
      <section data-aos="fade-right"  id="contact" className="px-5  sm:px-16  text-primary-black">
        <div className="max-w-3xl ">
          <h2 data-aos="fade-right"  
            className="text-2xl lg:text-[32px] font-semibold text-primary-blue mb-4">
            Contact Me
          </h2>
          <p className="text-lg mb-8">
            Have a project in mind or just want to say hello?
          </p>

          <form className="flex flex-col gap-5">
            <div className="flex flex-col sm:flex-row gap-5">
              <input
               type="text"
                placeholder="Your Full Name"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg 
                focus:outline-none focus:ring-2 focus:ring-primary-blue"
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg 
                focus:outline-none focus:ring-2 focus:ring-primary-blue"
                required
              />
            </div>

            <input
              type="text"
              placeholder="Subject (Optional)"
              className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none 
              focus:ring-2 focus:ring-primary-blue"
            />

            <textarea
              placeholder="Your Message"
              rows="6"
              className="px-4 py-3 border border-gray-300 rounded-lg resize-none
              focus:outline-none focus:ring-2 focus:ring-primary-blue"
              required
            />

            <button
              type="submit"
              className="bg-blue-500 text-white py-3 px-6 rounded-lg font-semibold
              hover:bg-blue-900  hover:font-bold transition-colors duration-300 cursor-pointer"
            >
              Submit
            </button>
         </form>
        </div>
      </section>

      <section id='social' className='flex flex-col items-start gap-5 px-5 sm:px-16 mt-8 sm:mt-24 lg:mt-0'>
        <h2 data-aos="fade-right" className="text-2xl lg:text-[32px] font-semibold text-primary-blue">
            Connect With Me
        </h2>
        <p data-aos="fade-right">
          Follow or message me on these platforms:
        </p>
        <div className='grid grid-cols-3 gap-10 sm:grid-cols-6 sm:gap-5 bigscreen:hidden'>
          <div data-aos="zoom-in" data-aos-duration="500" >
            <LinkedIcon className=" cursor-pointer w-7 h-7 sm:w-12 sm:h-12 text-button-blue hover:text-blue-700 transition-colors duration-300"/>
          </div>
          <div data-aos="zoom-in" data-aos-duration="600" >
            <InstagramIcon  className=" cursor-pointer w-7 h-7 sm:w-12 sm:h-12 text-button-blue hover:text-pink-600 transition-colors duration-300"/>
          </div>
          <div data-aos="zoom-in" data-aos-duration="700" >
            <GithubIcon  className=" cursor-pointer w-7 h-7 sm:w-12 sm:h-12 text-button-blue hover:text-gray-800 transition-colors duration-300"/>
          </div>
          <div data-aos="zoom-in" data-aos-duration="800" > 
            <PhoneIcon  className=" cursor-pointer w-7 h-7 sm:w-12 sm:h-12 text-button-blue hover:text-green-600 transition-colors duration-300"/>
          </div>
          <div data-aos="zoom-in" data-aos-duration="900" >
            <FrontEndMentorIcon  className="cursor-pointer w-7 h-7 sm:w-12 sm:h-12 text-button-blue hover:text-cyan-500 transition-colors duration-300"/>
          </div>
          <div data-aos="zoom-in" data-aos-duration="1000" >
            <GmailIcon  className="cursor-pointer w-7 h-7 sm:w-12 sm:h-12 text-button-blue hover:text-red-600 transition-colors duration-300"/>
          </div>
        </div>

        {/* for large screens */}
        <div className="hidden bigscreen:flex bigscreen:flex-col bigscreen:gap-6 bigscreen:items-center">
          {/* Row 1 - 3 icons */}
          <div className="flex justify-center gap-12">
            <div data-aos="zoom-in" data-aos-duration="100" >
              <LinkedIcon className=" cursor-pointer w-12 h-12 text-button-blue hover:text-blue-700 transition-colors duration-300" />
            </div>
             <div data-aos="fade-right" data-aos-delay="100" data-aos-duration="200">
              <InstagramIcon  className=" cursor-pointer w-12 h-12 text-button-blue hover:text-pink-600 transition-colors duration-300" />
            </div>
            <div data-aos="fade-right" data-aos-delay="300" data-aos-duration="200">
              <GithubIcon  className=" cursor-pointer w-12 h-12 text-button-blue hover:text-gray-800 transition-colors duration-300" />
            </div>
          </div>
          {/* Row 2 - 2 icons */}
          <div className="flex justify-center gap-12">
            <div data-aos="fade-up-left" data-aos-delay="900" data-aos-duration="200" >
              <PhoneIcon className=" cursor-pointer w-12 h-12 text-button-blue hover:text-green-600 transition-colors duration-300" />
            </div>
            <div data-aos="fade-down-left" data-aos-delay="500" data-aos-duration="200">
              <FrontEndMentorIcon  className=" cursor-pointer w-12 h-12 text-button-blue hover:text-cyan-500 transition-colors duration-300" />
            </div>
          </div>
          {/* Row 3 - 1 icon */}
          <div data-aos="fade-down-left" data-aos-delay="700" data-aos-duration="200" className="flex justify-center gap-12">
            <GmailIcon  className=" cursor-pointer w-12 h-12 text-button-blue hover:text-red-600 transition-colors duration-300" />
          </div>

          <a data-aos="zoom-in-up" 
            href="#top"
            className='group text-blue-900 flex flex-col justify-center items-center mt-28'
          >
            <NavTopIcon className='w-12 h-12 transform transition-transform duration-300 group-hover:-translate-y-3 group-hover:text-gray-400'/> 
            Back to top     
          </a>
        </div> 


      </section>

    </div>
    
  );
};

export default ContactMe;
