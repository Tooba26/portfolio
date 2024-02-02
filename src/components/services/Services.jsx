import React from "react";
import fd from "../../assets/fdd.jpeg";

const Services = () => {
  return (
    <>
      <section id="services">
        <div className="container lg:pt-5">
          <div className="text-center">
            <h2 className="text-headingColor font-[800] text-[2.4rem] mb-5">
              What do I help
            </h2>
            <div className="lg:max-w-[600px] lg:mx-auto text-headingColor font-[500] text-[16px] leading-7">
              <p>
                As a web developer, I can assist you in various ways. Here are
                some ways I can help: <br />I can provide guidance on popular
                frameworks and libraries like React, Next, Tailwind, etc. I can
                guide you on using version control systems like Git for
                collaborative development.
              </p>
              <h2 className="text-[20px] font-[700] mt-2">Tech Stack:</h2>
              <div className="flex justify-center items-center">
                <h3 className="font-[700] mr-2">Frontend Frameworks:</h3>
                <span className="">React js, Next js</span>
              </div>
              <div className="flex justify-center items-center">
                <h3 className="font-[700] mr-2">Backend Frameworks:</h3>
                <span className="">Express js, Nest js</span>
              </div>
              <div className="flex justify-center items-center">
                <h3 className="font-[700] mr-2">Mobile App:</h3>
                <span className="">React Native</span>
              </div>

              <div className="flex justify-center items-center">
                <h3 className="font-[700] mr-2">WEB 3:</h3>
                <span className="">Solidity, Smart Contracts, Web3 js</span>
              </div>
              <div className="flex justify-center items-center">
                <h3 className="font-[700] mr-2">Databases:</h3>
                <span className="">MySQL, MongoDb, Firebase</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center sm:py-12 bg-[#D5F0C1]">
            <div className="w-full py-3 px-2 sm:max-w-xl sm:mx-auto sm:px-0">
              <div className="relative text-gray-700 antialiased text-sm font-semibold ">
                <div className="absolute w-1 sm:block bg-indigo-300 h-full left-1/2 transform -translate-x-1/2"></div>

                {/* Left card */}
                <div className="mt-6 sm:mt-0 sm:mb-12">
                  <div className="flex items-center flex-col sm:flex-row">
                    <div className="flex justify-start w-full mx-auto items-center">
                      <div className="w-full sm:w-1/2 sm:pr-8">
                        <div
                          data-aos="fade-right"
                          data-aos-duration="1200"
                          className="bg-white p-4 rounded shadow group hover:bg-[#F9F7C9] cursor-pointer ease-in duration-150"
                        >
                          <h3 className="text-primaryColor font-[700] mb-3 group-hover:font-[600] text-2xl ">
                            Frontend Development
                          </h3>
                          <p className="font-[16px] text-smallTextColor">
                            I can help you write, debug, and optimize React
                            code, providing specific solutions to problems you
                            encounter.I can help you with state management in
                            React, whether you're using Context API, Redux or
                            Redux-Toolkit.I can assist in integrating APIs in
                            your application.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center ">
                      <figure>
                        <img className="rounded-full" src={fd} alt="fd" />
                      </figure>
                    </div>
                  </div>
                </div>
                {/* __________Right___________ */}
                <div className="mt-6 sm:mt-0 sm:mb-12">
                  <div className="flex items-center flex-col sm:flex-row">
                    <div className="flex justify-end w-full mx-auto items-center">
                      <div className="w-full sm:w-1/2 sm:pl-8">
                        <div
                          data-aos="fade-left"
                          data-aos-duration="1200"
                          className="bg-white p-4 rounded shadow group hover:bg-[#F9F7C9] cursor-pointer ease-in duration-150"
                        >
                          <h3 className="text-primaryColor font-[700] mb-3 group-hover:font-[600] text-2xl">
                            Backend Development
                          </h3>
                          <p className="font-[16px] text-smallTextColor">
                            I can assist in designing and developing RESTful
                            APIs. implementing middleware functions in Express
                            to handle requests, authentication, error handling.
                            Integrating databases. implementing authentication
                            and authorization mechanisms, including strategies
                            like JWT or OAuth.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center ">
                      <figure>
                        <img className="rounded-full" src={fd} alt="fd" />
                      </figure>
                    </div>
                  </div>
                </div>
                {/* Left card */}
                <div className="mt-6 sm:mt-0 sm:mb-12">
                  <div className="flex items-center flex-col sm:flex-row">
                    <div className="flex justify-start w-full mx-auto items-center">
                      <div className="w-full sm:w-1/2 sm:pr-8">
                        <div
                          data-aos="fade-right"
                          data-aos-duration="1200"
                          className="bg-white p-4 rounded shadow group hover:bg-[#F9F7C9] cursor-pointer ease-in duration-150"
                        >
                          <h3 className="text-primaryColor font-[700] mb-3 group-hover:font-[600] text-2xl">
                            UI/UX
                          </h3>
                          <p className="font-[16px] text-smallTextColor">
                            I can help you create wireframes and high-fidelity
                            mockups for your web or mobile applications,
                            ensuring a clear visual representation of your
                            ideas.I can guide you through creating interactive
                            prototypes in Figma, allowing you to demonstrate
                            user flows and interactions.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center ">
                      <figure>
                        <img className="rounded-full" src={fd} alt="fd" />
                      </figure>
                    </div>
                  </div>
                </div>
                {/* __________Right___________ */}
                <div className="mt-6 sm:mt-0 sm:mb-12">
                  <div className="flex items-center flex-col sm:flex-row">
                    <div className="flex justify-end w-full mx-auto items-center">
                      <div className="w-full sm:w-1/2 sm:pl-8">
                        <div
                          data-aos="fade-left"
                          data-aos-duration="1200"
                          className="bg-white p-4 rounded shadow group hover:bg-[#F9F7C9] cursor-pointer ease-in duration-150"
                        >
                          <h3 className="text-primaryColor font-[700] mb-3 group-hover:font-[600] text-2xl ">
                            Blockchain
                          </h3>
                          <p className="font-[16px] text-smallTextColor">
                            I can assist in writing, debugging, and optimizing
                            smart contracts using Solidity, the primary language
                            for Ethereum smart contracts.I can guide you in
                            building decentralized applications that interact
                            with the Ethereum blockchain, including the frontend
                            "using technologies like React" and the backend
                            "using technologies like Web3.js or ethers.js".
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center">
                      <figure>
                        <img className="rounded-full" src={fd} alt="fd" />
                      </figure>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
