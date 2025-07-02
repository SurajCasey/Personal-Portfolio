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
      <section id="contact" className="px-5  sm:px-16  text-primary-black">
        <div className="max-w-3xl ">
          <h2 className="text-2xl lg:text-[32px] font-semibold text-primary-blue mb-4">
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
              className="bg-blue-700 text-white py-3 px-6 rounded-lg font-semibold
              hover:bg-primary-blue transition-colors duration-300 "
            >
              Submit
            </button>
         </form>
        </div>
      </section>

      <section id='social' className='flex flex-col items-start gap-5 px-5 sm:px-16 mt-8 sm:mt-24'>
        <h2 className="text-2xl lg:text-[32px] font-semibold text-primary-blue">
            Connect With Me
        </h2>
        <p>
          Follow or message me on these platforms:
        </p>
        <div className='grid grid-cols-3 gap-10 sm:grid-cols-6 sm:gap-5 bigscreen:hidden'>
         <LinkedIcon className="w-7 h-7 sm:w-12 sm:h-12 text-button-blue"/>
         <InstagramIcon className="w-7 h-7 sm:w-12 sm:h-12 text-button-blue"/>
         <GithubIcon className="w-7 h-7 sm:w-12 sm:h-12 text-button-blue"/>
         <PhoneIcon className="w-7 h-7 sm:w-12 sm:h-12 text-button-blue"/>
         <FrontEndMentorIcon className="w-7 h-7 sm:w-12 sm:h-12 text-button-blue"/>
         <GmailIcon className="w-7 h-7 sm:w-12 sm:h-12 text-button-blue"/>
        </div>

        {/* for large screens */}
        <div className="hidden bigscreen:flex bigscreen:flex-col bigscreen:gap-6 bigscreen:items-center">
          {/* Row 1 - 3 icons */}
          <div className="flex justify-center gap-12">
            <LinkedIcon className="w-12 h-12 text-button-blue" />
            <InstagramIcon className="w-12 h-12 text-button-blue" />
            <GithubIcon className="w-12 h-12 text-button-blue" />
          </div>
          {/* Row 2 - 2 icons */}
          <div className="flex justify-center gap-12">
            <PhoneIcon className="w-12 h-12 text-button-blue" />
            <FrontEndMentorIcon className="w-12 h-12 text-button-blue" />
          </div>
          {/* Row 3 - 1 icon */}
          <div className="flex justify-center gap-12">
            <GmailIcon className="w-12 h-12 text-button-blue" />
          </div>

          <a 
            href="#top"
            className='text-blue-900 flex flex-col justify-center items-center mt-28'
          >
            <NavTopIcon className='w-12 h-12'/> Back to top     
          </a>
        </div> 


      </section>

    </div>
    
  );
};

export default ContactMe;
