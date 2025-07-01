import React from 'react';

const ContactMe = () => {
  return (
    <section id="contact" className="px-5 py-10 sm:px-16 lg:px-[170px] text-primary-black">
      <div className="max-w-3xl mx-auto">
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
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-blue"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-blue"
              required
            />
          </div>

          <input
            type="text"
            placeholder="Subject (Optional)"
            className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-blue"
          />

          <textarea
            placeholder="Your Message"
            rows="6"
            className="px-4 py-3 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-primary-blue"
            required
          />

          <button
            type="submit"
            className="bg-blue-700 text-white py-3 px-6 rounded-lg font-semibold hover:bg-primary-blue transition-colors duration-300 w"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactMe;
