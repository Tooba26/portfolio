import React, { useState } from "react";
import data from "../../assets/data/portfolioData";
import Modal from "../modal/Modal";

const Portfolio = () => {
  const [projectedPortfolios, setProjectedPortfolios] = useState(6);
  const [showModal, setShowModal] = useState(false);
  const [currentId, setCurrentId] = useState(null);

  const moreHandler = () => {
    setProjectedPortfolios((prev) => prev + 3);
  };
  return (
    <>
      <section id="portfolio">
        <div className="container">
          <div className="flex items-center flex-wrap justify-start">
            <div className="mb-7 sm:mb-0">
              <h3 className="text-headingColor text-[2rem] font-[700]">
                My recent projects
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-4 flex-wrap mt-12">
            {data.slice(0, projectedPortfolios)?.map((item, index) => {
              return (
                <div
                  className="group max-w-full sm:w-[48.5%] md:w-[31.8%] lg:w-[32.2%] relative z-[1]"
                  key={index}
                >
                  <figure>
                    <img
                      className="rounded-[8px]"
                      src={item.imgUrl}
                      alt="project img"
                    />
                  </figure>
                  <div className="w-full h-full bg-primaryColor absolute top-0 left-0 z-10 bg-opacity-40 hidden group-hover:block rounded-[8px] hover:cursor-pointer">
                    <div className="flex w-full h-full items-center justify-center">
                      <button
                        onClick={() => {
                          setShowModal(true);
                          setCurrentId(item.id);
                        }}
                        className="bg-headingColor hover:bg-smallTextColor rounded-[8px] py-2 px-4 text-white font-[500]"
                      >
                        See Details
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          {projectedPortfolios < data.length && (
            <div className="text-center mt-6">
              <button
                onClick={moreHandler}
                className="text-white bg-headingColor hover:bg-smallTextColor font-[500] py-2 px-4 rounded-[8px] ease-in duration-200"
              >
                Load More
              </button>
            </div>
          )}
        </div>
        {showModal && <Modal setShowModal={setShowModal} currentId={currentId} />}
      </section>
    </>
  );
};

export default Portfolio;
