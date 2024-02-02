import React from "react";

function Contact() {
  return (
    <>
      <section id="contact" className="pb-16">
        <div className="container">
          <h2 className="text-headingColor mb-8 font-[700] text-[2.4rem]">
            Get in touch
          </h2>
          <div className="md:flex justify-between items-center">
            {/* Contact Form */}

            <div className="w-full mt-8 md:mt-0 md:w-1/2 sm:h-[450px] lg-flex items-center bg-[#ADBC9F] bg-opacity-80 px-4 lg:px-8 py-8">
              <form className="w-full">
                <div className="mb-5">
                  <input
                    className="w-full p-3 focus:outline-none rounded-[5px]"
                    type="text"
                    placeholder="Enter your name"
                  />
                </div>
                <div className="mb-5">
                  <input
                    className="w-full p-3 focus:outline-none rounded-[5px]"
                    type="email"
                    placeholder="Enter your email"
                  />
                </div>
                <div className="mb-5">
                  <input
                    className="w-full p-3 focus:outline-none rounded-[5px]"
                    type="text"
                    placeholder="Your location"
                  />
                </div>
                <div className="mb-5">
                  <textarea
                    rows="4"
                    placeholder="Your message here"
                    className="w-full p-3 focus:outline-none rounded-[5px]"
                  ></textarea>
                </div>

                <button className="w-full p-3  focus:outline-none bg-smallTextColor text-white hover:bg-headingColor rounded-[5px]">
                  Submit Message
                </button>
              </form>
            </div>

            {/* Location MAP */}
            <div className="w-full md:w-1/2 h-[300px] sm:h-[450px]">
              <iframe
              title="google-map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1700.0043864200504!2d74.33693865!3d31.55137385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391904c8747e300b%3A0x1b002cf859f85b!2sPatiala%20House%20G.O.R.%20-%20I%2C%20Lahore%2C%20Punjab!5e0!3m2!1sen!2s!4v1700297416616!5m2!1sen!2s"
                className="border-0 w-full h-full"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
