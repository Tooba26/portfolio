import React from "react";
// import heroImg from "../../assets/abhero.png";
import Resume from "../../assets/CV.pdf";
import Countup from "react-countup";

const Hero = () => {
  return (
    <>
      <section className="pt-0 bg-[#ADBC9F]" id="about">
        <div className="container pt-14">
          <div className="md:flex items-center gap-4 justify-between sm:felx-col md:flex-row">
            {/* _________Right Side_____ */}

            {/* Hero Img */}

            {/* <div className="basis-1/3 mt-10 sm:mt-0"> */}
              {/* <figure className="flex items-center justify-center">
                <img
                  className="rounded-[40%] border-headingColor"
                  src={heroImg}
                  alt="Abbas's Photo"
                  data-aos="zoom-in"
                  data-aos-duration="1800"
                />
              </figure> */}
            {/* </div> */}
            {/*___________________Left Side_____________ */}
            <div className="w-full md:basis-1/2">
              <h5
                data-aos="fade-right"
                data-aos-duration="1500"
                className="text-headerFont font-[600] text-[16px]"
              >
                Welcome
              </h5>
              <h1
                data-aos="fade-up"
                data-aos-duration="1500"
                className="text-headingColor font-[800] text-[1.8rem] sm:text-[40px] leading-[35px] sm:leading-[46px] mt-5"
              >
                I'm <span className="text-headerFont">Tooba Mehboob</span>{" "}
                <br />
                Front end Developer
              </h1>

              <div
                data-aos="fade-up"
                data-aos-duration="1800"
                data-aos-delay="200"
                className="flex items-center gap-6 mt-7"
              >
                <a
                  className="text-headerFont font-[600] text-[16px] border-b-2 border-solid hover:text-smallTextColor border-smallTextColor hover:border-b-headingColor"
                  href="#portfolio"
                >
                  See Portfolio
                </a>
                <a href="#contact">
                  <button className="bg-smallTextColor text-white font-[500] flex items-center gap-2 hover:bg-headingColor ease-in duration-300 py-2 px-4 rounded-[8px]">
                    <i class="ri-mail-line"> Hire Me</i>
                  </button>
                </a>
                <div className="flex md:hidden items-center gap-4">
                  <a
                    href={Resume}
                    download
                    className="flex items-center gap-2 text-smallTextColor font-[600] border border-solid border-smallTextColor py-2 sm:px-4 px-2 rounded-[8px] max-h-[40px] hover:bg-smallTextColor hover:text-white text-[14px] hover:font-[500] ease-in duration-300"
                  >
                    <i class="ri-file-download-line"></i> Resume
                  </a>
                </div>
              </div>
              <p
                data-aos="fade-left"
                data-aos-duration="1500"
                className="flex gap-2 text-headingColor mt-12 font-[500] text-[16px] leading-7 sm:pl-14 sm:pr10"
              >
                <span>
                  <i class="ri-apps-line"></i>
                </span>
                As a skilled Front end developer, I bring expertise in building
                dynamic and responsive web applications using MongoDB,
                Express.js, React / Next, and Node.js. Eager to contribute my
                technical skills, creativity, and dedication to developing
                cutting edge web applications. I thrive in dynamic environments
                and continuously strive to stay updated with the latest industry
                trends and best practices
              </p>

              {/*________________ Follow Me_____________ */}

              <div className="flex items-center gap-9 mt-14">
                <span className="text-smallTextColor text-[15px] font-[600]">
                  Follow Me
                </span>
                <span className="hover:scale-150">
                  <a
                    className="text-smallTextColor text-[15px] font-[600]"
                    href="#fb"
                  >
                    <i class="ri-facebook-line"></i>
                  </a>
                </span>
                <span className="hover:scale-150">
                  <a
                    className="text-smallTextColor text-[15px] font-[600]"
                    href="#insta"
                  >
                    <i class="ri-instagram-line"></i>
                  </a>
                </span>
                <span className="hover:scale-150">
                  <a
                    className="text-smallTextColor text-[15px] font-[600]"
                    href="#git"
                  >
                    <i class="ri-github-line"></i>
                  </a>
                </span>
                <span className="hover:scale-150">
                  <a
                    className="text-smallTextColor text-[15px] font-[600]"
                    href="https://www.linkedin.com/in/tooba-mehboob-31697620a/"
                    target="_tab"
                  >
                    <i class="ri-linkedin-line"></i>
                  </a>
                </span>
              </div>
            </div>

            {/* _________Right Side_____ */}

            {/* Hero content */}

            <div className="md:basis-1/5 flex justify-between text-center mt-10 flex-wrap gap-3 md:mt-0 md:flex-col md:justify-end md:text-end">
              {/* ____________ */}
              <div className="mb-10">
                <h2 className="headingColor font-[700] text-[32px]">
                  <Countup start={0} end={1} duration={4} suffix="+" />
                </h2>

                <h4 className="headingColor font-[600] text-[18px]">
                  Years of experience
                </h4>
              </div>
              {/* ____________ */}
              <div className="mb-10">
                <h2 className="headingColor font-[700] text-[32px]">
                  <Countup start={0} end={100} duration={2} suffix="+" />
                </h2>

                <h4 className="headingColor font-[600] text-[18px]">
                  Success rate
                </h4>
              </div>
              {/* ____________ */}
              <div className="mb-10">
                <h2 className="headingColor font-[700] text-[32px]">
                  <Countup start={0} end={10} duration={3} suffix="+" />
                </h2>

                <h4 className="headingColor font-[600] text-[18px]">
                  Projects
                </h4>
              </div>
              {/* ____________ */}
              <div className="mb-10">
                <h2 className="headingColor font-[700] text-[32px]">
                  <Countup start={0} end={20} duration={2} suffix="+" />
                </h2>

                <h4 className="headingColor font-[600] text-[18px]">
                  Happy Clients
                </h4>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
